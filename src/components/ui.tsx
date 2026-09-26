import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useCountUp, useInView, usePointerSpot } from "@/lib/hooks";
import { IconArrowRight, IconArrowUpRight } from "./Icons";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/* ---------------------------------- reveal ---------------------------------- */

export function Reveal({
  children,
  delay = 0,
  className,
  axis = "y",
  as: As = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  axis?: "y" | "x";
  as?: React.ElementType;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <As
      ref={ref}
      className={cn(axis === "y" ? "reveal" : "reveal-x", inView && "is-in", className)}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      {children}
    </As>
  );
}

/* ---------------------------------- labels ---------------------------------- */

export function Eyebrow({
  children,
  no,
  tone = "dark",
  className,
}: {
  children: ReactNode;
  no?: string;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.22em] uppercase",
        tone === "dark" ? "text-mute" : "text-paper-3/70",
        className,
      )}
    >
      {no && (
        <span
          className={cn(
            "inline-flex h-5 min-w-5 items-center justify-center rounded-[3px] px-1 text-[10px] font-bold",
            tone === "dark" ? "bg-ink text-paper" : "bg-ember text-white",
          )}
        >
          {no}
        </span>
      )}
      {children}
    </span>
  );
}

export function SectionHead({
  eyebrow,
  no,
  title,
  lead,
  tone = "dark",
  align = "left",
  action,
}: {
  eyebrow: string;
  no?: string;
  title: ReactNode;
  lead?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "between";
  action?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "between" &&
          "flex flex-col gap-8 border-b pb-8 md:flex-row md:items-end md:justify-between",
        tone === "dark" ? "border-line" : "border-white/15",
        align === "left" && "border-b",
      )}
    >
      <div className={cn(align === "between" && "max-w-2xl")}>
        <Reveal>
          <Eyebrow no={no} tone={tone}>
            {eyebrow}
          </Eyebrow>
        </Reveal>
        <Reveal delay={70}>
          <h2
            className={cn(
              "font-display mt-4 text-[clamp(2.1rem,5.2vw,3.9rem)] leading-[0.95] font-extrabold tracking-[-0.03em] text-balance",
              tone === "dark" ? "text-ink" : "text-paper",
            )}
          >
            {title}
          </h2>
        </Reveal>
      </div>
      {(lead || action) && (
        <div className={cn(align === "between" ? "md:max-w-sm" : "mt-6 max-w-2xl")}>
          {lead && (
            <Reveal delay={140}>
              <p
                className={cn(
                  "text-[15px] leading-relaxed text-pretty md:text-base",
                  tone === "dark" ? "text-mute" : "text-paper-3/75",
                )}
              >
                {lead}
              </p>
            </Reveal>
          )}
          {action && <Reveal delay={200}>{action}</Reveal>}
        </div>
      )}
    </div>
  );
}

/* ---------------------------------- buttons --------------------------------- */

type BtnProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: "primary" | "ink" | "ghost" | "light";
  className?: string;
  icon?: boolean;
  external?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

export function Btn({
  children,
  to,
  href,
  variant = "primary",
  className,
  icon = true,
  external,
  onClick,
  type = "button",
  disabled,
}: BtnProps) {
  const styles = cn(
    "group/btn relative inline-flex items-center gap-2.5 overflow-hidden rounded-full px-6 py-3 font-mono text-[11.5px] font-medium tracking-[0.14em] uppercase transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50",
    variant === "primary" &&
      "bg-ember text-white shadow-[0_10px_30px_-12px_rgba(240,78,35,0.85)] hover:shadow-[0_18px_40px_-14px_rgba(240,78,35,0.9)] hover:-translate-y-0.5",
    variant === "ink" && "bg-ink text-paper hover:-translate-y-0.5 hover:bg-ink-700",
    variant === "ghost" &&
      "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-paper hover:-translate-y-0.5",
    variant === "light" &&
      "border border-white/25 text-paper hover:border-ember hover:bg-ember hover:text-white hover:-translate-y-0.5",
    className,
  );

  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      {icon && (
        <IconArrowRight
          width={15}
          height={15}
          className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1"
        />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={styles} onClick={onClick}>
        {inner}
      </Link>
    );
  }
  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer noopener" : undefined}
        className={styles}
        onClick={onClick}
      >
        {inner}
      </a>
    );
  }
  return (
    <button type={type} className={styles} onClick={onClick} disabled={disabled}>
      {inner}
    </button>
  );
}

export function TextLink({
  children,
  to,
  href,
  external,
  className,
}: {
  children: ReactNode;
  to?: string;
  href?: string;
  external?: boolean;
  className?: string;
}) {
  const cls = cn(
    "group/tl inline-flex items-center gap-1.5 font-mono text-[11.5px] tracking-[0.14em] uppercase transition-colors",
    className,
  );
  const inner = (
    <>
      <span className="underline-sweep">{children}</span>
      <IconArrowUpRight
        width={14}
        height={14}
        className="transition-transform duration-300 group-hover/tl:translate-x-0.5 group-hover/tl:-translate-y-0.5"
      />
    </>
  );
  if (to)
    return (
      <Link to={to} className={cls}>
        {inner}
      </Link>
    );
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      className={cls}
    >
      {inner}
    </a>
  );
}

/* --------------------------------- ambient bg -------------------------------- */

