import { Link } from "react-router-dom";
import { CTABand, PageHero } from "@/components/Chrome";
import { Btn, Chip, Eyebrow, Reveal, SectionHead, cn } from "@/components/ui";
import { IconArrowRight, IconCheck, IconQuote, IconShield } from "@/components/Icons";
import { expectations, projects, testimonialStatus } from "@/lib/data";

const reservedSlots = [
  { tag: "Business website client", status: "Awaiting written permission" },
  { tag: "Laravel application client", status: "Feedback requested at handover" },
  { tag: "Maintenance client", status: "Not published yet" },
];

const fakeThings = [
  { bad: "\"Anash is amazing, 5 stars!\" — R. Sharma", why: "No such client, no such project." },
  { bad: "100+ Happy Clients", why: "I have delivered a small number of projects, all documented." },
  { bad: "500+ Projects Completed", why: "Three years of one developer's real output is not 500 projects." },
  { bad: "99% Client Satisfaction", why: "Nothing is being measured, so nothing can be a percentage." },
  { bad: "Stock photo of a smiling client", why: "A purchased face is not a testimonial." },
];

export default function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        no="06"
        title={["CLIENT FEEDBACK,", "NOT INVENTED"]}
        lead={testimonialStatus.body}
        meta={[
          { label: "Published reviews", value: "0 — none yet" },
          { label: "Fake reviews", value: "0 — never" },
          { label: "Case studies", value: `${projects.length} documented` },
          { label: "References", value: "Available on request" },
          { label: "Policy", value: "Written permission only" },
        ]}
      />

      {/* honest empty state */}
      <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-20">
        <div className="relative overflow-hidden rounded-3xl border border-ink/12 bg-paper p-7 md:p-12">
          <div
            aria-hidden
            className="animate-drift pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(240,78,35,0.16),transparent_65%)] blur-[55px]"
          />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-14">
            <div>
              <span className="grid h-14 w-14 place-items-center rounded-xl bg-ink text-ember">
                <IconQuote width={26} height={26} />
              </span>
              <h2 className="font-display mt-7 text-[clamp(2rem,5vw,3.4rem)] leading-[0.98] font-extrabold tracking-[-0.04em] text-ink">
                {testimonialStatus.headline}
              </h2>
              <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-mute text-pretty">
                This page stays empty on purpose. A portfolio with invented reviews teaches a
                client nothing except that the developer is comfortable lying — and every claim
                here should be checkable.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {testimonialStatus.principles.map((p, i) => (
                  <Reveal key={p} delay={i * 70}>
                    <div className="flex items-start gap-3 rounded-lg border border-ink/10 bg-paper-2/50 p-4">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-teal/12 text-teal">
                        <IconCheck width={12} height={12} />
                      </span>
                      <p className="text-[13.5px] leading-snug text-ink-700">{p}</p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Btn to="/contact">Become the first named client</Btn>
                <Btn to="/projects" variant="ghost">
                  Judge the work instead
                </Btn>
              </div>
            </div>

            {/* reserved slots */}
            <div>
              <Eyebrow>Reserved slots</Eyebrow>
              <div className="mt-4 space-y-3">
                {reservedSlots.map((s, i) => (
                  <div
                    key={s.tag}
                    className={cn(
                      "group relative rounded-xl border-2 border-dashed border-line bg-paper-2/30 p-5 transition-all duration-400 hover:border-ember/50 hover:bg-ember/[0.04]",
                    )}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-mono text-[9.5px] tracking-[0.16em] text-mute uppercase">
                        Slot {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="rounded-full bg-ink/8 px-2.5 py-1 font-mono text-[8.5px] tracking-[0.14em] text-ink-700 uppercase">
                        {s.status}
                      </span>
                    </div>
                    <p className="font-display mt-3 text-[1.15rem] leading-snug font-bold tracking-[-0.02em] text-ink/70">
                      {s.tag}
                    </p>
                    <div className="mt-4 space-y-2">
                      <span className="block h-2 w-full rounded-full bg-ink/8" />
                      <span className="block h-2 w-[86%] rounded-full bg-ink/8" />
                      <span className="block h-2 w-[62%] rounded-full bg-ink/8" />
                    </div>
                    <p className="mt-4 font-mono text-[9px] tracking-[0.14em] text-mute uppercase">
                      Quote appears here only with written permission
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* what will never appear */}
      <section className="border-y border-line bg-ink py-18 text-paper md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <SectionHead
            tone="light"
            align="between"
            eyebrow="The policy"
            no="01"
            title={
              <>
                What will never
                <br />
                appear on this site.
              </>
            }
            lead="Freelance portfolios are full of numbers that cannot be true. Here is exactly what I refuse to publish, and why."
          />
          <div className="divide-y divide-white/10 border-y border-white/10">
            {fakeThings.map((f, i) => (
              <Reveal key={f.bad} delay={i * 50}>
                <div className="group grid gap-2 py-5 transition-colors duration-300 hover:bg-white/[0.03] md:grid-cols-[1fr_1fr] md:items-center md:gap-10">
                  <div className="flex items-start gap-4">
                    <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-md border border-rust/50 text-ember-soft">
                      ✕
                    </span>
                    <p className="font-display text-[1.15rem] leading-snug font-bold text-paper-3/70 line-through decoration-rust/70 transition-colors duration-300 group-hover:text-paper">
                      {f.bad}
                    </p>
                  </div>
                  <p className="text-[14px] leading-snug text-paper-3/60 md:pl-10">{f.why}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-10 flex flex-col gap-5 rounded-2xl border border-white/12 bg-white/[0.03] p-6 sm:flex-row sm:items-center md:p-8">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-ember text-white">
                <IconShield width={22} height={22} />
              </span>
              <p className="flex-1 text-[15px] leading-relaxed text-paper-3/80">
                Verifiable references — a client email address or a call — are available on request
                for serious enquiries. That is a stronger check than any quote box on a website.
              </p>
              <Btn to="/contact" variant="light">
                Request references
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* expectations */}
      <section className="mx-auto max-w-[1400px] px-5 py-18 md:px-8 md:py-24">
        <SectionHead
          align="between"
          eyebrow="Meanwhile"
          no="02"
          title={
            <>
              What you can hold
              <br />
              me to instead.
            </>
          }
          lead="Until there are reviews to read, here is the written commitment you can judge me against during the project itself."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {expectations.map((e, i) => (
            <Reveal key={e.title} delay={i * 90}>
              <div
                className={cn(
                  "h-full rounded-2xl border p-7 md:p-8",
                  i === 0 ? "border-ember/30 bg-ember/[0.05]" : "border-ink/12 bg-paper",
                )}
              >
                <Eyebrow no={String(i + 1).padStart(2, "0")}>{i === 0 ? "My side" : "Your side"}</Eyebrow>
                <h3 className="font-display mt-4 text-[clamp(1.5rem,3vw,2.1rem)] leading-tight font-extrabold tracking-[-0.03em] text-ink">
                  {e.title}
                </h3>
                <ul className="mt-6 space-y-3">
                  {e.items.map((it) => (
                    <li key={it} className="group flex items-start gap-3">
                      <span className="mt-[3px] grid h-5 w-5 shrink-0 place-items-center rounded-[4px] bg-ink text-ember transition-colors duration-300 group-hover:bg-ember group-hover:text-white">
                        <IconCheck width={11} height={11} />
                      </span>
                      <span className="text-[14.5px] leading-snug text-ink-700">{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* judge the work */}
      <section className="border-t border-line bg-paper-2/70 py-18 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <SectionHead
            align="between"
            eyebrow="Better evidence"
            no="03"
            title={
              <>
                Read the case
                <br />
                studies instead.
              </>
            }
            lead="A documented project — problem, build, features, result — tells you more about how I work than an adjective from a stranger."
            action={
              <Btn to="/projects" variant="ink" className="mt-6">
                All projects
              </Btn>
            }
          />
          <div className="grid gap-4 md:grid-cols-3">
            {projects.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <Link
                  to={`/projects/${p.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-ink/12 bg-paper p-6 transition-all duration-400 hover:-translate-y-1.5 hover:border-ember"
                >
                  <span className="font-mono text-[9.5px] tracking-[0.16em] text-ember uppercase">
                    {p.categoryLabel}
                  </span>
                  <h3 className="font-display mt-3 text-[1.35rem] leading-tight font-bold tracking-[-0.025em] text-ink">
                    {p.name}
                  </h3>
                  <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-mute">{p.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.tech.slice(0, 3).map((t) => (
                      <Chip key={t}>{t}</Chip>
                    ))}
                  </div>
                  <span className="mt-5 flex items-center gap-2 border-t border-line pt-4 font-mono text-[10px] tracking-[0.14em] text-ink uppercase transition-colors group-hover:text-ember">
                    Read case study
                    <IconArrowRight
                      width={13}
                      height={13}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title={["BE THE FIRST", "REVIEW HERE."]}
        lead="If you've read this far, you already care about honesty in a developer. That usually makes for a good project."
        primary="Start a Project"
        secondary={{ label: "Read case studies", to: "/projects" }}
      />
    </>
  );
}
