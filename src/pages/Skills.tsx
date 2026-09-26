import { CTABand, PageHero } from "@/components/Chrome";
import { Btn, Chip, Eyebrow, Reveal, SectionHead, cn } from "@/components/ui";
import {
  IconCheck,
  IconClose,
  IconCode,
  IconDatabase,
  IconLayers,
  IconTerminal,
  IconWrench,
} from "@/components/Icons";
import { currentlyLearning, notClaiming, projects, services, skillGroups } from "@/lib/data";

const groupIcons = [IconCode, IconTerminal, IconDatabase, IconWrench];

const fakePercentages = ["PHP — 95%", "Laravel — 90%", "React — 85%", "MySQL — 88%"];

const appliedTo = [
  { skill: "Laravel", where: "Property Listing Portal, Gym Membership Dashboard, Document Portal" },
  { skill: "React.js", where: "Storefront UI, document library & upload components" },
  { skill: "MySQL", where: "Every project — schema design, indexing, reports" },
  { skill: "Bootstrap 5", where: "Admin panels, clinic website, menu website" },
  { skill: "REST APIs", where: "Storefront checkout, internal portal components" },
  { skill: "Chart.js", where: "Restaurant revenue reports, gym member growth" },
];

export default function Skills() {
  const total = skillGroups.reduce((n, g) => n + g.items.length, 0);

  return (
    <>
      <PageHero
        eyebrow="Skills"
        no="04"
        title={["THE STACK,", "USED DAILY"]}
        lead="Grouped by where each tool actually gets used — frontend, backend, database, deployment. Deliberately no percentage bars, because nobody can prove 'PHP 95%'."
        meta={[
          { label: "Technologies", value: `${total} listed` },
          { label: "Primary", value: "PHP · Laravel" },
          { label: "Frontend", value: "React.js · Bootstrap 5" },
          { label: "Database", value: "MySQL" },
          { label: "Deployment", value: "cPanel · Git" },
        ]}
      />

      {/* no percentages callout */}
      <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-8 rounded-2xl border border-ink/12 bg-paper p-6 md:grid-cols-[1fr_auto] md:items-center md:p-9">
          <div>
            <Eyebrow no="✕">Why there are no skill bars here</Eyebrow>
            <h2 className="font-display mt-4 max-w-xl text-[clamp(1.7rem,3.6vw,2.5rem)] leading-[1.03] font-extrabold tracking-[-0.035em] text-ink">
              A percentage says nothing about whether your project ships.
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-mute">
              "95% PHP" is not a measurable claim — it isn't compared against anything. What a
              client actually needs to know is which tools are used, in which part of the project,
              and whether I've shipped something real with them. So each skill below is listed with
              what I do with it instead.
            </p>
          </div>
          <div className="grid gap-2">
            {fakePercentages.map((f, i) => (
              <div
                key={f}
                className="flex items-center gap-3 rounded-lg border border-ink/10 bg-paper-2/60 px-4 py-2.5"
              >
                <IconClose width={14} height={14} className="shrink-0 text-rust" />
                <span className="font-mono text-[11.5px] text-mute line-through decoration-rust/60">
                  {f}
                </span>
                <span
                  className="ml-auto h-1.5 rounded-full bg-ink/10"
                  style={{ width: `${54 - i * 6}px` }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* groups */}
      <section className="border-y border-line bg-paper-2/60 py-18 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <SectionHead
            align="between"
            eyebrow="Skill groups"
            no="01"
            title={
              <>
                Four layers of
                <br />
                every project.
              </>
            }
            lead="A web application fails at whichever layer is weakest, so all four get the same attention."
          />

          <div className="space-y-6">
            {skillGroups.map((g, gi) => {
              const Icon = groupIcons[gi];
              return (
                <Reveal key={g.title} delay={gi * 60}>
                  <div
                    className={cn(
                      "grid gap-8 rounded-2xl border border-ink/12 bg-paper p-6 md:p-8 lg:grid-cols-[280px_1fr] lg:gap-14",
                    )}
                  >
                    <div className="lg:border-r lg:border-line lg:pr-8">
                      <div className="flex items-center gap-3">
                        <span className="grid h-12 w-12 place-items-center rounded-xl bg-ink text-ember">
                          <Icon width={22} height={22} />
                        </span>
                        <span className="font-mono text-[10px] tracking-[0.18em] text-mute uppercase">
                          Group {String(gi + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="font-display mt-5 text-[clamp(1.6rem,3vw,2.1rem)] leading-none font-extrabold tracking-[-0.035em] text-ink">
                        {g.title}
                      </h3>
                      <p className="mt-3 text-[14px] leading-relaxed text-mute">{g.note}</p>
                      <p className="mt-5 font-mono text-[10px] tracking-[0.16em] text-ember uppercase">
                        {g.items.length} technologies
                      </p>
                    </div>

                    <ul className="grid gap-x-8 gap-y-0 sm:grid-cols-2">
                      {g.items.map((item, ii) => (
                        <li
                          key={item.name}
                          className="group relative border-b border-line py-4 transition-all duration-300 last:border-b-0 sm:[&:nth-last-child(2)]:border-b-0"
                        >
                          <span
                            aria-hidden
                            className="absolute top-0 -left-4 h-full w-[2px] origin-top scale-y-0 bg-ember transition-transform duration-400 group-hover:scale-y-100"
                          />
                          <div className="flex items-baseline gap-3">
                            <span className="font-mono text-[9.5px] text-mute">
                              {String(ii + 1).padStart(2, "0")}
                            </span>
                            <h4 className="font-display text-[1.15rem] font-bold tracking-[-0.02em] text-ink transition-transform duration-300 group-hover:translate-x-1">
                              {item.name}
                            </h4>
                          </div>
                          <p className="mt-1 pl-7 text-[13px] leading-snug text-mute transition-transform duration-300 group-hover:translate-x-1">
                            {item.detail}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* applied to */}
      <section className="mx-auto max-w-[1400px] px-5 py-18 md:px-8 md:py-24">
        <SectionHead
          align="between"
          eyebrow="Proof of use"
          no="02"
          title={
            <>
              Where each skill
              <br />
              was actually used.
            </>
          }
          lead="Not a list of things I've read about — a map from tool to shipped project."
          action={
            <Btn to="/projects" variant="ghost" className="mt-6">
              Read the case studies
            </Btn>
          }
        />
        <div className="divide-y divide-line border-y border-line">
          {appliedTo.map((a, i) => (
            <Reveal key={a.skill} delay={i * 50}>
              <div className="group grid gap-2 py-5 transition-colors duration-300 hover:bg-paper-2/50 md:grid-cols-[220px_1fr_auto] md:items-center md:gap-8">
                <span className="font-display text-[1.3rem] font-bold tracking-[-0.025em] text-ink transition-transform duration-300 group-hover:translate-x-1.5">
                  {a.skill}
                </span>
                <span className="text-[14px] leading-snug text-mute transition-transform duration-300 group-hover:translate-x-1.5">
                  {a.where}
                </span>
                <span className="font-mono text-[9.5px] tracking-[0.16em] text-ember opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  USED IN PRODUCTION →
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-teal/25 bg-teal/[0.06] p-7">
              <div className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-teal text-white">
                  <IconLayers width={17} height={17} />
                </span>
                <Eyebrow>Currently learning</Eyebrow>
              </div>
              <p className="mt-4 text-[14.5px] leading-relaxed text-ink-700">
                Listed separately because I don't want to imply these are production-grade yet —
                they're where my evenings go.
              </p>
              <ul className="mt-5 grid gap-2.5">
                {currentlyLearning.map((c) => (
                  <li key={c} className="flex items-center gap-2.5 text-[14px] text-ink-700">
                    <IconCheck width={13} height={13} className="shrink-0 text-teal" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="h-full rounded-2xl border border-ink/12 bg-paper p-7">
              <div className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-ink text-paper">
                  <IconClose width={17} height={17} />
                </span>
                <Eyebrow>What I don't claim</Eyebrow>
              </div>
              <p className="mt-4 text-[14.5px] leading-relaxed text-mute">
                Equally important. If your project needs one of these, I'll say so early and either
                bring in the right person or point you somewhere better.
              </p>
              <ul className="mt-5 grid gap-2.5">
                {notClaiming.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-[14px] text-ink-700">
                    <span className="mt-[7px] h-1 w-3 shrink-0 rounded-full bg-rust/60" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* services mapping */}
      <section className="border-t border-line bg-ink py-18 text-paper md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <SectionHead
            tone="light"
            align="between"
            eyebrow="Skills to services"
            no="03"
            title={
              <>
                Which stack for
                <br />
                which service?
              </>
            }
            lead="A quick map so you know what a given service is likely to be built with."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={i * 60}>
                <div className="group h-full rounded-xl border border-white/12 bg-white/[0.03] p-6 transition-all duration-400 hover:-translate-y-1 hover:border-ember/60">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-[0.18em] text-ember-soft">
                      {s.no}
                    </span>
                    <span className="font-mono text-[9.5px] tracking-[0.14em] text-paper-3/40 uppercase">
                      {s.timeline}
                    </span>
                  </div>
                  <h3 className="font-display mt-3 text-[1.3rem] leading-tight font-bold tracking-[-0.025em] text-paper transition-colors group-hover:text-ember-soft">
                    {s.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {(s.id === "react-development"
                      ? ["React.js", "JavaScript", "REST API", "CSS3"]
                      : s.id === "business-website"
                        ? ["PHP", "MySQL", "Bootstrap 5", "JavaScript"]
                        : s.id === "laravel-development"
                          ? ["Laravel", "PHP 8", "MySQL", "Blade"]
                          : s.id === "admin-dashboard"
                            ? ["Laravel", "MySQL", "Chart.js", "Bootstrap"]
                            : s.id === "api-integration"
                              ? ["REST API", "PHP", "Laravel", "Postman"]
                              : ["PHP", "Laravel", "MySQL", "cPanel"]
                    ).map((t) => (
                      <Chip key={t} tone="light">
                        {t}
                      </Chip>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t border-white/12 pt-8">
              <p className="max-w-xl text-[14.5px] leading-relaxed text-paper-3/70">
                {projects.length} of these projects are documented end to end — including the
                database schema decisions and what broke along the way.
              </p>
              <div className="flex flex-wrap gap-3">
                <Btn to="/projects" variant="light">
                  See the work
                </Btn>
                <Btn to="/contact" variant="ghost" className="border-white/25 text-paper hover:border-ember hover:bg-ember">
                  Ask about your stack
                </Btn>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand
        title={["NEED A SPECIFIC", "TECHNOLOGY?"]}
        lead="If your requirement sits outside this list, tell me anyway — I'd rather say 'that's not me' on day one than halfway through your budget."
        primary="Contact Me"
        secondary={{ label: "See process", to: "/process" }}
      />
    </>
  );
}
