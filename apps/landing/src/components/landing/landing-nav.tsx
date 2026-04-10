"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { openTallyWaitlistPopup } from "@/lib/tally-waitlist";

const SECTIONS = [
  { id: "about", label: "О проекте" },
  { id: "how-it-works", label: "Как работает" },
  { id: "faq", label: "FAQ" },
] as const;

type SectionId = (typeof SECTIONS)[number]["id"];

/** Допуск: субпиксели и scroll-margin, иначе секция не «попадает» в линию отсечения. */
const EPS = 16;

function computeActiveSection(): SectionId {
  if (typeof window === "undefined") return "about";
  const navHeight = 96;
  const line = window.scrollY + navHeight + EPS;
  let active: SectionId = "about";
  for (const { id } of SECTIONS) {
    const el = document.getElementById(id);
    if (!el) continue;
    const top = el.getBoundingClientRect().top + window.scrollY;
    if (top <= line) {
      active = id;
    }
  }
  return active;
}

export function LandingNav() {
  const [activeId, setActiveId] = useState<SectionId>("about");
  const skipSpyRef = useRef(false);
  const pendingProgrammaticDoneRef = useRef<(() => void) | null>(null);

  const syncFromDom = useCallback(() => {
    setActiveId(computeActiveSection());
  }, []);

  const scheduleUnlockAfterScroll = useCallback(() => {
    let finished = false;
    const fallbackRef: {
      current: ReturnType<typeof setTimeout> | undefined;
    } = { current: undefined };

    function onScrollEndOnce() {
      finish();
    }

    function finish() {
      if (finished) return;
      finished = true;
      window.removeEventListener("scrollend", onScrollEndOnce);
      if (fallbackRef.current !== undefined) {
        clearTimeout(fallbackRef.current);
      }
      pendingProgrammaticDoneRef.current = null;
      skipSpyRef.current = false;
      syncFromDom();
    }

    pendingProgrammaticDoneRef.current = finish;
    window.addEventListener("scrollend", onScrollEndOnce, { passive: true });
    fallbackRef.current = setTimeout(finish, 900);
  }, [syncFromDom]);

  useLayoutEffect(() => {
    queueMicrotask(syncFromDom);
    requestAnimationFrame(syncFromDom);
  }, [syncFromDom]);

  useEffect(() => {
    const onScroll = () => {
      if (skipSpyRef.current) return;
      syncFromDom();
    };

    queueMicrotask(syncFromDom);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", syncFromDom);
    window.addEventListener("popstate", syncFromDom);
    window.addEventListener("resize", syncFromDom);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", syncFromDom);
      window.removeEventListener("popstate", syncFromDom);
      window.removeEventListener("resize", syncFromDom);
    };
  }, [syncFromDom]);

  return (
    <nav
      className="sticky top-0 z-50 w-full border-b border-outline-variant/10 backdrop-blur-xl"
      style={{ backgroundColor: "var(--nav-bg)" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-sm font-bold tracking-tight">
        <Link
          href="/"
          className="cursor-pointer text-2xl font-black tracking-[-0.04em] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          style={{ color: "var(--logo-text)" }}
          aria-label="Зефирчат — наверх"
          onClick={(e) => {
            e.preventDefault();
            pendingProgrammaticDoneRef.current?.();
            pendingProgrammaticDoneRef.current = null;
            skipSpyRef.current = true;
            setActiveId("about");
            window.scrollTo({ top: 0, behavior: "smooth" });
            const path = window.location.pathname + window.location.search;
            window.history.replaceState(null, "", path);
            scheduleUnlockAfterScroll();
          }}
        >
          Зефирчат
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {SECTIONS.map(({ id, label }) => {
            const isActive = activeId === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                aria-current={isActive ? "location" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById(id);
                  if (!el) return;

                  pendingProgrammaticDoneRef.current?.();
                  pendingProgrammaticDoneRef.current = null;

                  skipSpyRef.current = true;
                  setActiveId(id);
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                  window.history.replaceState(null, "", `#${id}`);
                  scheduleUnlockAfterScroll();
                }}
                className={`border-b-2 pb-1 font-medium transition-all duration-300 ease-out ${
                  isActive
                    ? "border-primary text-primary dark:text-white"
                    : "border-transparent text-secondary hover:text-primary dark:text-[#938f99] dark:hover:text-white"
                }`}
              >
                {label}
              </a>
            );
          })}
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <ThemeToggle />
          <button
            type="button"
            className="h-[52px] scale-95 rounded-full bg-primary px-6 font-bold text-on-primary transition-transform duration-300 hover:bg-primary/90 active:scale-90"
            onClick={() => openTallyWaitlistPopup()}
          >
            Присоединиться
          </button>
        </div>
      </div>
    </nav>
  );
}
