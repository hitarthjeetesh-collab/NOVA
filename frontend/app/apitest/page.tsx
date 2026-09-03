"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";

type ApiStatus = {
  name: string;
  status: string;
  version: string;
};

export default function ApiTestPage() {
  const [data, setData] = useState<ApiStatus | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiFetch<ApiStatus>("/")
      .then(setData)
      .catch((err) => {
        setError(err instanceof Error ? err.message : "Unknown error");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <main className="min-h-screen bg-[#0b0d10] p-8 text-white">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-2xl font-semibold">
          AEVRA API Test
        </h1>

        <p className="mt-2 text-sm text-white/40">
          Frontend → AEVRA API connection test
        </p>

        <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.03] p-6">
          {loading && (
            <p className="text-sm text-white/50">
              Connecting to API...
            </p>
          )}

          {error && (
            <div>
              <p className="text-sm font-medium text-red-400">
                API connection failed
              </p>

              <p className="mt-2 text-sm text-white/40">
                {error}
              </p>
            </div>
          )}

          {data && (
            <div>
              <p className="text-sm font-medium text-green-400">
                API connected
              </p>

              <div className="mt-4 space-y-2 text-sm">
                <div>
                  <span className="text-white/40">Name: </span>
                  {data.name}
                </div>

                <div>
                  <span className="text-white/40">Status: </span>
                  {data.status}
                </div>

                <div>
                  <span className="text-white/40">Version: </span>
                  {data.version}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}