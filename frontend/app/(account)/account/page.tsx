"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AccountPage() {
  const router = useRouter();

  const [name, setName] = useState("Hitarth");
  const [username, setUsername] = useState("hitarth");
  const [email, setEmail] = useState("hitarth@example.com");

  return (
    <main className="min-h-screen bg-[var(--aevra-background)] text-[var(--aevra-text)]">
      <div className="mx-auto min-h-screen max-w-5xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] px-8 py-5">
          <div>
            <h1 className="text-xl font-semibold">Account</h1>

            <p className="mt-1 text-sm text-[color-mix(in_srgb,var(--aevra-text)_40%,transparent)]">
              Manage your profile and account settings.
            </p>
          </div>

          <button
            type="button"
            onClick={() => router.push("/")}
            className="rounded-lg border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] px-4 py-2 text-sm text-[color-mix(in_srgb,var(--aevra-text)_60%,transparent)] transition hover:bg-[color-mix(in_srgb,var(--aevra-text)_5%,transparent)] hover:text-[var(--aevra-text)]"
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
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] text-sm font-medium text-[var(--aevra-text)] hover:bg-[color-mix(in_srgb,var(--aevra-text)_15%,transparent)]"
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
                className="w-64 rounded-lg border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[var(--aevra-background)] px-3 py-2 text-sm text-[var(--aevra-text)] outline-none transition focus:border-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]"
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
                className="w-64 rounded-lg border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[var(--aevra-background)] px-3 py-2 text-sm text-[var(--aevra-text)] outline-none transition focus:border-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]"
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
                className="w-64 rounded-lg border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[var(--aevra-background)] px-3 py-2 text-sm text-[var(--aevra-text)] outline-none transition focus:border-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]"
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
                className="min-w-48 rounded-lg border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[var(--aevra-background)] px-3 py-2 text-sm text-[var(--aevra-text)] outline-none focus:border-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)]"
              >
                <option value="ORION">
                  ORION
                </option>

                <option value="Autonomous Rover">
                  Autonomous Rover
                </option>

                <option value="Drone">
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
                className="rounded-lg border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] px-4 py-2 text-sm text-[color-mix(in_srgb,var(--aevra-text)_60%,transparent)] transition hover:bg-[color-mix(in_srgb,var(--aevra-text)_5%,transparent)] hover:text-[var(--aevra-text)]"
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
                className="rounded-lg border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] px-4 py-2 text-sm text-[color-mix(in_srgb,var(--aevra-text)_60%,transparent)] transition hover:bg-[color-mix(in_srgb,var(--aevra-text)_5%,transparent)] hover:text-[var(--aevra-text)]"
              >
                Manage Sessions
              </button>
            </AccountRow>
          </AccountGroup>

          {/* Danger Zone */}
          <div className="overflow-hidden rounded-xl border border-[color-mix(in_srgb,var(--aevra-danger)_20%,transparent)] bg-[color-mix(in_srgb,var(--aevra-danger)_5%,transparent)]">
            <div className="border-b border-[color-mix(in_srgb,var(--aevra-danger)_20%,transparent)] px-5 py-4">
              <h2 className="text-sm font-semibold text-[var(--aevra-danger)]">
                Danger Zone
              </h2>

              <p className="mt-1 text-xs text-[color-mix(in_srgb,var(--aevra-text)_40%,transparent)]">
                Permanent account actions.
              </p>
            </div>

            <div className="flex items-center justify-between gap-8 px-5 py-5">
              <div>
                <p className="text-sm font-medium">
                  Delete account
                </p>

                <p className="mt-1 text-xs leading-5 text-[color-mix(in_srgb,var(--aevra-text)_40%,transparent)]">
                  Permanently delete your account and associated data.
                </p>
              </div>

              <button
                type="button"
                className="shrink-0 rounded-lg border border-[color-mix(in_srgb,var(--aevra-danger)_30%,transparent)] px-4 py-2 text-sm text-[var(--aevra-danger)] transition hover:bg-[color-mix(in_srgb,var(--aevra-danger)_10%,transparent)]"
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
    <section className="overflow-hidden rounded-xl border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[var(--aevra-surface)]">
      <div className="border-b border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] px-5 py-4">
        <h2 className="text-sm font-semibold">
          {title}
        </h2>

        <p className="mt-1 text-xs text-[color-mix(in_srgb,var(--aevra-text)_40%,transparent)]">
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
    <div className="flex items-center justify-between gap-8 border-b border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] px-5 py-5 last:border-b-0">
      <div className="min-w-0">
        <p className="text-sm font-medium">
          {title}
        </p>

        <p className="mt-1 max-w-xl text-xs leading-5 text-[color-mix(in_srgb,var(--aevra-text)_40%,transparent)]">
          {description}
        </p>
      </div>

      <div className="shrink-0">
        {children}
      </div>
    </div>
  );
}