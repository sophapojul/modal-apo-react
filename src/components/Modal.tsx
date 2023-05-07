import React, { PropsWithChildren, useRef } from "react";

import useCloseOnEscapeKey from "../hooks/useCloseOnEscapeKey";
import useCloseOnOverlay from "../hooks/useCloseOnOverlay";
import styles from "./modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Modal component
 * @param isOpen boolean - open or close modal
 * @returns React component modal
 */
function Modal({ isOpen, onClose, children }: PropsWithChildren<ModalProps>) {
  const overlayRef = useRef<HTMLDivElement>(null);
  useCloseOnEscapeKey(onClose);
  useCloseOnOverlay(onClose, overlayRef);
  if (!isOpen) {
    return null;
  }
  return (
    <div className={styles.modal} role="dialog">
      <div className={styles.modalOverlay} ref={overlayRef} />
      <div
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="successDialog"
        aria-describedby="dialog_desc"
        className={styles.modalContent}
      >
        <button type="button" className={styles.modalButton} onClick={onClose}>
          x
        </button>
        <div id="dialog_desc">{children}</div>
      </div>
    </div>
  );
}
export default Modal;
