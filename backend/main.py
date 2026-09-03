from datetime import datetime, timezone
from uuid import uuid4

from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from services.firestore import get_firestore
from services.filebase import get_filebase, get_bucket


app = FastAPI(
    title="AEVRA API",
    version="0.2.0",
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
        "version": "0.2.0",
    }


@app.get("/health")
def health():
    return {
        "status": "healthy",
    }


# -------------------------------------------------------------------
# Firestore
# -------------------------------------------------------------------

@app.get("/api/projects")
def get_projects():
    db = get_firestore()

    projects_ref = db.collection("projects")

    projects = []

    for document in projects_ref.stream():
        project = document.to_dict() or {}

        project["id"] = document.id

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
# Filebase
# -------------------------------------------------------------------

@app.post("/api/files/upload")
async def upload_file(
    file: UploadFile = File(...),
):
    if not file.filename:
        raise HTTPException(
            status_code=400,
            detail="No filename provided",
        )

    s3 = get_filebase()
    bucket = get_bucket()

    file_id = str(uuid4())

    filename = file.filename

    storage_key = f"uploads/{file_id}/{filename}"

    file_contents = await file.read()

    try:
        s3.put_object(
            Bucket=bucket,
            Key=storage_key,
            Body=file_contents,
            ContentType=file.content_type
            or "application/octet-stream",
        )
    except Exception as error:
        raise HTTPException(
            status_code=500,
            detail=f"Filebase upload failed: {error}",
        ) from error

    return {
        "id": file_id,
        "filename": filename,
        "storage_key": storage_key,
        "content_type": file.content_type
        or "application/octet-stream",
        "size": len(file_contents),
        "bucket": bucket,
        "status": "uploaded",
    }


@app.get("/api/files")
def list_files():
    s3 = get_filebase()
    bucket = get_bucket()

    try:
        response = s3.list_objects_v2(
            Bucket=bucket,
            Prefix="uploads/",
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