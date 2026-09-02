import { useState } from "react";
import type { Approach, ApproachStatus } from "../../types/planning";
import { controlClassName } from "../../constants";
import { Modal } from "../ui/Modal";
import { Field } from "../ui/Field";
import { ModalActions } from "../ui/ModalActions";

export interface ApproachModalProps {
  approach?: Approach;
  onClose: () => void;
  onSave: (approach: Approach) => void;
}

export function ApproachModal({  approach,
  onClose,
  onSave,
}: ApproachModalProps) {
  const [name, setName] =
    useState(
      approach?.name ?? ""
    );

  const [reason, setReason] =
    useState(
      approach?.reason ?? ""
    );

  const [pros, setPros] =
    useState(
      approach?.pros.join(
        "\n"
      ) ?? ""
    );

  const [cons, setCons] =
    useState(
      approach?.cons.join(
        "\n"
      ) ?? ""
    );

  const [status, setStatus] =
    useState<ApproachStatus>(
      approach?.status ??
        "Idea"
    );

  function submit() {
    if (!name.trim()) {
      return;
    }

    onSave({
      id:
        approach?.id ??
        crypto.randomUUID(),

      name: name.trim(),

      reason:
        reason.trim(),

      pros: pros
        .split("\n")
        .map(
          (item) =>
            item.trim()
        )
        .filter(Boolean),

      cons: cons
        .split("\n")
        .map(
          (item) =>
            item.trim()
        )
        .filter(Boolean),

      status,
    });
  }

  return (
    <Modal
      title={
        approach
          ? "Edit Approach"
          : "Add Approach"
      }
      onClose={onClose}
      wide
    >
      <Field label="Name">
        <input
          autoFocus
          value={name}
          onChange={(event) =>
            setName(
              event.target.value
            )
          }
          className={controlClassName}
          placeholder="Differential Drive"
        />
      </Field>

      <Field label="Status">
        <select
          value={status}
          onChange={(event) =>
            setStatus(
              event.target
                .value as ApproachStatus
            )
          }
          className={controlClassName}
        >
          <option>
            Idea
          </option>

          <option>
            Candidate
          </option>

          <option>
            Preferred
          </option>

          <option>
            Rejected
          </option>

          <option>
            Needs Investigation
          </option>
        </select>
      </Field>

      <Field label="Reason">
        <textarea
          value={reason}
          onChange={(event) =>
            setReason(
              event.target.value
            )
          }
          rows={4}
          className={controlClassName}
          placeholder="Why is this approach worth considering?"
        />
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Pros">
          <textarea
            value={pros}
            onChange={(event) =>
              setPros(
                event.target.value
              )
            }
            rows={6}
            className={controlClassName}
            placeholder={
              "Simple\nLow cost\nReliable"
            }
          />

          <p className="mt-2 text-[11px] text-white/25">
            One item per line.
          </p>
        </Field>

        <Field label="Cons">
          <textarea
            value={cons}
            onChange={(event) =>
              setCons(
                event.target.value
              )
            }
            rows={6}
            className={controlClassName}
            placeholder={
              "Limited mobility\nHigher mass"
            }
          />

          <p className="mt-2 text-[11px] text-white/25">
            One item per line.
          </p>
        </Field>
      </div>

      <ModalActions
        onClose={onClose}
        onSave={submit}
        saveLabel={
          approach
            ? "Save Changes"
            : "Add Approach"
        }
      />
    </Modal>
  );
}