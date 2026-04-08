"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

function subscribeToNothing() {
  return () => {};
}

function useIsClient() {
  return useSyncExternalStore(
    subscribeToNothing,
    () => true,
    () => false,
  );
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useIsClient();

  if (!mounted) {
    return (
      <span
        className="inline-flex size-10 items-center justify-center text-on-surface-variant"
        aria-hidden
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex size-10 items-center justify-center rounded-full text-on-surface-variant transition-colors duration-300 hover:text-on-surface"
      aria-label={isDark ? "Включить светлую тему" : "Включить тёмную тему"}
    >
      <span className="material-symbols-outlined text-2xl">
        {isDark ? "light_mode" : "dark_mode"}
      </span>
    </button>
  );
}
