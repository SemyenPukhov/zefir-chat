"use client";

import { openTallyWaitlistPopup } from "@/lib/tally-waitlist";

type WaitlistCaptureProps = {
  className?: string;
  ariaLabel: string;
  buttonClassName: string;
};

export function WaitlistCapture({
  className,
  ariaLabel,
  buttonClassName,
}: WaitlistCaptureProps) {
  return (
    <div className={className}>
      <button
        type="button"
        className={buttonClassName}
        aria-label={ariaLabel}
        onClick={() => openTallyWaitlistPopup()}
      >
        Жду запуск
      </button>
    </div>
  );
}
