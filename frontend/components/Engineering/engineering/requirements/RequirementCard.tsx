interface Requirement {
  id: string;
  name: string;
  value: string;
  category: string;
  priority: "Required" | "Preferred";
  description: string;
}

interface RequirementCardProps {
  requirement: Requirement;
  onEdit: (requirement: Requirement) => void;
  onDelete: (id: string) => void;
}

export default function RequirementCard({
  requirement,
  onEdit,
  onDelete,
}: RequirementCardProps) {
  return (
    <div className="group rounded-xl border border-white/10 bg-[#111419] p-4 transition hover:border-white/20">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-medium">{requirement.name}</h3>

          <p className="mt-1 text-sm text-white/40">
            {requirement.category}
          </p>
        </div>

        <div className="flex gap-1 opacity-0 transition group-hover:opacity-100">
          <button
            onClick={() => onEdit(requirement)}
            className="rounded-md px-2 py-1 text-xs text-white/40 transition hover:bg-white/10 hover:text-white"
          >
            Edit
          </button>

          <button
            onClick={() => onDelete(requirement.id)}
            className="rounded-md px-2 py-1 text-xs text-white/40 transition hover:bg-white/10 hover:text-white"
          >
            Delete
          </button>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <span className="text-lg font-semibold">
          {requirement.value}
        </span>

        <span
          className={`rounded-full px-2 py-1 text-xs ${
            requirement.priority === "Required"
              ? "bg-white/10 text-white"
              : "bg-white/5 text-white/40"
          }`}
        >
          {requirement.priority}
        </span>
      </div>

      {requirement.description && (
        <p className="mt-3 text-sm leading-6 text-white/40">
          {requirement.description}
        </p>
      )}
    </div>
  );
}