"use client";

export default function CodeToolbar() {
  const buttons = [
    "Run",
    "Format",
    "Explain",
    "Fix",
    "Generate",
  ];

  return (
    <div className="flex items-center gap-2 border-b border-white/10 bg-[#0f1216] px-4 py-2">
      {buttons.map((button, index) => (
        <button
          key={button}
          type="button"
          className={`rounded-md border px-3 py-1.5 text-xs transition ${
            index === 0
              ? "border-white/15 bg-white/[0.07] text-white"
              : "border-white/10 bg-transparent text-white/45 hover:bg-white/[0.05] hover:text-white/80"
          }`}
        >
          {button}
        </button>
      ))}
    </div>
  );
}