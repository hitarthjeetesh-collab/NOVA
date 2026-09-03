import type { Approach } from "../types/planning";
import { secondaryButtonClassName } from "../constants";
export interface ApproachCardProps {
  approach: Approach;
  onEdit: () => void;
  onDelete: () => void;
}

export function ApproachCard({
  approach,
  onEdit,
  onDelete,
}: ApproachCardProps) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#111419] p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-sm font-semibold">
            {approach.name}
          </h3>

          <p className="mt-1 text-xs text-white/35">
            Approach concept
          </p>
        </div>

        <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] text-white/50">
          {approach.status}
        </span>
      </div>

      <div className="mt-5">
        <p className="text-[11px] font-medium uppercase tracking-wide text-white/25">
          Reason
        </p>

        <p className="mt-2 text-sm leading-6 text-white/55">
          {approach.reason ||
            "No reason provided."}
        </p>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-wide text-white/25">
            Pros
          </p>

          <ul className="mt-2 space-y-2">
            {approach.pros.length >
            0 ? (
              approach.pros.map(
                (pro, index) => (
                  <li
                    key={`${pro}-${index}`}
                    className="text-xs leading-5 text-white/50"
                  >
                    + {pro}
                  </li>
                )
              )
            ) : (
              <li className="text-xs text-white/25">
                None added
              </li>
            )}
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-medium uppercase tracking-wide text-white/25">
            Cons
          </p>

          <ul className="mt-2 space-y-2">
            {approach.cons.length >
            0 ? (
              approach.cons.map(
                (con, index) => (
                  <li
                    key={`${con}-${index}`}
                    className="text-xs leading-5 text-white/50"
                  >
                    − {con}
                  </li>
                )
              )
            ) : (
              <li className="text-xs text-white/25">
                None added
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="mt-6 flex gap-2 border-t border-white/10 pt-4">
        <button
          type="button"
          onClick={onEdit}
          className={
            secondaryButtonClassName
          }
        >
          Edit
        </button>

        <button
          type="button"
          onClick={onDelete}
          className={
            secondaryButtonClassName
          }
        >
          Delete
        </button>
      </div>
    </div>
  );
}