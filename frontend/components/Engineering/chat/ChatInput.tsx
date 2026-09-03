"use client";

import { FormEvent, useState } from "react";

interface ChatInputProps {
  onSend: (message: string) => void;
}

export default function ChatInput({
  onSend,
}: ChatInputProps) {
  const [value, setValue] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const message = value.trim();

    if (!message) {
      return;
    }

    onSend(message);
    setValue("");
  }

  return (
    <div className="border-t border-white/10 p-4">
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex max-w-3xl items-end gap-2 rounded-xl border border-white/10 bg-[#111419] p-2"
      >
        <textarea
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Ask an engineering question..."
          rows={1}
          className="max-h-40 min-h-10 flex-1 resize-none bg-transparent px-3 py-2 text-sm text-white outline-none placeholder:text-white/30"
        />

        <button
          type="submit"
          className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90"
        >
          →
        </button>
      </form>
    </div>
  );
}