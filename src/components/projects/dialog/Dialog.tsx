import React from "react";
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
  if (!isOpen) return null;

  return (
    <div className="dialog">
      <div className="dialog-content">
        <button className="dialog-close" onClick={onClose}>
          ×
        </button>
        {images.length > 1 && (
          <>
            <button
              className="dialog-arrow left"
              onClick={onPrev}
              disabled={currentImageIndex === 0}
            >
              &lt;
            </button>
            <button
              className="dialog-arrow right"
              onClick={onNext}
              disabled={currentImageIndex === images.length - 1}
            >
              &gt;
            </button>
          </>
        )}
        <img
          src={images[currentImageIndex]}
          alt={`Dialog Image ${currentImageIndex + 1}`}
          className="dialog-image"
        />
      </div>
    </div>
  );
};
