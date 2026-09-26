import { Link, useParams } from "react-router-dom";
import { CTABand, PageHero } from "@/components/Chrome";
import { BrowserFrame, Btn, Chip, Eyebrow, Reveal, cn } from "@/components/ui";
import {
  IconArrowRight,
  IconCheck,
  IconDatabase,
  IconSite,
  IconTerminal,
} from "@/components/Icons";
import { projects } from "@/lib/data";

const contents = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "The Challenge" },
  { id: "solution", label: "The Solution" },
  { id: "features", label: "Key Features" },
  { id: "development", label: "Development" },
  { id: "result", label: "Result" },
];

export default function CaseStudy() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);

  if (index === -1) {
    return (
      <section className="mx-auto flex min-h-[70vh] max-w-[1400px] flex-col items-start justify-center px-5 py-32 md:px-8">
        <Eyebrow no="404">Project not found</Eyebrow>
        <h1 className="font-display mt-5 text-[clamp(2.4rem,7vw,4.5rem)] leading-none font-extrabold tracking-[-0.04em] text-ink">
          That case study
          <br />
          doesn't exist.
        </h1>
        <p className="mt-5 max-w-md text-[15px] text-mute">
          The link may be old, or the project isn't published here. All current work is on the
          projects page.
        </p>
        <div className="mt-8 flex gap-3">
          <Btn to="/projects">All projects</Btn>
          <Btn to="/contact" variant="ghost">
            Contact me
          </Btn>
        </div>
      </section>
    );
  }

  const p = projects[index];
  const next = projects[(index + 1) % projects.length];
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const titleLines = p.name.length > 18 ? [p.name.split(" ").slice(0, -1).join(" "), p.name.split(" ").slice(-1)[0]] : [p.name];

  const devBlocks = [
    { icon: IconSite, title: "Frontend", body: p.development.frontend },
    { icon: IconTerminal, title: "Backend", body: p.development.backend },
    { icon: IconDatabase, title: "Database", body: p.development.database },
  ];

  return (
    <>
      <PageHero
        eyebrow={`Case study · ${p.categoryLabel}`}
        no={`0${index + 1}`}
        title={[...titleLines, "."]}
        lead={p.summary}
        meta={[
          { label: "Client", value: p.client },
          { label: "Industry", value: p.industry },
          { label: "Project type", value: p.categoryLabel },
          { label: "Duration", value: p.duration },
          { label: "Year", value: p.year },
        ]}
      >
        <Reveal delay={400}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Btn to={`/contact?project=${p.slug}`}>Start something similar</Btn>
            <Btn to="/projects" variant="light" icon={false}>
              All projects
            </Btn>
            <span className="ml-auto hidden font-mono text-[10px] tracking-[0.18em] text-paper-3/45 uppercase sm:block">
              {p.domain}
            </span>
          </div>
        </Reveal>
      </PageHero>

      {/* hero visual */}
      <section className="mx-auto max-w-[1400px] px-5 py-14 md:px-8 md:py-18">
        <Reveal>
          <BrowserFrame src={p.image} alt={`${p.name} — ${p.client}`} domain={p.domain} />
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {p.highlights.map((h) => (
              <div
                key={h.label}
                className="group rounded-xl border border-ink/12 bg-paper p-5 transition-all duration-400 hover:-translate-y-1 hover:border-ember"
              >
                <span className="font-display block text-[2rem] leading-none font-extrabold tracking-[-0.03em] text-ink transition-colors duration-300 group-hover:text-ember">
                  {h.value}
                </span>
                <span className="mt-2 block font-mono text-[9.5px] tracking-[0.16em] text-mute uppercase">
                  {h.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* body */}
      <section className="border-y border-line bg-paper-2/60 py-16 md:py-20">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 md:px-8 lg:grid-cols-[240px_1fr] lg:gap-16">
          {/* sticky contents */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>Contents</Eyebrow>
            <nav className="mt-4 flex flex-col border-l border-line">
              {contents.map((c, i) => (
                <a
                  key={c.id}
                  href={`#${c.id}`}
                  className="group -ml-px flex items-baseline gap-3 border-l-2 border-transparent py-2.5 pl-4 transition-all duration-300 hover:border-ember hover:pl-5"
                >
                  <span className="font-mono text-[9.5px] text-mute group-hover:text-ember">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[13.5px] text-ink-700 transition-colors group-hover:text-ember">
                    {c.label}
                  </span>
                </a>
              ))}
            </nav>
            <div className="mt-8 rounded-xl border border-ink/12 bg-paper p-4">
              <Eyebrow>Technology</Eyebrow>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </div>
          </aside>

          <div className="max-w-3xl">
            {/* overview */}
            <Section id="overview" eyebrow="Project overview" no="01" title="The brief">
              <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
                {[
                  { label: "Client", value: p.client },
                  { label: "Industry", value: p.industry },
                  { label: "Project type", value: p.categoryLabel },
                  { label: "Duration", value: p.duration },
                  { label: "Year", value: p.year },
                  { label: "Technology", value: p.tech.slice(0, 4).join(", ") },
                ].map((row) => (
                  <div key={row.label} className="border-b border-line pb-3">
                    <dt className="font-mono text-[9.5px] tracking-[0.18em] text-mute uppercase">
                      {row.label}
                    </dt>
                    <dd className="mt-1 text-[15px] font-medium text-ink">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </Section>

            {/* challenge */}
            <Section id="challenge" eyebrow="The challenge" no="02" title="What was going wrong">
              <p className="text-[16px] leading-relaxed text-ink-700 text-pretty">{p.problem}</p>
            </Section>

            {/* solution */}
            <Section id="solution" eyebrow="The solution" no="03" title="What I built instead">
              <p className="text-[16px] leading-relaxed text-ink-700 text-pretty">{p.solution}</p>
            </Section>

            {/* features */}
            <Section id="features" eyebrow="Key features" no="04" title="Everything that shipped">
              <ul className="grid gap-3 sm:grid-cols-2">
                {p.features.map((f, i) => (
                  <li
                    key={f}
                    className="group flex items-start gap-3 rounded-lg border border-ink/10 bg-paper p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-ember"
                  >
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-teal/12 text-teal transition-colors duration-300 group-hover:bg-ember group-hover:text-white">
                      <IconCheck width={12} height={12} />
                    </span>
                    <span>
                      <span className="block text-[14px] leading-snug font-medium text-ink">{f}</span>
                      <span className="mt-1 block font-mono text-[9px] tracking-[0.14em] text-mute uppercase">
                        Feature {String(i + 1).padStart(2, "0")}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </Section>

            {/* development */}
            <Section id="development" eyebrow="Development" no="05" title="How it was built">
              <div className="grid gap-4">
                {devBlocks.map((d, i) => {
                  const Icon = d.icon;
                  return (
                    <div
                      key={d.title}
                      className="group flex gap-5 rounded-xl border border-ink/12 bg-paper p-5 transition-all duration-400 hover:border-ink md:p-6"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-ink text-ember transition-all duration-400 group-hover:rotate-6 group-hover:bg-ember group-hover:text-white">
                        <Icon width={19} height={19} />
                      </span>
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="font-display text-[1.2rem] font-bold tracking-[-0.02em] text-ink">
                            {d.title}
                          </h3>
                          <span className="font-mono text-[9px] tracking-[0.16em] text-mute uppercase">
                            0{i + 1}
                          </span>
                        </div>
                        <p className="mt-2 text-[14px] leading-relaxed text-mute">{d.body}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </Section>

            {/* result */}
            <Section id="result" eyebrow="Result" no="06" title="What changed after launch">
              <div className="relative overflow-hidden rounded-2xl border border-ember/30 bg-ember/[0.07] p-6 md:p-8">
                <div
                  aria-hidden
                  className="animate-drift pointer-events-none absolute -top-16 -right-10 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(240,78,35,0.3),transparent_65%)] blur-[45px]"
                />
                <p className="relative text-[16.5px] leading-relaxed font-medium text-ink text-pretty md:text-[18px]">
                  {p.result}
                </p>
                <p className="relative mt-5 border-t border-ember/25 pt-4 font-mono text-[10px] tracking-[0.16em] text-rust uppercase">
                  Stated without invented metrics — only what the build actually delivers.
                </p>
              </div>
            </Section>
          </div>
        </div>
      </section>

      {/* next / prev */}
      <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-8">
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { dir: "Previous project", p: prev, align: "left" as const },
            { dir: "Next project", p: next, align: "right" as const },
          ].map((n) => (
            <Link
              key={n.dir}
              to={`/projects/${n.p.slug}`}
              className={cn(
                "group flex items-center gap-5 rounded-2xl border border-ink/12 bg-paper p-5 transition-all duration-400 hover:-translate-y-1 hover:border-ember",
                n.align === "right" && "sm:flex-row-reverse sm:text-right",
              )}
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-ink text-ember transition-all duration-400 group-hover:bg-ember group-hover:text-white">
                <IconArrowRight
                  width={18}
                  height={18}
                  className={cn(
                    "transition-transform duration-400 group-hover:translate-x-1",
                    n.align === "left" && "rotate-180 group-hover:-translate-x-1",
                  )}
                />
              </span>
              <span className="min-w-0">
                <span className="block font-mono text-[9.5px] tracking-[0.16em] text-mute uppercase">
                  {n.dir}
                </span>
                <span className="font-display mt-1 block truncate text-[1.3rem] font-bold tracking-[-0.025em] text-ink transition-colors group-hover:text-ember">
                  {n.p.name}
                </span>
                <span className="mt-1 block font-mono text-[9.5px] tracking-[0.14em] text-mute uppercase">
                  {n.p.categoryLabel}
                </span>
              </span>
            </Link>
          ))}
        </div>

        <Reveal delay={80}>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-ink/12 bg-paper-2/70 p-6">
            <div>
              <Eyebrow>Like this project?</Eyebrow>
              <p className="font-display mt-2 text-[1.4rem] leading-tight font-bold tracking-[-0.025em] text-ink">
                I can build the same structure for your business.
              </p>
            </div>
            <Btn to={`/contact?project=${p.slug}`}>Enquire about this</Btn>
          </div>
        </Reveal>
      </section>

      <CTABand
        title={["HAVE SOMETHING", "SIMILAR IN MIND?"]}
        lead="Tell me the workflow you want to move off paper, spreadsheets or phone calls. I'll tell you what it takes to build it properly."
        primary="Start a Project"
        secondary={{ label: "Back to projects", to: "/projects" }}
      />
    </>
  );
}

function Section({
  id,
  eyebrow,
  no,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  no: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div id={id} className="scroll-mt-28 border-t border-line py-10 first:border-t-0 first:pt-0">
      <Reveal>
        <Eyebrow no={no}>{eyebrow}</Eyebrow>
        <h2 className="font-display mt-3 text-[clamp(1.7rem,3.6vw,2.5rem)] leading-[1.03] font-extrabold tracking-[-0.035em] text-ink">
          {title}
        </h2>
      </Reveal>
      <Reveal delay={90}>
        <div className="mt-6">{children}</div>
      </Reveal>
    </div>
  );
}
