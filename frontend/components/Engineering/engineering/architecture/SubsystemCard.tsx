interface Subsystem {
  id: string;
  name: string;
  category: string;
  description: string;
  elements: string[];
  status: "Defined" | "Needs Work";
}

interface SubsystemCardProps {
  subsystem: Subsystem;
  onEdit: (subsystem: Subsystem) => void;
  onDelete: (id: string) => void;
}

export default function SubsystemCard({
  subsystem,
  onEdit,
  onDelete,
}: SubsystemCardProps) {
  return (
    <div className="group rounded-xl border border-white/10 bg-[var(--aevra-surface)] p-5 transition hover:border-white/20">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-medium text-[var(--aevra-text)]">
            {subsystem.name}
          </h3>

          <p className="mt-1 text-sm text-[var(--aevra-text-muted)]">
            {subsystem.category}
          </p>
        </div>

        <div className="flex gap-1 opacity-0 transition group-hover:opacity-100">
          <button
            onClick={() => onEdit(subsystem)}
            className="rounded-md px-2 py-1 text-xs text-[var(--aevra-text-muted)] transition hover:bg-[var(--aevra-surface-light)] hover:text-[var(--aevra-text)]"
          >
            Edit
          </button>

          <button
            onClick={() => onDelete(subsystem.id)}
            className="rounded-md px-2 py-1 text-xs text-[var(--aevra-text-muted)] transition hover:bg-[var(--aevra-surface-light)] hover:text-[var(--aevra-text)]"
          >
            Delete
          </button>
        </div>
      </div>

      {subsystem.description && (
        <p className="mt-4 text-sm leading-6 text-[var(--aevra-text-muted)]">
          {subsystem.description}
        </p>
      )}

      {subsystem.elements.length > 0 && (
        <div className="mt-4">
          <p className="mb-2 text-xs uppercase tracking-wider text-white/30">
            Elements
          </p>

          <div className="flex flex-wrap gap-2">
            {subsystem.elements.map(
              (element) => (
                <span
                  key={element}
                  className="rounded-md bg-[var(--aevra-surface-light)] px-2 py-1 text-xs text-[var(--aevra-text-muted)]"
                >
                  {element}
                </span>
              )
            )}
          </div>
        </div>
      )}

      <div className="mt-5 border-t border-white/10 pt-4">
        <span
          className={`text-xs ${
            subsystem.status === "Defined"
              ? "text-[var(--aevra-text)]"
              : "text-[var(--aevra-text-muted)]"
          }`}
        >
          ● {subsystem.status}
        </span>
      </div>
    </div>
  );
}