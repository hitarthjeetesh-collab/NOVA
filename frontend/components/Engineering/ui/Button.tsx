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
      "border border-white/10 bg-[#15191f] text-white/70 hover:bg-[#1c2128] hover:text-white",
    primary:
      "border border-white/15 bg-white text-black hover:bg-white/90",
    danger:
      "border border-red-400/20 bg-red-400/5 text-red-300 hover:bg-red-400/10",
    ghost:
      "border border-transparent bg-transparent text-white/50 hover:bg-white/5 hover:text-white",
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