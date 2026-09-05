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
    <header className="flex h-14 shrink-0 items-center justify-between border-b border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[var(--aevra-surface)] px-4">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="rounded-md p-2 text-[color-mix(in_srgb,var(--aevra-text)_60%,transparent)] hover:bg-[color-mix(in_srgb,var(--aevra-text)_5%,transparent)] hover:text-[var(--aevra-text)]"
          aria-label="Open navigation menu"
        >
          ☰
        </button>

        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--aevra-text)] text-xs font-bold text-[var(--aevra-background)]">
            AI
          </div>

          <span className="font-semibold text-[var(--aevra-text)]">
            Engineering Platform
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm text-[color-mix(in_srgb,var(--aevra-text)_50%,transparent)]">
          {projectName}
        </span>

        <button
          type="button"
          onClick={() => router.push("/settings")}
          className="rounded-md p-2 text-[color-mix(in_srgb,var(--aevra-text)_60%,transparent)] hover:bg-[color-mix(in_srgb,var(--aevra-text)_5%,transparent)] hover:text-[var(--aevra-text)]"
          aria-label="Settings"
        >
          ⚙
        </button>

        <button
          type="button"
          onClick={() => router.push("/account")}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] text-xs text-[var(--aevra-text)] transition hover:bg-[color-mix(in_srgb,var(--aevra-text)_15%,transparent)]"
          aria-label="Account"
        >
          H
        </button>
      </div>
    </header>
  );
}