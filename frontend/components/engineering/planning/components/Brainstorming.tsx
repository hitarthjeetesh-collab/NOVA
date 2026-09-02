import type { Approach } from "../types/planning";
import { primaryButtonClassName } from "../constants";
import { SectionHeading } from "./ui/SectionHeading";
import { EmptyState } from "./ui/EmptyState";
import { ApproachCard } from "./ApproachCard";
export interface BrainstormingProps {
  approaches: Approach[];
  onAdd: () => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export function Brainstorming({
  approaches,
  onAdd,
  onEdit,
  onDelete,
}: BrainstormingProps) {
  return (
    <div>
      <div className="mb-6 flex items-end justify-between gap-4">
        <SectionHeading
          title="Approaches"
          description="Explore different ways the system could achieve its goal."
        />

        <button
          type="button"
          onClick={onAdd}
          className={
            primaryButtonClassName
          }
        >
          + Add Approach
        </button>
      </div>

      {approaches.length === 0 ? (
        <EmptyState text="No approaches yet. Start brainstorming by adding one." />
      ) : (
        <div className="grid gap-4 lg:grid-cols-2">
          {approaches.map(
            (approach) => (
              <ApproachCard
                key={approach.id}
                approach={approach}
                onEdit={() =>
                  onEdit(
                    approach.id
                  )
                }
                onDelete={() =>
                  onDelete(
                    approach.id
                  )
                }
              />
            )
          )}
        </div>
      )}
    </div>
  );
}