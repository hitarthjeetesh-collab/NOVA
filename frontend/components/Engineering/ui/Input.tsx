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
        <label className="mb-2 block text-xs font-medium text-white/50">
          {label}
        </label>
      )}

      <input
        {...props}
        className={`w-full rounded-lg border border-white/10 bg-[#101419] px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-white/30 ${className}`}
      />
    </div>
  );
}