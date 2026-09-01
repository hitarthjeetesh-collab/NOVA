"use client";

import { useState } from "react";
import Message from "./Message";
import ChatInput from "./ChatInput";

interface MessageData {
  role: "user" | "assistant";
  content: string;
}

const initialMessages: MessageData[] = [
  {
    role: "assistant",
    content:
      "I'm ready to help design, analyze, and engineer your project.",
  },
];

export default function Chat() {
  const [messages, setMessages] =
    useState<MessageData[]>(initialMessages);

  function handleSend(message: string) {
    setMessages((current) => [
      ...current,
      {
        role: "user",
        content: message,
      },
      {
        role: "assistant",
        content:
          "This is currently a UI prototype. The engineering agent will be connected here next.",
      },
    ]);
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="flex-1 overflow-y-auto px-6 py-6">
        <div className="mx-auto max-w-3xl space-y-6">
          {messages.map((message, index) => (
            <Message
              key={index}
              role={message.role}
              content={message.content}
            />
          ))}
        </div>
      </div>

      <ChatInput onSend={handleSend} />
    </div>
  );
}