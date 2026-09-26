import { useEffect, useRef, useState } from "react";

/** Adds `is-in` once the element scrolls into view. */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: { threshold?: number; once?: boolean; rootMargin?: string } = {},
) {
  const { threshold = 0.16, once = true, rootMargin = "0px 0px -8% 0px" } = options;
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) obs.unobserve(entry.target);
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { threshold, rootMargin },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, once, rootMargin]);

  return { ref, inView };
}

/** Counts from 0 to `target` when triggered. */
export function useCountUp(target: number, active: boolean, duration = 1500) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);
  return value;
}

/** Types out strings one after another, loops forever. */
export function useTypewriter(lines: string[], speed = 26, pause = 1600) {
  const [out, setOut] = useState<string[]>([]);
  const [cursorLine, setCursorLine] = useState(0);

  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setOut(lines);
      setCursorLine(lines.length);
      return;
    }
    let cancelled = false;
    let lineIdx = 0;
    let charIdx = 0;
    let timer: number;

    const step = () => {
      if (cancelled) return;
      if (lineIdx >= lines.length) {
        timer = window.setTimeout(() => {
          lineIdx = 0;
          charIdx = 0;
          setOut([]);
          setCursorLine(0);
          step();
        }, pause * 1.8);
        return;
      }
      const current = lines[lineIdx];
      charIdx += 1;
      setOut((prev) => {
        const next = prev.slice(0, lineIdx);
        next[lineIdx] = current.slice(0, charIdx);
        return next;
      });
      setCursorLine(lineIdx);
      if (charIdx >= current.length) {
        lineIdx += 1;
        charIdx = 0;
        timer = window.setTimeout(step, pause / 3);
      } else {
        timer = window.setTimeout(step, speed);
      }
    };
    timer = window.setTimeout(step, 500);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [lines, speed, pause]);

  return { out, cursorLine };
}

/** 0 → 1 page scroll progress. */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? h.scrollTop / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return progress;
}

export function useScrolled(offset = 24) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);
  return scrolled;
}

/** Pointer position inside an element, as percentages (for spotlight hover). */
export function usePointerSpot<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  const [spot, setSpot] = useState({ x: 50, y: 50, active: false });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      setSpot({
        x: ((e.clientX - r.left) / r.width) * 100,
        y: ((e.clientY - r.top) / r.height) * 100,
        active: true,
      });
    };
    const leave = () => setSpot((s) => ({ ...s, active: false }));
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
    };
  }, []);
  return { ref, spot };
}
