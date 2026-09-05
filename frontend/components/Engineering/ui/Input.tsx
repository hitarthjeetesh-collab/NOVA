"use client";

import type {
  InputHTMLAttributes,
} from "react";

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({
  label,
  className = "",
  ...props
}: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="mb-2 block text-xs font-medium text-[color-mix(in_srgb,var(--aevra-text)_50%,transparent)]">
          {label}
        </label>
      )}

      <input
        {...props}
        className={`w-full rounded-lg border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--aevra-background)_45%,var(--aevra-surface))] px-3 py-2.5 text-sm text-[var(--aevra-text)] outline-none placeholder:text-[color-mix(in_srgb,var(--aevra-text)_20%,transparent)] transition focus:border-[color-mix(in_srgb,var(--aevra-text)_30%,transparent)] ${className}`}
      />
    </div>
  );
}