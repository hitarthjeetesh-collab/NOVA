from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


app = FastAPI(
    title="AEVRA API",
    version="0.1.0",
)

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "https://ai-engineering-platform.pages.dev",
        "https://aevra.tech",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ProjectCreate(BaseModel):
    name: str


projects = []


@app.get("/")
def root():
    return {
        "name": "AEVRA API",
        "status": "online",
        "version": "0.1.0",
    }


@app.get("/health")
def health():
    return {
        "status": "healthy",
    }


@app.get("/api/projects")
def get_projects():
    return {
        "projects": projects,
    }


@app.post("/api/projects")
def create_project(project: ProjectCreate):
    new_project = {
        "id": len(projects) + 1,
        "name": project.name,
    }

    projects.append(new_project)

    return new_project