import { useState } from "react";
import type { Constraint } from "../../types/planning";
import { controlClassName } from "../../constants";
import { Modal } from "../ui/Modal";
import { Field } from "../ui/Field";
import { ModalActions } from "../ui/ModalActions";

export interface ConstraintModalProps {
  onClose: () => void;
  onSave: (constraint: Constraint) => void;
}

export function ConstraintModal({  onClose,
  onSave,
}: ConstraintModalProps) {
  const [name, setName] =
    useState("");

  const [value, setValue] =
    useState("");

  function submit() {
    if (!name.trim()) {
      return;
    }

    onSave({
      id: crypto.randomUUID(),
      name: name.trim(),
      value: value.trim(),
    });
  }

  return (
    <Modal
      title="Add Constraint"
      onClose={onClose}
    >
      <Field label="Constraint">
        <input
          autoFocus
          value={name}
          onChange={(event) =>
            setName(
              event.target.value
            )
          }
          className={controlClassName}
          placeholder="Maximum mass"
        />
      </Field>

      <Field label="Value">
        <input
          value={value}
          onChange={(event) =>
            setValue(
              event.target.value
            )
          }
          className={controlClassName}
          placeholder="20 kg"
        />
      </Field>

      <ModalActions
        onClose={onClose}
        onSave={submit}
        saveLabel="Add Constraint"
      />
    </Modal>
  );
}