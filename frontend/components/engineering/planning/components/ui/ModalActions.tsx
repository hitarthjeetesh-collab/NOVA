import {
  primaryButtonClassName,
  secondaryButtonClassName,
} from "../../constants";

export interface ModalActionsProps {
  onClose: () => void;
  onSave: () => void;
  saveLabel: string;
}

export function ModalActions({
  onClose,
  onSave,
  saveLabel,
}: ModalActionsProps) {
  return (
    <div className="flex justify-end gap-2 border-t border-white/10 pt-5">
      <button
        type="button"
        onClick={onClose}
        className={secondaryButtonClassName}
      >
        Cancel
      </button>

      <button
        type="button"
        onClick={onSave}
        className={primaryButtonClassName}
      >
        {saveLabel}
      </button>
    </div>
  );
}
