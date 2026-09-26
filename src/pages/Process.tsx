import { useEffect, useRef, useState } from "react";
import { CTABand, PageHero } from "@/components/Chrome";
import { Btn, Chip, Eyebrow, Reveal, cn } from "@/components/ui";
import { IconArrowRight, IconCheck, IconClock, IconShield, IconUsers } from "@/components/Icons";
import { processSteps } from "@/lib/data";

const rules = [
  {
    icon: IconUsers,
    title: "One point of contact",
    body: "You speak to the developer, not an account manager. Same on WhatsApp, same on email, same person writing the code.",
  },
  {
    icon: IconClock,
    title: "Updates without chasing",
    body: "A short progress note at each stage boundary, plus a staging link you can open any time to see the current state.",
  },
  {
    icon: IconShield,
    title: "Scope changes in writing",
    body: "New features mid-project are fine — they get a written addition with cost and timeline impact before I build them.",
  },
  {
    icon: IconCheck,
    title: "Honest status reporting",
    body: "If something is delayed, you hear it from me first, with the reason and the new date. Never on the delivery day.",
  },
];

const concerns = [
  {
    q: "What if I want changes after development starts?",
    a: "Small tweaks that fit the agreed scope are absorbed. A new feature or page gets a written change note with its cost and timeline impact, and you decide whether it goes in now or into phase two.",
  },
  {
    q: "What if I'm slow with feedback or content?",
    a: "The timeline pauses rather than compresses. That's why the plan lists what I need from you and when — usually content by the design stage and feedback within 2–3 days of each review point.",
  },
  {
    q: "How do payments work?",
    a: "Milestone based: an advance to book the slot and begin, one at design approval, and the balance on delivery before handover of credentials. No surprise invoices at the end.",
  },
  {
    q: "What if the project needs to stop halfway?",
    a: "You keep whatever is built and paid for up to that point, including the repository and database. Work is committed to Git continuously, so nothing is trapped on my machine.",
  },
];

