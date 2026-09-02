import { useState } from "react";
import type { Priority } from "../../types/planning";
import { controlClassName } from "../../constants";
import { Modal } from "../ui/Modal";
import { Field } from "../ui/Field";
import { ModalActions } from "../ui/ModalActions";

export interface PriorityModalProps {
  onClose: () => void;
  onSave: (priority: Priority) => void;
}

export function PriorityModal({  onClose,
  onSave,
}: PriorityModalProps) {
  const [name, setName] =
    useState("");

  const [description, setDescription] =
    useState("");

  function submit() {
    if (!name.trim()) {
      return;
    }

    onSave({
      id: crypto.randomUUID(),
      name: name.trim(),
      description:
        description.trim() ||
        "Custom design priority",
      weight: 10,
    });
  }

  return (
    <Modal
      title="Add Priority"
      onClose={onClose}
    >
      <Field label="Priority">
        <input
          autoFocus
          value={name}
          onChange={(event) =>
            setName(
              event.target.value
            )
          }
          className={controlClassName}
          placeholder="Payload capacity"
        />
      </Field>

      <Field label="Description">
        <textarea
          value={description}
          onChange={(event) =>
            setDescription(
              event.target.value
            )
          }
          rows={3}
          className={controlClassName}
          placeholder="How important is this factor?"
        />
      </Field>

      <ModalActions
        onClose={onClose}
        onSave={submit}
        saveLabel="Add Priority"
      />
    </Modal>
  );
}