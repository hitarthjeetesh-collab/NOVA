"use client";

import type {
  ButtonHTMLAttributes,
} from "react";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "primary"
    | "danger"
    | "ghost";
}

export default function Button({
  children,
  variant = "default",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  const variants = {
    default:
      "border border-[color-mix(in_srgb,var(--aevra-text)_10%,transparent)] bg-[var(--aevra-surface-light)] text-[color-mix(in_srgb,var(--aevra-text)_70%,transparent)] hover:bg-[color-mix(in_srgb,var(--aevra-surface-light)_85%,var(--aevra-text)_15%)] hover:text-[var(--aevra-text)]",

    primary:
      "border border-[color-mix(in_srgb,var(--aevra-text)_15%,transparent)] bg-[var(--aevra-text)] text-[var(--aevra-background)] hover:bg-[color-mix(in_srgb,var(--aevra-text)_90%,transparent)]",

    danger:
      "border border-[color-mix(in_srgb,#f87171_20%,transparent)] bg-[color-mix(in_srgb,#f87171_5%,transparent)] text-[color-mix(in_srgb,#fca5a5_100%,transparent)] hover:bg-[color-mix(in_srgb,#f87171_10%,transparent)]",

    ghost:
      "border border-transparent bg-transparent text-[color-mix(in_srgb,var(--aevra-text)_50%,transparent)] hover:bg-[color-mix(in_srgb,var(--aevra-text)_5%,transparent)] hover:text-[var(--aevra-text)]",
  };

  return (
    <button
      type={type}
      className={`rounded-lg px-3 py-2 text-sm font-medium transition ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}