export function Backdrop({ variant = "paper" }: { variant?: "paper" | "ink" }) {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className={cn("absolute inset-0", variant === "paper" ? "blueprint" : "blueprint-dark")} />
      <div
        className={cn(
          "animate-drift absolute -top-[20%] -right-[10%] h-[70vh] w-[70vh] rounded-full opacity-60 blur-[90px]",
          variant === "paper"
            ? "bg-[radial-gradient(circle,rgba(240,78,35,0.16),transparent_65%)]"
            : "bg-[radial-gradient(circle,rgba(240,78,35,0.2),transparent_65%)]",
        )}
      />
      <div
        className={cn(
          "animate-drift absolute bottom-[-25%] left-[-15%] h-[65vh] w-[65vh] rounded-full opacity-50 blur-[100px] [animation-delay:-8s]",
          variant === "paper"
            ? "bg-[radial-gradient(circle,rgba(15,84,76,0.16),transparent_65%)]"
            : "bg-[radial-gradient(circle,rgba(27,125,111,0.22),transparent_65%)]",
        )}
      />
      <div className="noise absolute inset-0 opacity-[0.16] mix-blend-multiply" />
    </div>
  );
}

/* ---------------------------------- marquee --------------------------------- */

export function Marquee({
  items,
  tone = "dark",
  reverse,
  speed = "normal",
}: {
  items: string[];
  tone?: "dark" | "light";
  reverse?: boolean;
  speed?: "normal" | "slow";
}) {
  const row = [...items, ...items];
  return (
    <div
      className={cn(
        "group relative flex overflow-hidden",
        tone === "dark" ? "text-ink" : "text-paper",
      )}
    >
      <div
        className={cn(
          "flex shrink-0 items-center gap-8 pr-8 group-hover:[animation-play-state:paused]",
          speed === "slow" ? "animate-marquee-slow" : "animate-marquee",
        )}
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-8 font-mono text-[12px] tracking-[0.16em] whitespace-nowrap uppercase opacity-80"
          >
            {item}
            <span className={cn("text-[9px]", tone === "dark" ? "text-ember" : "text-ember-soft")}>
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------- counters ---------------------------------- */

export function Counter({
  value,
  suffix = "",
  label,
  tone = "dark",
}: {
  value: number;
  suffix?: string;
  label: string;
  tone?: "dark" | "light";
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const n = useCountUp(value, inView);
  return (
    <div ref={ref} className="group flex flex-col gap-1">
      <span
        className={cn(
          "font-display text-[clamp(2rem,4vw,2.9rem)] leading-none font-extrabold tracking-[-0.04em] transition-colors duration-300",
          tone === "dark" ? "text-ink group-hover:text-ember" : "text-paper group-hover:text-ember-soft",
        )}
      >
        {n}
        <span className="text-ember">{suffix}</span>
      </span>
      <span
        className={cn(
          "max-w-[15ch] text-[12.5px] leading-snug",
          tone === "dark" ? "text-mute" : "text-paper-3/70",
        )}
      >
        {label}
      </span>
    </div>
  );
}

/* ------------------------------ browser mockup ------------------------------ */

export function BrowserFrame({
  src,
  alt,
  domain,
  tone = "dark",
  className,
}: {
  src: string;
  alt: string;
  domain?: string;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[10px] border shadow-[0_30px_60px_-40px_rgba(13,16,20,0.8)]",
        tone === "dark" ? "border-ink/15 bg-ink" : "border-white/12 bg-ink-800",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-white/10 bg-ink-800 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-ember" />
        <span className="h-2 w-2 rounded-full bg-sand/60" />
        <span className="h-2 w-2 rounded-full bg-teal-2/70" />
        <div className="ml-2 flex-1 truncate rounded-[4px] bg-black/40 px-2 py-[3px] font-mono text-[9.5px] text-paper-3/60">
          {domain ?? alt}
        </div>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden bg-ink-700">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.07]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
      </div>
    </div>
  );
}

/* ------------------------------ spotlight card ------------------------------ */

export function SpotCard({
  children,
  className,
  tone = "dark",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "dark" | "light";
  id?: string;
}) {
  const { ref, spot } = usePointerSpot<HTMLDivElement>();
  return (
    <div
      ref={ref}
      id={id}
      className={cn("card-lift group relative scroll-mt-28 overflow-hidden", className)}
      style={{
        ["--spot" as string]: `radial-gradient(420px circle at ${spot.x}% ${spot.y}%, ${
          tone === "dark" ? "rgba(240,78,35,0.10)" : "rgba(240,78,35,0.18)"
        }, transparent 62%)`,
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: "var(--spot)" }}
      />
      {children}
    </div>
  );
}

/* ----------------------------------- misc ----------------------------------- */

export function Chip({
  children,
  tone = "dark",
  className,
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 font-mono text-[10.5px] tracking-[0.12em] uppercase transition-colors duration-300",
        tone === "dark"
          ? "border-ink/15 bg-white/50 text-ink-700 hover:border-ember hover:text-ember"
          : "border-white/15 bg-white/[0.04] text-paper-3/85 hover:border-ember-soft hover:text-ember-soft",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function CheckList({
  items,
  tone = "dark",
  className,
}: {
  items: string[];
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <ul className={cn("grid gap-2.5", className)}>
      {items.map((item) => (
        <li key={item} className="group/item flex items-start gap-3">
          <span
            className={cn(
              "mt-[3px] flex h-4 w-4 shrink-0 items-center justify-center rounded-[3px] transition-colors duration-300",
              tone === "dark"
                ? "bg-teal/12 text-teal group-hover/item:bg-ember group-hover/item:text-white"
                : "bg-teal-2/20 text-teal-2 group-hover/item:bg-ember group-hover/item:text-white",
            )}
          >
            <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth={3.2}>
              <path d="m4.5 12.5 5 5 10-11" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span
            className={cn(
              "text-[14.5px] leading-snug",
              tone === "dark" ? "text-ink-700" : "text-paper-3/85",
            )}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
