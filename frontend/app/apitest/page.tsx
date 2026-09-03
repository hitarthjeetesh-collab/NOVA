"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";

type ApiStatus = {
  name: string;
  status: string;
  version: string;
};

type ChatResponse = {
  message: string;
  response: string;
};

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function ApiTestPage() {
  const [apiStatus, setApiStatus] = useState<ApiStatus | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    apiFetch<ApiStatus>("/")
      .then(setApiStatus)
      .catch((err) => {
        setApiError(
          err instanceof Error ? err.message : "Unknown error"
        );
      });
  }, []);

  async function sendMessage() {
    const message = input.trim();

    if (!message || sending) {
      return;
    }

    setInput("");

    setMessages((current) => [
      ...current,
      {
        role: "user",
        content: message,
      },
    ]);

    setSending(true);

    try {
      const result = await apiFetch<ChatResponse>("/api/chat", {
        method: "POST",
        body: JSON.stringify({
          message,
        }),
      });

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: result.response,
        },
      ]);
    } catch (err) {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            err instanceof Error
              ? `API error: ${err.message}`
              : "API error: Unknown error",
        },
      ]);
    } finally {
      setSending(false);
    }
  }

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLInputElement>
  ) {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  }

  return (
    <main className="min-h-screen bg-[#0b0d10] p-8 text-white">
      <div className="mx-auto flex max-w-3xl flex-col">
        <h1 className="text-2xl font-semibold">
          AEVRA API Test
        </h1>

        <p className="mt-2 text-sm text-white/40">
          Frontend → AEVRA API connection test
        </p>

        <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-5">
          {apiError && (
            <div>
              <p className="text-sm font-medium text-red-400">
                API connection failed
              </p>

              <p className="mt-2 text-sm text-white/40">
                {apiError}
              </p>
            </div>
          )}

          {apiStatus && (
            <div>
              <p className="text-sm font-medium text-green-400">
                API connected
              </p>

              <div className="mt-3 space-y-1 text-sm">
                <div>
                  <span className="text-white/40">
                    Name:{" "}
                  </span>
                  {apiStatus.name}
                </div>

                <div>
                  <span className="text-white/40">
                    Status:{" "}
                  </span>
                  {apiStatus.status}
                </div>

                <div>
                  <span className="text-white/40">
                    Version:{" "}
                  </span>
                  {apiStatus.version}
                </div>
              </div>
            </div>
          )}

          {!apiStatus && !apiError && (
            <p className="text-sm text-white/50">
              Connecting to API...
            </p>
          )}
        </div>

        <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
          <div className="border-b border-white/10 px-5 py-4">
            <h2 className="text-sm font-medium">
              Conversation Test
            </h2>
          </div>

          <div className="min-h-[400px] space-y-4 p-5">
            {messages.length === 0 && (
              <div className="flex min-h-[350px] items-center justify-center">
                <p className="text-sm text-white/30">
                  Send a message to test the API.
                </p>
              </div>
            )}

            {messages.map((message, index) => (
              <div
                key={index}
                className={
                  message.role === "user"
                    ? "flex justify-end"
                    : "flex justify-start"
                }
              >
                <div
                  className={
                    message.role === "user"
                      ? "max-w-[80%] rounded-xl bg-white px-4 py-3 text-sm text-black"
                      : "max-w-[80%] rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white/80"
                  }
                >
                  <p className="mb-1 text-xs font-medium opacity-40">
                    {message.role === "user"
                      ? "You"
                      : "AEVRA"}
                  </p>

                  <p>{message.content}</p>
                </div>
              </div>
            ))}

            {sending && (
              <div className="flex justify-start">
                <div className="rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white/40">
                  AEVRA is responding...
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-white/10 p-4">
            <div className="flex gap-3">
              <input
                value={input}
                onChange={(event) =>
                  setInput(event.target.value)
                }
                onKeyDown={handleKeyDown}
                placeholder="Send a message..."
                disabled={sending}
                className="min-w-0 flex-1 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-white/20 disabled:opacity-50"
              />

              <button
                type="button"
                onClick={sendMessage}
                disabled={!input.trim() || sending}
                className="rounded-lg bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-30"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}