export default function Process() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number((e.target as HTMLElement).dataset.idx);
            if (!Number.isNaN(idx)) setActive(idx);
          }
        });
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 },
    );
    stepRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Process"
        no="05"
        title={["HOW A PROJECT", "ACTUALLY RUNS"]}
        lead="Seven stages from the first conversation to post-launch support. You always know what's happening now, what's next, and what you need to send me."
        meta={[
          { label: "Stages", value: "7 total" },
          { label: "Typical duration", value: "1–8 weeks" },
          { label: "Your involvement", value: "3 review points" },
          { label: "Scope", value: "Written before code" },
          { label: "Payments", value: "Milestone based" },
        ]}
      />

      {/* progress overview strip */}
      <section className="border-b border-line bg-ink py-6 text-paper">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {processSteps.map((s, i) => (
              <button
                key={s.no}
                type="button"
                onClick={() =>
                  stepRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" })
                }
                className={cn(
                  "group flex shrink-0 items-center gap-2 rounded-full border px-3.5 py-2 font-mono text-[10px] tracking-[0.14em] uppercase transition-all duration-300",
                  active === i
                    ? "border-ember bg-ember text-white"
                    : "border-white/15 text-paper-3/70 hover:border-paper-3/50 hover:text-paper",
                )}
              >
                <span className={cn(active === i ? "text-white" : "text-ember-soft")}>{s.no}</span>
                {s.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* steps */}
      <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[300px_1fr] lg:gap-16">
          {/* sticky index */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <Eyebrow>Stages</Eyebrow>
              <div className="mt-5 border-l border-line">
                {processSteps.map((s, i) => (
                  <button
                    key={s.no}
                    type="button"
                    onClick={() =>
                      stepRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" })
                    }
                    className={cn(
                      "-ml-px flex w-full items-baseline gap-3 border-l-2 py-3 pl-4 text-left transition-all duration-400",
                      active === i
                        ? "border-ember pl-6"
                        : "border-transparent hover:border-ink/30 hover:pl-5",
                    )}
                  >
                    <span
                      className={cn(
                        "font-mono text-[10px] transition-colors",
                        active === i ? "text-ember" : "text-mute",
                      )}
                    >
                      {s.no}
                    </span>
                    <span>
                      <span
                        className={cn(
                          "font-display block text-[1.15rem] leading-tight font-bold tracking-[-0.02em] transition-colors",
                          active === i ? "text-ink" : "text-mute",
                        )}
                      >
                        {s.title}
                      </span>
                      <span
                        className={cn(
                          "mt-0.5 block font-mono text-[9px] tracking-[0.14em] uppercase transition-colors",
                          active === i ? "text-ember" : "text-mute/70",
                        )}
                      >
                        {s.duration}
                      </span>
                    </span>
                  </button>
                ))}
              </div>

              <div className="mt-8 rounded-xl border border-ink/12 bg-paper-2/60 p-5">
                <Eyebrow>Your review points</Eyebrow>
                <ul className="mt-3 space-y-2 text-[13px] text-ink-700">
                  <li className="flex items-start gap-2">
                    <IconCheck width={12} height={12} className="mt-1 shrink-0 text-ember" />
                    After scope (stage 02)
                  </li>
                  <li className="flex items-start gap-2">
                    <IconCheck width={12} height={12} className="mt-1 shrink-0 text-ember" />
                    After design (stage 03)
                  </li>
                  <li className="flex items-start gap-2">
                    <IconCheck width={12} height={12} className="mt-1 shrink-0 text-ember" />
                    Before launch (stage 05)
                  </li>
                </ul>
              </div>
            </div>
          </aside>

          {/* step details */}
          <div className="space-y-5">
            {processSteps.map((s, i) => (
              <div
                key={s.no}
                data-idx={i}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                className={cn(
                  "scroll-mt-32 rounded-2xl border p-6 transition-all duration-500 md:p-9",
                  active === i
                    ? "border-ember/45 bg-paper shadow-[0_30px_60px_-45px_rgba(240,78,35,0.7)]"
                    : "border-ink/12 bg-paper/60",
                )}
              >
                <Reveal>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <span
                        className={cn(
                          "font-display grid h-14 w-14 shrink-0 place-items-center rounded-xl text-[1.15rem] font-extrabold transition-colors duration-500",
                          active === i ? "bg-ember text-white" : "bg-ink text-ember",
                        )}
                      >
                        {s.no}
                      </span>
                      <div>
                        <h2 className="font-display text-[clamp(1.6rem,3.2vw,2.3rem)] leading-none font-extrabold tracking-[-0.035em] text-ink">
                          {s.title}
                        </h2>
                        <p className="mt-2 font-mono text-[10px] tracking-[0.16em] text-mute uppercase">
                          {s.duration}
                        </p>
                      </div>
                    </div>
                    <span
                      className={cn(
                        "h-2 w-2 rounded-full transition-all duration-500",
                        active === i ? "animate-pulse-ring bg-ember" : "bg-line",
                      )}
                    />
                  </div>

                  <p className="mt-6 text-[15.5px] leading-relaxed text-ink-700 text-pretty">
                    {s.body}
                  </p>

                  <div className="mt-6 border-t border-line pt-5">
                    <Eyebrow>What you get at this stage</Eyebrow>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {s.deliverables.map((d) => (
                        <Chip key={d}>{d}</Chip>
                      ))}
                    </div>
                  </div>

                  {i < processSteps.length - 1 && (
                    <div className="mt-6 flex items-center gap-2 font-mono text-[9.5px] tracking-[0.18em] text-mute uppercase">
                      <IconArrowRight width={14} height={14} className="text-ember" />
                      Next: {processSteps[i + 1].title}
                    </div>
                  )}
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* working rules */}
      <section className="border-y border-line bg-paper-2/70 py-18 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Eyebrow no="✓">Ground rules</Eyebrow>
              <h2 className="font-display mt-4 text-[clamp(1.9rem,4.2vw,3rem)] leading-[0.98] font-extrabold tracking-[-0.035em] text-ink">
                How we'll
                <br />
                work together.
              </h2>
              <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-mute">
                The process only works if communication is predictable. These four commitments are
                mine, not yours.
              </p>
              <Btn to="/contact" variant="ink" className="mt-8">
                Start at stage 01
              </Btn>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {rules.map((r, i) => {
                const Icon = r.icon;
                return (
                  <Reveal key={r.title} delay={i * 80}>
                    <div className="group h-full rounded-xl border border-ink/12 bg-paper p-6 transition-all duration-400 hover:-translate-y-1 hover:border-ink">
                      <span className="grid h-11 w-11 place-items-center rounded-lg bg-ink text-ember transition-all duration-400 group-hover:rotate-6 group-hover:bg-ember group-hover:text-white">
                        <Icon width={19} height={19} />
                      </span>
                      <h3 className="font-display mt-5 text-[1.2rem] leading-tight font-bold tracking-[-0.02em] text-ink">
                        {r.title}
                      </h3>
                      <p className="mt-2.5 text-[13.5px] leading-relaxed text-mute">{r.body}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* concerns */}
      <section className="mx-auto max-w-[1400px] px-5 py-18 md:px-8 md:py-24">
        <div className="grid gap-10 lg:grid-cols-2">
          {concerns.map((c, i) => (
            <Reveal key={c.q} delay={i * 70}>
              <div className="group h-full border-l-2 border-line pl-6 transition-colors duration-400 hover:border-ember">
                <span className="font-mono text-[10px] tracking-[0.18em] text-ember uppercase">
                  Concern {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display mt-3 text-[1.35rem] leading-snug font-bold tracking-[-0.025em] text-ink">
                  {c.q}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-mute">{c.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand
        title={["READY TO START", "AT STAGE 01?"]}
        lead="The first conversation costs nothing and commits you to nothing. Bring your requirement, and leave with a written scope."
        primary="Book the Discussion"
        secondary={{ label: "See pricing", to: "/pricing" }}
      />
    </>
  );
}
