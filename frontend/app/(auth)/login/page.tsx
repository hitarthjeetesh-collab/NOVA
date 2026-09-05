"use client";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--aevra-background)] px-6 text-[var(--aevra-text)]">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold tracking-tight">
            AEVRA
          </h1>

          <p className="mt-2 text-sm text-[color-mix(in_srgb,var(--aevra-text)_40%,transparent)]">
            Sign in to your Aevra account
          </p>
        </div>

        <div className="rounded-2xl border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[var(--aevra-surface)] p-6 shadow-2xl">
          <button
            type="button"
            className="flex h-11 w-full items-center justify-center rounded-lg border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[var(--aevra-text)] text-sm font-medium text-[var(--aevra-background)] transition hover:bg-[color-mix(in_srgb,var(--aevra-text)_90%,transparent)]"
          >
            Continue with Google
          </button>

          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)]" />

            <span className="text-xs text-[color-mix(in_srgb,var(--aevra-text)_25%,transparent)]">
              or
            </span>

            <div className="h-px flex-1 bg-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)]" />
          </div>

          <label className="mb-2 block text-xs font-medium text-[color-mix(in_srgb,var(--aevra-text)_50%,transparent)]">
            Email
          </label>

          <input
            type="email"
            placeholder="you@example.com"
            className="h-11 w-full rounded-lg border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[var(--aevra-background)] px-3 text-sm text-[var(--aevra-text)] outline-none placeholder:text-[color-mix(in_srgb,var(--aevra-text)_20%,transparent)] focus:border-[color-mix(in_srgb,var(--aevra-text)_25%,transparent)]"
          />

          <button
            type="button"
            className="mt-3 h-11 w-full rounded-lg bg-[color-mix(in_srgb,var(--aevra-text)_8%,transparent)] text-sm font-medium text-[var(--aevra-text)] transition hover:bg-[color-mix(in_srgb,var(--aevra-text)_12%,transparent)]"
          >
            Continue with email
          </button>

          <p className="mt-6 text-center text-xs text-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]">
            Don't have an account?{" "}
            <button
              type="button"
              className="text-[color-mix(in_srgb,var(--aevra-text)_60%,transparent)] hover:text-[var(--aevra-text)]"
            >
              Create one
            </button>
          </p>
        </div>

        <p className="mt-6 text-center text-[11px] text-[color-mix(in_srgb,var(--aevra-text)_20%,transparent)]">
          By continuing, you agree to Aevra's terms and privacy policy.
        </p>
      </div>
    </main>
  );
}