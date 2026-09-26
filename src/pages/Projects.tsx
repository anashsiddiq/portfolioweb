import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { CTABand, PageHero } from "@/components/Chrome";
import {
  BrowserFrame,
  Btn,
  Chip,
  Eyebrow,
  Reveal,
  SpotCard,
  cn,
} from "@/components/ui";
import {
  IconArrowRight,
  IconCheck,
  IconDatabase,
  IconLayers,
  IconSite,
  IconSpark,
} from "@/components/Icons";
import { projectCategories, projects } from "@/lib/data";

const flowLegend = [
  { icon: IconSpark, label: "Problem" },
  { icon: IconSite, label: "What I built" },
  { icon: IconCheck, label: "Features" },
  { icon: IconLayers, label: "Technology" },
  { icon: IconDatabase, label: "Result" },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const list = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <>
      <PageHero
        eyebrow="Projects"
        no="03"
        title={["SELECTED WORK,", "EXPLAINED PROPERLY"]}
        lead="Six projects, each written up the same way: the client's problem, what I built, the features, the technology and what changed afterwards. No screenshot-only galleries."
        meta={[
          { label: "Case studies", value: `${projects.length} detailed` },
          { label: "Categories", value: "Business · Laravel · React · Dashboards" },
          { label: "Years", value: "2023 – 2025" },
          { label: "Primary stack", value: "PHP · Laravel · MySQL" },
          { label: "Handover", value: "Code + credentials" },
        ]}
      >
        {/* structure legend */}
        <Reveal delay={400}>
          <div className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-3 border-t border-white/12 pt-6">
            <span className="mr-2 font-mono text-[9.5px] tracking-[0.2em] text-paper-3/45 uppercase">
              Every case study follows
            </span>
            {flowLegend.map((f, i) => {
              const Icon = f.icon;
              return (
                <span key={f.label} className="flex items-center gap-2">
                  <span className="flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5 font-mono text-[10px] tracking-[0.12em] text-paper-3/80 uppercase">
                    <Icon width={13} height={13} className="text-ember-soft" />
                    {f.label}
                  </span>
                  {i < flowLegend.length - 1 && (
                    <IconArrowRight width={13} height={13} className="text-white/25" />
                  )}
                </span>
              );
            })}
          </div>
        </Reveal>
      </PageHero>

      {/* filters */}
      <div className="sticky top-[68px] z-30 border-b border-line bg-paper/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1400px] items-center gap-3 overflow-x-auto px-5 py-3 md:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {projectCategories.map((c) => {
            const count =
              c.id === "all" ? projects.length : projects.filter((p) => p.category === c.id).length;
            const active = filter === c.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setFilter(c.id)}
                className={cn(
                  "group flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 font-mono text-[10.5px] tracking-[0.14em] uppercase transition-all duration-300",
                  active
                    ? "border-ember bg-ember text-white shadow-[0_10px_24px_-14px_rgba(240,78,35,0.9)]"
                    : "border-ink/15 text-ink-700 hover:border-ink hover:bg-ink hover:text-paper",
                )}
              >
                {c.label}
                <span
                  className={cn(
                    "rounded-full px-1.5 py-px text-[9px]",
                    active ? "bg-white/25" : "bg-ink/8 text-mute group-hover:bg-white/15",
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
          <span className="ml-auto hidden shrink-0 font-mono text-[10px] tracking-[0.16em] text-mute uppercase md:block">
            Showing {list.length} of {projects.length}
          </span>
        </div>
      </div>

      {/* list */}
      <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-20">
        <div className="space-y-8">
          {list.map((p, i) => {
            const flip = i % 2 === 1;
            return (
              <Reveal key={p.slug} delay={30}>
                <SpotCard
                  className={cn(
                    "grid gap-8 rounded-2xl border border-ink/12 bg-paper p-5 md:p-8 lg:grid-cols-[1.02fr_1fr] lg:gap-12",
                  )}
                >
                  {/* visual */}
                  <div className={cn("relative", flip && "lg:order-2")}>
                    <Link to={`/projects/${p.slug}`} className="block">
                      <BrowserFrame src={p.image} alt={p.name} domain={p.domain} />
                    </Link>
                    <div className="mt-4 grid grid-cols-3 gap-3">
                      {p.highlights.map((h) => (
                        <div
                          key={h.label}
                          className="rounded-lg border border-ink/10 bg-paper-2/70 px-3 py-2.5 text-center transition-colors duration-300 hover:border-ember/40"
                        >
                          <span className="font-display block text-[1.15rem] leading-none font-extrabold text-ink">
                            {h.value}
                          </span>
                          <span className="mt-1 block font-mono text-[8.5px] tracking-[0.12em] text-mute uppercase">
                            {h.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* content */}
                  <div className={cn("flex flex-col", flip && "lg:order-1")}>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="rounded-full bg-ink px-3 py-1 font-mono text-[9px] tracking-[0.16em] text-paper uppercase">
                        {p.categoryLabel}
                      </span>
                      <span className="font-mono text-[9.5px] tracking-[0.16em] text-mute uppercase">
                        {p.industry} · {p.year} · {p.duration}
                      </span>
                    </div>

                    <h2 className="font-display mt-4 text-[clamp(1.75rem,3.6vw,2.55rem)] leading-[1.02] font-extrabold tracking-[-0.035em] text-ink">
                      <Link
                        to={`/projects/${p.slug}`}
                        className="transition-colors duration-300 hover:text-ember"
                      >
                        {p.name}
                      </Link>
                    </h2>
                    <p className="mt-1.5 font-mono text-[10.5px] tracking-[0.14em] text-ember uppercase">
                      {p.client}
                    </p>

                    <div className="mt-6 space-y-5 border-t border-line pt-5">
                      <Block label="Client problem" text={p.problem} tone="mute" />
                      <Block label="What I built" text={p.solution} tone="ink" />
                    </div>

                    <div className="mt-6 grid gap-6 sm:grid-cols-2">
                      <div>
                        <Eyebrow>Features</Eyebrow>
                        <ul className="mt-3 space-y-1.5">
                          {p.features.slice(0, 6).map((f) => (
                            <li key={f} className="flex items-start gap-2 text-[13px] text-ink-700">
                              <IconCheck width={12} height={12} className="mt-[3px] shrink-0 text-teal" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <Eyebrow>Technology</Eyebrow>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {p.tech.map((t) => (
                            <Chip key={t}>{t}</Chip>
                          ))}
                        </div>
                        <Eyebrow className="mt-5">Result</Eyebrow>
                        <p className="mt-2 rounded-lg border-l-2 border-ember bg-ember/[0.06] px-3.5 py-2.5 text-[13px] leading-snug text-ink-700">
                          {p.result}
                        </p>
                      </div>
                    </div>

                    <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-line pt-6">
                      <Btn to={`/projects/${p.slug}`}>View Case Study</Btn>
                      <Btn to={`/contact?project=${p.slug}`} variant="ghost">
                        Request Live Demo
                      </Btn>
                    </div>
                  </div>
                </SpotCard>
              </Reveal>
            );
          })}
        </div>

        {list.length === 0 && (
          <p className="py-20 text-center text-mute">Nothing in this category yet.</p>
        )}
      </section>

      {/* honesty note */}
      <section className="border-t border-line bg-paper-2/70 py-16 md:py-20">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Eyebrow no="✓">A note on these numbers</Eyebrow>
            <h2 className="font-display mt-4 text-[clamp(1.8rem,4vw,2.8rem)] leading-[1] font-extrabold tracking-[-0.035em] text-ink">
              Only results I
              <br />
              can actually prove.
            </h2>
          </div>
          <div className="space-y-4 text-[15px] leading-relaxed text-mute">
            <p>
              You won't find "increased sales by 300%" or "10,000+ users" anywhere on this site.
              Where a project produced a measurable outcome I state it plainly; where the outcome
              is qualitative — a workflow moved off paper, a menu can be updated without
              reprinting — that's what I write.
            </p>
            <p>
              Client names are shown where permission was given or the work is internal. Live demo
              links are shared on request, since several of these systems sit behind a login.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Btn to="/contact" variant="ink">
                Request a demo link
              </Btn>
              <Btn to="/testimonials" variant="ghost" icon={false}>
                Feedback policy
              </Btn>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title={["YOUR PROJECT", "COULD BE NEXT."]}
        lead="Send the requirement — pages, features, deadline. You'll get a scope, a timeline and a starting price, usually within a day."
        primary="Start a Project"
        secondary={{ label: "View pricing", to: "/pricing" }}
      />
    </>
  );
}

function Block({
  label,
  text,
  tone,
}: {
  label: string;
  text: string;
  tone: "mute" | "ink";
}) {
  return (
    <div className="group/block">
      <Eyebrow>{label}</Eyebrow>
      <p
        className={cn(
          "mt-2 text-[14px] leading-relaxed text-pretty transition-colors duration-300",
          tone === "mute" ? "text-mute group-hover/block:text-ink-700" : "text-ink-700",
        )}
      >
        {text}
      </p>
    </div>
  );
}
