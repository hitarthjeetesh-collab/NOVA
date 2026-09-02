"use client";

import { useRouter } from "next/navigation";

interface HeaderProps {
  projectName: string;
  onMenuClick: () => void;
}

export default function Header({
  projectName,
  onMenuClick,
}: HeaderProps) {
  const router = useRouter();

  return (
    <header className="flex h-14 shrink-0 items-center justify-between border-b border-white/10 bg-[#0f1115] px-4">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="rounded-md p-2 text-white/60 hover:bg-white/5 hover:text-white"
        >
          ☰
        </button>

        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-xs font-bold text-black">
            AI
          </div>

          <span className="font-semibold">
            Engineering Platform
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm text-white/50">
          {projectName}
        </span>

        <button
          onClick={() => router.push("/settings")}
          className="rounded-md p-2 text-white/60 hover:bg-white/5 hover:text-white"
          aria-label="Settings"
        >
          ⚙
        </button>

        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs">
          H
        </div>
      </div>
    </header>
  );
}