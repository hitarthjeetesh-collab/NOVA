interface MessageProps {
  role: "user" | "assistant";
  content: string;
}

export default function Message({
  role,
  content,
}: MessageProps) {
  const isUser = role === "user";

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-6 ${
          isUser
            ? "bg-white text-black"
            : "border border-white/10 bg-[#111419] text-white/80"
        }`}
      >
        {content}
      </div>
    </div>
  );
}