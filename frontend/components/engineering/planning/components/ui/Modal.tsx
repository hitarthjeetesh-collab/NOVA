import type { ReactNode } from "react";

export interface ModalProps {
  title: string;
  onClose: () => void;
  children: ReactNode;
  wide?: boolean;
}

export function Modal({
  title,
  onClose,
  children,
  wide = false,
}: ModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm">
      <div
        className={`w-full ${
          wide ? "max-w-3xl" : "max-w-lg"
        } max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#0f1115] shadow-2xl`}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <h3 className="text-sm font-semibold">{title}</h3>

          <button
            type="button"
            onClick={onClose}
            className="text-lg text-white/30 transition hover:text-white"
          >
            ×
          </button>
        </div>

        <div className="space-y-5 p-6">{children}</div>
      </div>
    </div>
  );
}
