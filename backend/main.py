from datetime import datetime, timezone
from uuid import uuid4

from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from services.firestore import get_firestore
from services.filebase import get_filebase, get_bucket


app = FastAPI(
    title="AEVRA API",
    version="0.3.0",
)


# -------------------------------------------------------------------
# CORS
# -------------------------------------------------------------------

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "https://novacentral.pages.dev",
        "https://aevra.tech",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# -------------------------------------------------------------------
# Models
# -------------------------------------------------------------------

class ChatMessage(BaseModel):
    message: str


class ProjectCreate(BaseModel):
    name: str


# -------------------------------------------------------------------
# General
# -------------------------------------------------------------------

@app.get("/")
def root():
    return {
        "name": "AEVRA API",
        "status": "online",
        "version": "0.3.0",
    }


@app.get("/health")
def health():
    return {
        "status": "healthy",
    }


# -------------------------------------------------------------------
# Firestore - Projects
# -------------------------------------------------------------------

@app.get("/api/projects")
def get_projects():
    db = get_firestore()

    projects_ref = db.collection("projects")

    projects = []

    for document in projects_ref.stream():
        project = document.to_dict() or {}
        project["id"] = document.id

        if "created_at" in project:
            project["created_at"] = (
                project["created_at"].isoformat()
            )

        if "updated_at" in project:
            project["updated_at"] = (
                project["updated_at"].isoformat()
            )

        projects.append(project)

    return {
        "projects": projects,
    }


@app.post("/api/projects")
def create_project(project: ProjectCreate):
    db = get_firestore()

    project_id = str(uuid4())

    now = datetime.now(timezone.utc)

    project_data = {
        "name": project.name,
        "created_at": now,
        "updated_at": now,
    }

    db.collection("projects").document(project_id).set(
        project_data
    )

    return {
        "id": project_id,
        "name": project.name,
        "created_at": now.isoformat(),
        "updated_at": now.isoformat(),
    }


# -------------------------------------------------------------------
# Filebase + Firestore - Files
# -------------------------------------------------------------------

@app.post("/api/files/upload")
async def upload_file(
    project_id: str,
    category: str = "other",
    file: UploadFile = File(...),
):
    if not project_id:
        raise HTTPException(
            status_code=400,
            detail="project_id is required",
        )

    if not file.filename:
        raise HTTPException(
            status_code=400,
            detail="No filename provided",
        )

    db = get_firestore()
    s3 = get_filebase()
    bucket = get_bucket()

    file_id = str(uuid4())
    filename = file.filename

    storage_key = (
        f"projects/{project_id}/{category}/"
        f"{file_id}/{filename}"
    )

    file_contents = await file.read()

    content_type = (
        file.content_type
        or "application/octet-stream"
    )

    # ---------------------------------------------------------------
    # Upload actual file to Filebase
    # ---------------------------------------------------------------

    try:
        s3.put_object(
            Bucket=bucket,
            Key=storage_key,
            Body=file_contents,
            ContentType=content_type,
        )
    except Exception as error:
        raise HTTPException(
            status_code=500,
            detail=f"Filebase upload failed: {error}",
        ) from error

    # ---------------------------------------------------------------
    # Store file metadata in Firestore
    # ---------------------------------------------------------------

    now = datetime.now(timezone.utc)

    file_data = {
        "id": file_id,
        "project_id": project_id,
        "filename": filename,
        "storage_key": storage_key,
        "content_type": content_type,
        "size": len(file_contents),
        "category": category,
        "bucket": bucket,
        "created_at": now,
        "updated_at": now,
    }

    try:
        db.collection("files").document(file_id).set(
            file_data
        )
    except Exception as error:
        # Firestore failed after Filebase succeeded.
        # Remove the Filebase object so we don't leave
        # an orphaned file behind.
        try:
            s3.delete_object(
                Bucket=bucket,
                Key=storage_key,
            )
        except Exception:
            pass

        raise HTTPException(
            status_code=500,
            detail=f"Firestore file record failed: {error}",
        ) from error

    # ---------------------------------------------------------------
    # Return file record
    # ---------------------------------------------------------------

    return {
        "id": file_id,
        "project_id": project_id,
        "filename": filename,
        "storage_key": storage_key,
        "content_type": content_type,
        "size": len(file_contents),
        "category": category,
        "bucket": bucket,
        "created_at": now.isoformat(),
        "updated_at": now.isoformat(),
        "status": "uploaded",
    }


@app.get("/api/projects/{project_id}/files")
def get_project_files(project_id: str):
    db = get_firestore()

    files_ref = (
        db.collection("files")
        .where("project_id", "==", project_id)
    )

    files = []

    for document in files_ref.stream():
        file_data = document.to_dict() or {}

        file_data["id"] = document.id

        if "created_at" in file_data:
            file_data["created_at"] = (
                file_data["created_at"].isoformat()
            )

        if "updated_at" in file_data:
            file_data["updated_at"] = (
                file_data["updated_at"].isoformat()
            )

        files.append(file_data)

    return {
        "project_id": project_id,
        "files": files,
    }


@app.get("/api/files")
def list_files():
    s3 = get_filebase()
    bucket = get_bucket()

    try:
        response = s3.list_objects_v2(
            Bucket=bucket,
            Prefix="projects/",
        )
    except Exception as error:
        raise HTTPException(
            status_code=500,
            detail=f"Filebase listing failed: {error}",
        ) from error

    files = []

    for item in response.get("Contents", []):
        files.append(
            {
                "key": item["Key"],
                "size": item["Size"],
                "last_modified": item[
                    "LastModified"
                ].isoformat(),
            }
        )

    return {
        "files": files,
    }


@app.delete("/api/files")
def delete_file(key: str):
    s3 = get_filebase()
    bucket = get_bucket()

    try:
        s3.delete_object(
            Bucket=bucket,
            Key=key,
        )
    except Exception as error:
        raise HTTPException(
            status_code=500,
            detail=f"Filebase deletion failed: {error}",
        ) from error

    return {
        "deleted": True,
        "key": key,
    }


# -------------------------------------------------------------------
# Chat
# -------------------------------------------------------------------

@app.post("/api/chat")
def chat(message: ChatMessage):
    return {
        "message": message.message,
        "response": f"AEVRA API received: {message.message}",
    }