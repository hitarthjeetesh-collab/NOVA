"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AccountPage() {
  const router = useRouter();

  const [name, setName] = useState("Hitarth");
  const [username, setUsername] = useState("hitarth");
  const [email, setEmail] = useState("hitarth@example.com");

  return (
    <main className="min-h-screen bg-[#0b0d10] text-white">
      <div className="mx-auto min-h-screen max-w-5xl">
        {/* Header */}

        <div className="flex items-center justify-between border-b border-white/10 px-8 py-5">
          <div>
            <h1 className="text-xl font-semibold">
              Account
            </h1>

            <p className="mt-1 text-sm text-white/40">
              Manage your profile and account settings.
            </p>
          </div>

          <button
            type="button"
            onClick={() => router.push("/")}
            className="rounded-lg border border-white/10 px-4 py-2 text-sm text-white/60 transition hover:bg-white/5 hover:text-white"
          >
            ← Back to Workspace
          </button>
        </div>

        <div className="space-y-6 px-8 py-8">
          {/* Profile */}

          <AccountGroup
            title="Profile"
            description="Your personal information displayed throughout the platform."
          >
            <AccountRow
              title="Profile picture"
              description="Your account avatar."
            >
              <button
                type="button"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-sm font-medium hover:bg-white/15"
              >
                H
              </button>
            </AccountRow>

            <AccountRow
              title="Name"
              description="The name associated with your account."
            >
              <input
                value={name}
                onChange={(event) =>
                  setName(event.target.value)
                }
                className="w-64 rounded-lg border border-white/10 bg-[#0b0d10] px-3 py-2 text-sm text-white outline-none transition focus:border-white/30"
              />
            </AccountRow>

            <AccountRow
              title="Username"
              description="Your unique platform username."
            >
              <input
                value={username}
                onChange={(event) =>
                  setUsername(event.target.value)
                }
                className="w-64 rounded-lg border border-white/10 bg-[#0b0d10] px-3 py-2 text-sm text-white outline-none transition focus:border-white/30"
              />
            </AccountRow>

            <AccountRow
              title="Email"
              description="The email address associated with your account."
            >
              <input
                type="email"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                className="w-64 rounded-lg border border-white/10 bg-[#0b0d10] px-3 py-2 text-sm text-white outline-none transition focus:border-white/30"
              />
            </AccountRow>
          </AccountGroup>

          {/* Preferences */}

          <AccountGroup
            title="Preferences"
            description="Account-level preferences."
          >
            <AccountRow
              title="Default project"
              description="Project opened when you enter the engineering workspace."
            >
              <select
                defaultValue="ORION"
                className="min-w-48 rounded-lg border border-white/10 bg-[#0b0d10] px-3 py-2 text-sm text-white outline-none focus:border-white/30"
              >
                <option
                  value="ORION"
                  className="bg-[#0b0d10]"
                >
                  ORION
                </option>

                <option
                  value="Autonomous Rover"
                  className="bg-[#0b0d10]"
                >
                  Autonomous Rover
                </option>

                <option
                  value="Drone"
                  className="bg-[#0b0d10]"
                >
                  Drone
                </option>
              </select>
            </AccountRow>
          </AccountGroup>

          {/* Security */}

          <AccountGroup
            title="Security"
            description="Manage authentication and account security."
          >
            <AccountRow
              title="Password"
              description="Change the password used to access your account."
            >
              <button
                type="button"
                className="rounded-lg border border-white/10 px-4 py-2 text-sm text-white/60 transition hover:bg-white/5 hover:text-white"
              >
                Change Password
              </button>
            </AccountRow>

            <AccountRow
              title="Active sessions"
              description="Manage devices currently signed into your account."
            >
              <button
                type="button"
                className="rounded-lg border border-white/10 px-4 py-2 text-sm text-white/60 transition hover:bg-white/5 hover:text-white"
              >
                Manage Sessions
              </button>
            </AccountRow>
          </AccountGroup>

          {/* Danger Zone */}

          <div className="overflow-hidden rounded-xl border border-red-500/20 bg-red-500/5">
            <div className="border-b border-red-500/20 px-5 py-4">
              <h2 className="text-sm font-semibold text-red-400">
                Danger Zone
              </h2>

              <p className="mt-1 text-xs text-white/40">
                Permanent account actions.
              </p>
            </div>

            <div className="flex items-center justify-between gap-8 px-5 py-5">
              <div>
                <p className="text-sm font-medium">
                  Delete account
                </p>

                <p className="mt-1 text-xs leading-5 text-white/40">
                  Permanently delete your account and associated data.
                </p>
              </div>

              <button
                type="button"
                className="shrink-0 rounded-lg border border-red-500/30 px-4 py-2 text-sm text-red-400 transition hover:bg-red-500/10"
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

interface AccountGroupProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

function AccountGroup({
  title,
  description,
  children,
}: AccountGroupProps) {
  return (
    <section className="overflow-hidden rounded-xl border border-white/10 bg-[#0f1115]">
      <div className="border-b border-white/10 px-5 py-4">
        <h2 className="text-sm font-semibold">
          {title}
        </h2>

        <p className="mt-1 text-xs text-white/40">
          {description}
        </p>
      </div>

      <div>{children}</div>
    </section>
  );
}

interface AccountRowProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

function AccountRow({
  title,
  description,
  children,
}: AccountRowProps) {
  return (
    <div className="flex items-center justify-between gap-8 border-b border-white/10 px-5 py-5 last:border-b-0">
      <div className="min-w-0">
        <p className="text-sm font-medium">
          {title}
        </p>

        <p className="mt-1 max-w-xl text-xs leading-5 text-white/40">
          {description}
        </p>
      </div>

      <div className="shrink-0">
        {children}
      </div>
    </div>
  );
}