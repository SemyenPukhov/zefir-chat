export const TALLY_WAITLIST_FORM_ID = "0QJvj6";

export const tallyWaitlistPopupOptions = {
  layout: "modal" as const,
  emoji: { text: "❤️", animation: "heart-beat" as const },
  autoClose: 5000,
};

declare global {
  interface Window {
    Tally?: {
      openPopup: (formId: string, options?: Record<string, unknown>) => void;
    };
  }
}

export function openTallyWaitlistPopup(
  hiddenFields?: Record<string, string>,
): void {
  if (typeof window === "undefined") return;
  const tally = window.Tally;
  if (!tally) return;
  tally.openPopup(TALLY_WAITLIST_FORM_ID, {
    ...tallyWaitlistPopupOptions,
    ...(hiddenFields && Object.keys(hiddenFields).length > 0
      ? { hiddenFields }
      : {}),
  });
}
