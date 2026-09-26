import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { cn } from "./ui";
import { navLinks, moreLinks, profile } from "@/lib/data";
import { useScrolled, useScrollProgress } from "@/lib/hooks";
import { IconClose, IconMenu, IconArrowUpRight } from "./Icons";

const all = [...navLinks, ...moreLinks];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const scrolled = useScrolled(30);
  const progress = useScrollProgress();
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isCaseStudy = pathname.startsWith("/projects/");

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-line/80 bg-paper/88 backdrop-blur-xl supports-[backdrop-filter]:bg-paper/72"
            : "border-b border-transparent",
        )}
      >
        {/* scroll progress */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-transparent">
          <div
            className="h-full origin-left bg-ember transition-[width] duration-150 ease-out"
            style={{ width: `${progress * 100}%` }}
          />
        </div>

        <div className="mx-auto flex max-w-[1400px] items-center gap-6 px-5 py-3.5 md:px-8">
          {/* logo */}
          <Link to="/" className="group flex shrink-0 items-center gap-3" aria-label="Home">
            <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-[7px] bg-ink">
              <span className="font-display absolute text-[15px] font-extrabold text-paper transition-transform duration-500 group-hover:-translate-y-6">
                AS
              </span>
              <span className="font-display absolute translate-y-6 text-[15px] font-extrabold text-ember transition-transform duration-500 group-hover:translate-y-0">
                {"</>"}
              </span>
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="font-display block text-[15px] font-extrabold tracking-[-0.02em] text-ink">
                {profile.name}
              </span>
              <span className="block font-mono text-[9.5px] tracking-[0.16em] text-mute uppercase">
                PHP &amp; Laravel Developer
              </span>
            </span>
          </Link>

          {/* desktop nav */}
          <nav className="ml-auto hidden items-center gap-0.5 xl:flex">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "group relative rounded-full px-2.5 py-2 font-mono text-[10.5px] tracking-[0.12em] uppercase transition-colors duration-300 xl:px-3",
                    isActive || (l.to === "/projects" && isCaseStudy)
                      ? "text-ember"
                      : "text-ink-700 hover:text-ink",
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    <span
                      className={cn(
                        "absolute bottom-1 left-1/2 h-[1.5px] -translate-x-1/2 bg-ember transition-all duration-300",
                        isActive || (l.to === "/projects" && isCaseStudy)
                          ? "w-4 opacity-100"
                          : "w-0 opacity-0 group-hover:w-4 group-hover:opacity-100",
                      )}
                    />
                  </>
                )}
              </NavLink>
            ))}

            {/* more dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => setMoreOpen(false)}
            >
              <button
                type="button"
                onClick={() => setMoreOpen((v) => !v)}
                aria-expanded={moreOpen}
                className={cn(
                  "flex items-center gap-1 rounded-full px-3 py-2 font-mono text-[10.5px] tracking-[0.12em] uppercase transition-colors",
                  moreLinks.some((m) => m.to === pathname) ? "text-ember" : "text-ink-700 hover:text-ink",
                )}
              >
                More
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className={cn("transition-transform duration-300", moreOpen && "rotate-180")}
                >
                  <path d="m5 9 7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div
                className={cn(
                  "absolute top-full right-0 w-44 origin-top-right overflow-hidden rounded-lg border border-line bg-paper p-1.5 shadow-[0_24px_50px_-30px_rgba(13,16,20,0.7)] transition-all duration-250",
                  moreOpen
                    ? "pointer-events-auto scale-100 opacity-100"
                    : "pointer-events-none scale-95 opacity-0",
                )}
              >
                {moreLinks.map((m) => (
                  <Link
                    key={m.to}
                    to={m.to}
                    className="flex items-center justify-between rounded-md px-3 py-2 font-mono text-[10.5px] tracking-[0.12em] text-ink-700 uppercase transition-colors hover:bg-ink hover:text-paper"
                  >
                    {m.label}
                    <IconArrowUpRight width={12} height={12} />
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          <div className="ml-auto flex items-center gap-2 xl:ml-0">
            <Link
              to="/contact"
              className="group hidden items-center gap-2 rounded-full bg-ember px-5 py-2.5 font-mono text-[10.5px] tracking-[0.14em] text-white uppercase shadow-[0_10px_28px_-14px_rgba(240,78,35,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink md:inline-flex"
            >
              Start a Project
              <IconArrowUpRight
                width={13}
                height={13}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-ink/20 text-ink transition-colors hover:bg-ink hover:text-paper xl:hidden"
            >
              <IconMenu />
            </button>
          </div>
        </div>
      </header>

      {/* mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] xl:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div
          className={cn(
            "absolute inset-0 bg-ink/55 backdrop-blur-sm transition-opacity duration-400",
            open ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setOpen(false)}
        />
        <aside
          className={cn(
            "blueprint-dark absolute top-0 right-0 flex h-full w-[min(88vw,380px)] flex-col bg-ink transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <span className="font-mono text-[10px] tracking-[0.22em] text-paper-3/60 uppercase">
              Menu
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-paper transition-colors hover:border-ember hover:bg-ember"
            >
              <IconClose />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-5 py-6">
            {all.map((l, i) => (
              <Link
                key={l.to}
                to={l.to}
                className="group flex items-baseline justify-between border-b border-white/8 py-3.5 transition-colors"
                style={{
                  transition: "opacity .5s, transform .5s",
                  transitionDelay: `${open ? 90 + i * 45 : 0}ms`,
                  opacity: open ? 1 : 0,
                  transform: open ? "none" : "translateX(18px)",
                }}
              >
                <span className="flex items-baseline gap-3">
                  <span className="font-mono text-[10px] text-ember">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-[26px] leading-none font-bold tracking-[-0.02em] text-paper transition-colors group-hover:text-ember">
                    {l.label}
                  </span>
                </span>
                <IconArrowUpRight
                  width={15}
                  height={15}
                  className="text-paper-3/40 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-ember"
                />
              </Link>
            ))}
          </nav>

          <div className="border-t border-white/10 px-5 py-5">
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 rounded-full bg-ember px-6 py-3.5 font-mono text-[11px] tracking-[0.14em] text-white uppercase"
            >
              Start a Project <IconArrowUpRight width={14} height={14} />
            </Link>
            <p className="mt-4 text-center font-mono text-[10px] tracking-[0.14em] text-paper-3/45 uppercase">
              {profile.location} · {profile.responseTime}
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
