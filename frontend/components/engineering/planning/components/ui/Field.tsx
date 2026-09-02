import type { ReactNode } from "react";

export interface FieldProps {
  label: string;
  children: ReactNode;
}

export function Field({ label, children }: FieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-medium text-white/50">
        {label}
      </span>
      {children}
    </label>
  );
}
