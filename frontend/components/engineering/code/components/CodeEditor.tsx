"use client";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function CodeEditor({
  value,
  onChange,
}: Props) {
  const lines = value.split("\n");

  return (
    <div className="flex min-h-0 flex-1 overflow-hidden bg-[#0b0e12]">
      <div className="w-12 shrink-0 select-none border-r border-white/5 bg-[#0a0d10] py-4 text-right font-mono text-xs leading-6 text-white/20">
        {lines.map((_, index) => (
          <div key={index} className="pr-3">
            {index + 1}
          </div>
        ))}
      </div>

      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        spellCheck={false}
        className="min-h-full min-w-0 flex-1 resize-none overflow-auto bg-transparent px-5 py-4 font-mono text-[13px] leading-6 text-white/80 outline-none placeholder:text-white/20"
        placeholder="Start writing code..."
      />
    </div>
  );
}