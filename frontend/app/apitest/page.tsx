"use client";

import { useState } from "react";

type Project = {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
};

type UploadedFile = {
  id: string;
  project_id: string;
  filename: string;
  storage_key: string;
  content_type: string;
  size: number;
  category: string;
  bucket: string;
  created_at: string;
  updated_at: string;
  status: string;
};

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://127.0.0.1:8000";


export default function ApiTestPage() {
  const [apiStatus, setApiStatus] = useState<string | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);

  const [projectName, setProjectName] =
    useState("AEVRA Test Project");

  const [project, setProject] =
    useState<Project | null>(null);

  const [projectError, setProjectError] =
    useState<string | null>(null);

  const [selectedFile, setSelectedFile] =
    useState<File | null>(null);

  const [category, setCategory] =
    useState("documents");

  const [uploading, setUploading] =
    useState(false);

  const [uploadResult, setUploadResult] =
    useState<UploadedFile | null>(null);

  const [uploadError, setUploadError] =
    useState<string | null>(null);

  const [projectFiles, setProjectFiles] =
    useState<UploadedFile[]>([]);

  const [filesError, setFilesError] =
    useState<string | null>(null);


  // ---------------------------------------------------------------
  // API status
  // ---------------------------------------------------------------

  async function testApi() {
    setApiStatus(null);
    setApiError(null);

    try {
      const response = await fetch(
        `${API_URL}/health`
      );

      if (!response.ok) {
        throw new Error(
          `${response.status} ${response.statusText}`
        );
      }

      const result = await response.json();

      setApiStatus(
        JSON.stringify(result, null, 2)
      );
    } catch (error) {
      setApiError(
        error instanceof Error
          ? error.message
          : "API request failed"
      );
    }
  }


  // ---------------------------------------------------------------
  // Create project
  // ---------------------------------------------------------------

  async function createProject() {
    setProject(null);
    setProjectError(null);

    try {
      const response = await fetch(
        `${API_URL}/api/projects`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: projectName,
          }),
        }
      );

      if (!response.ok) {
        const errorText =
          await response.text();

        throw new Error(
          `${response.status} ${response.statusText}: ${errorText}`
        );
      }

      const result: Project =
        await response.json();

      setProject(result);
      setProjectFiles([]);
    } catch (error) {
      setProjectError(
        error instanceof Error
          ? error.message
          : "Project creation failed"
      );
    }
  }


  // ---------------------------------------------------------------
  // Upload file
  // ---------------------------------------------------------------

  async function uploadFile() {
    if (!selectedFile || !project || uploading) {
      return;
    }

    setUploading(true);
    setUploadResult(null);
    setUploadError(null);

    try {
      const formData = new FormData();

      formData.append(
        "file",
        selectedFile
      );

      const response = await fetch(
        `${API_URL}/api/files/upload?project_id=${encodeURIComponent(
          project.id
        )}&category=${encodeURIComponent(
          category
        )}`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        const errorText =
          await response.text();

        throw new Error(
          `${response.status} ${response.statusText}: ${errorText}`
        );
      }

      const result: UploadedFile =
        await response.json();

      setUploadResult(result);
      setSelectedFile(null);

      await loadProjectFiles(project.id);
    } catch (error) {
      setUploadError(
        error instanceof Error
          ? error.message
          : "File upload failed"
      );
    } finally {
      setUploading(false);
    }
  }


  // ---------------------------------------------------------------
  // Load project files
  // ---------------------------------------------------------------

  async function loadProjectFiles(
    projectId: string
  ) {
    setFilesError(null);

    try {
      const response = await fetch(
        `${API_URL}/api/projects/${encodeURIComponent(
          projectId
        )}/files`
      );

      if (!response.ok) {
        const errorText =
          await response.text();

        throw new Error(
          `${response.status} ${response.statusText}: ${errorText}`
        );
      }

      const result = await response.json();

      setProjectFiles(
        result.files || []
      );
    } catch (error) {
      setFilesError(
        error instanceof Error
          ? error.message
          : "Could not load project files"
      );
    }
  }


  return (
    <main className="min-h-screen bg-[#0b0d10] p-8 text-white">
      <div className="mx-auto max-w-4xl space-y-8">

        {/* ------------------------------------------------------- */}
        {/* Header */}
        {/* ------------------------------------------------------- */}

        <div>
          <h1 className="text-2xl font-semibold">
            AEVRA API Test
          </h1>

          <p className="mt-2 text-sm text-white/40">
            Test the AEVRA backend, Firestore,
            and Filebase integration.
          </p>
        </div>


        {/* ------------------------------------------------------- */}
        {/* API */}
        {/* ------------------------------------------------------- */}

        <section className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-lg font-medium">
            API Status
          </h2>

          <button
            onClick={testApi}
            className="mt-4 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90"
          >
            Test API
          </button>

          {apiStatus && (
            <pre className="mt-4 overflow-auto rounded-lg bg-black/30 p-4 text-sm text-green-400">
              {apiStatus}
            </pre>
          )}

          {apiError && (
            <pre className="mt-4 overflow-auto rounded-lg bg-red-500/10 p-4 text-sm text-red-400">
              {apiError}
            </pre>
          )}
        </section>


        {/* ------------------------------------------------------- */}
        {/* Project */}
        {/* ------------------------------------------------------- */}

        <section className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-lg font-medium">
            Firestore Project
          </h2>

          <p className="mt-2 text-sm text-white/40">
            Create a project in Firestore to
            associate uploaded files with.
          </p>

          <div className="mt-4 flex gap-3">
            <input
              value={projectName}
              onChange={(event) =>
                setProjectName(
                  event.target.value
                )
              }
              className="flex-1 rounded-lg border border-white/10 bg-black/30 px-4 py-2 text-sm outline-none focus:border-white/30"
              placeholder="Project name"
            />

            <button
              onClick={createProject}
              className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90"
            >
              Create Project
            </button>
          </div>

          {project && (
            <div className="mt-4 rounded-lg bg-black/30 p-4">
              <p className="text-sm text-white/50">
                Project created
              </p>

              <p className="mt-1 font-medium">
                {project.name}
              </p>

              <p className="mt-2 break-all text-xs text-white/30">
                ID: {project.id}
              </p>
            </div>
          )}

          {projectError && (
            <pre className="mt-4 overflow-auto rounded-lg bg-red-500/10 p-4 text-sm text-red-400">
              {projectError}
            </pre>
          )}
        </section>


        {/* ------------------------------------------------------- */}
        {/* File upload */}
        {/* ------------------------------------------------------- */}

        <section className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-lg font-medium">
            Filebase + Firestore Upload
          </h2>

          <p className="mt-2 text-sm text-white/40">
            The actual file goes to Filebase.
            Its metadata is stored in Firestore.
          </p>

          {!project && (
            <p className="mt-4 rounded-lg bg-yellow-500/10 p-4 text-sm text-yellow-400">
              Create a project first.
            </p>
          )}

          <div className="mt-4 space-y-4">

            <div>
              <label className="mb-2 block text-sm text-white/50">
                File
              </label>

              <input
                type="file"
                disabled={!project || uploading}
                onChange={(event) =>
                  setSelectedFile(
                    event.target.files?.[0] ||
                    null
                  )
                }
                className="block w-full text-sm text-white/60 file:mr-4 file:rounded-lg file:border-0 file:bg-white file:px-4 file:py-2 file:text-sm file:font-medium file:text-black"
              />
            </div>


            <div>
              <label className="mb-2 block text-sm text-white/50">
                Category
              </label>

              <select
                value={category}
                onChange={(event) =>
                  setCategory(
                    event.target.value
                  )
                }
                disabled={!project || uploading}
                className="rounded-lg border border-white/10 bg-black/30 px-4 py-2 text-sm text-white outline-none"
              >
                <option value="cad">
                  CAD
                </option>

                <option value="documents">
                  Documents
                </option>

                <option value="images">
                  Images
                </option>

                <option value="exports">
                  Exports
                </option>

                <option value="other">
                  Other
                </option>
              </select>
            </div>


            <button
              onClick={uploadFile}
              disabled={
                !project ||
                !selectedFile ||
                uploading
              }
              className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-30"
            >
              {uploading
                ? "Uploading..."
                : "Upload File"}
            </button>
          </div>


          {uploadResult && (
            <div className="mt-6 rounded-lg bg-green-500/10 p-4">
              <p className="font-medium text-green-400">
                Upload successful
              </p>

              <div className="mt-3 space-y-1 text-xs text-white/50">
                <p>
                  File: {uploadResult.filename}
                </p>

                <p>
                  Size:{" "}
                  {uploadResult.size.toLocaleString()}{" "}
                  bytes
                </p>

                <p>
                  Category:{" "}
                  {uploadResult.category}
                </p>

                <p className="break-all">
                  Filebase key:{" "}
                  {uploadResult.storage_key}
                </p>

                <p className="break-all">
                  Firestore ID:{" "}
                  {uploadResult.id}
                </p>
              </div>
            </div>
          )}

          {uploadError && (
            <pre className="mt-4 overflow-auto rounded-lg bg-red-500/10 p-4 text-sm text-red-400">
              {uploadError}
            </pre>
          )}
        </section>


        {/* ------------------------------------------------------- */}
        {/* Project files */}
        {/* ------------------------------------------------------- */}

        {project && (
          <section className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-medium">
                  Project Files
                </h2>

                <p className="mt-1 text-sm text-white/40">
                  Files recorded in Firestore for
                  this project.
                </p>
              </div>

              <button
                onClick={() =>
                  loadProjectFiles(
                    project.id
                  )
                }
                className="rounded-lg border border-white/10 px-4 py-2 text-sm text-white/70 hover:bg-white/5"
              >
                Refresh
              </button>
            </div>


            {projectFiles.length === 0 ? (
              <p className="mt-6 text-sm text-white/30">
                No files uploaded yet.
              </p>
            ) : (
              <div className="mt-6 space-y-2">
                {projectFiles.map(
                  (file) => (
                    <div
                      key={file.id}
                      className="rounded-lg border border-white/5 bg-black/20 p-4"
                    >
                      <p className="font-medium">
                        {file.filename}
                      </p>

                      <div className="mt-2 space-y-1 text-xs text-white/40">
                        <p>
                          Category:{" "}
                          {file.category}
                        </p>

                        <p>
                          Size:{" "}
                          {file.size.toLocaleString()}{" "}
                          bytes
                        </p>

                        <p className="break-all">
                          Filebase:{" "}
                          {file.storage_key}
                        </p>

                        <p className="break-all">
                          Firestore ID:{" "}
                          {file.id}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            )}


            {filesError && (
              <pre className="mt-4 overflow-auto rounded-lg bg-red-500/10 p-4 text-sm text-red-400">
                {filesError}
              </pre>
            )}
          </section>
        )}

      </div>
    </main>
  );
}