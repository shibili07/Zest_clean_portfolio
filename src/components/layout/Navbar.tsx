"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { LogoMark } from "@/components/ui/LogoMark";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#features", label: "Features" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
] as const;

const SECTION_IDS = navItems.map((n) => n.href.slice(1));

const FLOAT_AFTER_SCROLL_PX = 48;
const NAV_CLEARANCE = 112;

/** Smooth, decelerating ease for layout morph (nav bar → floating pill) */
const navMorphEase = "[transition-timing-function:cubic-bezier(0.16,1,0.3,1)]";
const navMorphDuration = "duration-[650ms]";

function linkClassName(isActive: boolean) {
  return [
    "whitespace-nowrap rounded-full px-3 py-1.5 transition-[color,background-color,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none motion-reduce:duration-0",
    isActive
      ? "bg-violet-600/15 font-semibold text-violet-800 shadow-[inset_0_0_0_1px_rgba(109,40,217,0.2)]"
      : "text-neutral-600 hover:text-neutral-900",
  ].join(" ");
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    const update = () => {
      setIsFloating(window.scrollY > FLOAT_AFTER_SCROLL_PX);

      let current = SECTION_IDS[0];
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const { top } = el.getBoundingClientRect();
        if (top <= NAV_CLEARANCE) {
          current = id;
        }
      }
      setActiveId(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-transparent">
      <div
        className={`flex w-full justify-center motion-reduce:transition-none ${navMorphDuration} ${navMorphEase} transition-[padding] motion-reduce:duration-0 ${
          isFloating
            ? "px-4 pb-1 pt-1.5 sm:px-6 lg:px-8 lg:pt-2"
            : "px-0 pb-0 pt-0"
        }`}
      >
        <nav
          className={`relative flex w-full items-center justify-between gap-3 border backdrop-blur-xl motion-reduce:transition-none motion-reduce:duration-0 motion-reduce:transform-none sm:gap-4 ${navMorphDuration} ${navMorphEase} transition-[max-width,background-color,border-color,border-radius,box-shadow,padding,transform] ${
            isFloating
              ? "max-w-5xl -translate-y-px rounded-2xl border-white/50 bg-white/45 px-4 py-3 shadow-[0_12px_40px_-8px_rgba(91,33,182,0.22),0_4px_24px_-12px_rgba(0,0,0,0.12)] sm:px-5 md:px-6 lg:max-w-6xl lg:px-8"
              : "max-w-none translate-y-0 rounded-none border-x-0 border-t-0 border-b border-violet-200/30 bg-white/60 px-4 py-3.5 shadow-none sm:px-8 md:px-10 lg:px-12 lg:py-4"
          }`}
        >
          <a
            href="#home"
            className="flex shrink-0 items-center gap-2 text-base font-semibold tracking-tight text-neutral-900"
            onClick={() => setOpen(false)}
          >
            <LogoMark className="h-7 w-7 text-neutral-900" />
            Zest Clean
          </a>

          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 text-[13px] font-medium sm:gap-2 sm:text-sm lg:flex xl:gap-2">
            {navItems.map(({ href, label }) => {
              const id = href.slice(1);
              const isActive = activeId === id;
              return (
                <li key={href}>
                  <a
                    href={href}
                    className={linkClassName(isActive)}
                    aria-current={isActive ? "location" : undefined}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            <div className="hidden lg:block">
              <Button href="#products">
                Order Now
              </Button>
            </div>

            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-200/80 bg-white/80 text-neutral-800 shadow-sm backdrop-blur-sm lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? (
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>

      <div
        id="mobile-nav"
        className={`fixed left-1/2 z-40 w-[min(calc(100vw-2rem),24rem)] -translate-x-1/2 rounded-2xl border border-white/50 bg-white/65 p-4 shadow-[0_20px_50px_-16px_rgba(91,33,182,0.25)] backdrop-blur-xl motion-reduce:transition-none ${navMorphDuration} ${navMorphEase} motion-reduce:duration-0 transition-[top,opacity,visibility,transform] lg:hidden ${
          isFloating ? "top-[4.75rem]" : "top-[4.25rem]"
        } ${
          open
            ? "pointer-events-auto visible translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-y-2 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1">
          {navItems.map(({ href, label }) => {
            const id = href.slice(1);
            const isActive = activeId === id;
            return (
              <li key={href}>
                <a
                  href={href}
                  className={`block rounded-xl px-4 py-3 text-sm font-medium transition-[color,background-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none motion-reduce:duration-0 ${
                    isActive
                      ? "bg-violet-100 text-violet-900"
                      : "text-neutral-700 hover:bg-violet-50 hover:text-violet-900"
                  }`}
                  aria-current={isActive ? "location" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="mt-3 border-t border-neutral-100 pt-3 lg:hidden">
          <Button
            className="w-full"
            href="#products"
            onClick={() => setOpen(false)}
          >
            Order Now
          </Button>
        </div>
      </div>
    </header>
  );
}
