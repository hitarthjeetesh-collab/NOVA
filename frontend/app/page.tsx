"use client";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--aevra-background)] px-6 text-[var(--aevra-text)]">
      <div className="w-full max-w-lg text-center">
        <div className="mb-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--aevra-text)] text-lg font-bold text-[var(--aevra-background)]">
            N
          </div>

          <h1 className="mt-6 text-3xl font-semibold tracking-tight">
            NOVA
          </h1>

          <p className="mt-2 text-sm text-[var(--aevra-text-tertiary)]">
            Intelligent Workspace for Building What's Next
          </p>
        </div>

        <div className="rounded-2xl border border-[var(--aevra-border)] bg-[var(--aevra-surface)] p-8 shadow-2xl">
          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--aevra-warning)_10%,transparent)] text-[var(--aevra-warning)]">
            !
          </div>

          <h2 className="mt-5 text-xl font-semibold">
            NOVA is in very early development
          </h2>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[var(--aevra-text-tertiary)]">
            This website is currently being actively developed.
            Many features are incomplete, experimental, or not
            available yet.
          </p>

          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[var(--aevra-text-tertiary)]">
            For the latest development progress, source code,
            architecture, and project information, visit the
            NOVA GitHub repository.
          </p>

          <a
            href="https://github.com/hitarthjeetesh-collab/NOVA"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-[var(--aevra-text)] px-5 py-2.5 text-sm font-medium text-[var(--aevra-background)] transition hover:bg-[color-mix(in_srgb,var(--aevra-text)_90%,transparent)]"
          >
            View GitHub Repository
          </a>
        </div>

        <p className="mt-6 text-xs text-[var(--aevra-text-faint)]">
          Build what's next.
        </p>
      </div>
    </main>
  );
}