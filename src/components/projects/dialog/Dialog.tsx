import React, { useEffect, useRef } from "react";
import "./Dialog.css";

interface DialogProps {
  images: string[];
  currentImageIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Dialog = ({
  images,
  currentImageIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
}: DialogProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  // Detect "Esc" key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Detect click outside dialog
  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if (
      dialogRef.current &&
      !dialogRef.current.contains(event.target as Node)
    ) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="dialog" onClick={handleClickOutside}>
      <div className="dialog-content" ref={dialogRef}>
        <div className="dialog-wrapper">
          {images.length > 1 && (
            <button
              className="dialog-arrow"
              onClick={onPrev}
              disabled={currentImageIndex === 0}
            >
              &lt;
            </button>
          )}
          <img
            src={images[currentImageIndex]}
            alt={`Dialog Image ${currentImageIndex + 1}`}
            className="dialog-image"
          />
          {images.length > 1 && (
            <button
              className="dialog-arrow"
              onClick={onNext}
              disabled={currentImageIndex === images.length - 1}
            >
              &gt;
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
