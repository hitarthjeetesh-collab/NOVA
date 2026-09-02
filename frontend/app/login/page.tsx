"use client";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0b0d10] px-6 text-white">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold tracking-tight">
            AEVRA
          </h1>

          <p className="mt-2 text-sm text-white/40">
            Sign in to your Aevra account
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#101318] p-6 shadow-2xl">
          <button
            type="button"
            className="flex h-11 w-full items-center justify-center rounded-lg border border-white/10 bg-white text-sm font-medium text-black transition hover:bg-white/90"
          >
            Continue with Google
          </button>

          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-xs text-white/25">
              or
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <label className="mb-2 block text-xs font-medium text-white/50">
            Email
          </label>

          <input
            type="email"
            placeholder="you@example.com"
            className="h-11 w-full rounded-lg border border-white/10 bg-[#0b0d10] px-3 text-sm text-white outline-none placeholder:text-white/20 focus:border-white/25"
          />

          <button
            type="button"
            className="mt-3 h-11 w-full rounded-lg bg-white/[0.08] text-sm font-medium text-white transition hover:bg-white/[0.12]"
          >
            Continue with email
          </button>

          <p className="mt-6 text-center text-xs text-white/30">
            Don't have an account?{" "}
            <button
              type="button"
              className="text-white/60 hover:text-white"
            >
              Create one
            </button>
          </p>
        </div>

        <p className="mt-6 text-center text-[11px] text-white/20">
          By continuing, you agree to Aevra's terms and privacy policy.
        </p>
      </div>
    </main>
  );
}