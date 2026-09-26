import { CTABand, PageHero } from "@/components/Chrome";
import {
  BrowserFrame,
  Btn,
  Chip,
  Counter,
  Eyebrow,
  Reveal,
  SectionHead,
  SpotCard,
  TextLink,
} from "@/components/ui";
import {
  IconArrowUpRight,
  IconClose,
  IconCheck,
  IconDatabase,
  IconTerminal,
} from "@/components/Icons";
import { profile, timeline, values, skillGroups, projects } from "@/lib/data";
import { useInView } from "@/lib/hooks";
import { cn } from "@/components/ui";

const notOnThisPage = [
  "Father's name",
  "Date of birth",
  "Full home address",
  "Aadhaar / PAN number",
  "Marital status",
  "Religion",
  "Expected or previous salary",
];

const insteadOnThisPage = [
  "What I build and for whom",
  "Real project case studies with problems and outcomes",
  "The technologies I use every working day",
  "How a project runs from first call to launch",
  "Honest starting prices and timelines",
  "A direct way to contact me",
];

const quickFacts = [
  { k: "Based in", v: "India · remote worldwide" },
  { k: "Focus", v: "Business sites, Laravel apps, dashboards" },
  { k: "Stack", v: "PHP, Laravel, React.js, MySQL" },
  { k: "Education", v: "MCA — Computer Science" },
  { k: "Working with", v: "Direct clients & small teams" },
  { k: "Languages", v: "English, Hindi" },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        no="01"
        title={["ABOUT ME", "."]}
        lead={`I'm ${profile.name}, a ${profile.role} with 3+ years of experience in web development. I build responsive business websites, custom web applications, admin dashboards and API-integrated solutions — and I care about what happens to the code after launch.`}
        meta={[
          { label: "Experience", value: "3+ years" },
          { label: "Core stack", value: "PHP · Laravel" },
          { label: "Frontend", value: "React.js · Bootstrap" },
          { label: "Database", value: "MySQL" },
          { label: "Location", value: profile.location },
        ]}
      />

      {/* ------------------------------- narrative ------------------------------ */}
      <section className="mx-auto max-w-[1400px] px-5 py-18 md:px-8 md:py-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div>
            <Reveal>
              <BrowserFrame
                src="https://images.pexels.com/photos/34803994/pexels-photo-34803994.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200"
                alt="Laptop with code on a wooden desk in a dim workspace"
                domain="~/anash/workspace — laravel + react"
              />
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-6 grid grid-cols-3 gap-4 border-t border-line pt-6">
                <Counter value={3} suffix="+" label="Years in production web dev" />
                <Counter value={projects.length} suffix="" label="Detailed case studies here" />
                <Counter value={6} suffix="" label="Services offered to clients" />
              </div>
            </Reveal>

            <Reveal delay={180}>
              <dl className="mt-8 divide-y divide-line border-y border-line">
                {quickFacts.map((f) => (
                  <div
                    key={f.k}
                    className="group flex items-baseline justify-between gap-6 py-3 transition-colors hover:bg-paper-2/60"
                  >
                    <dt className="font-mono text-[10px] tracking-[0.16em] text-mute uppercase">
                      {f.k}
                    </dt>
                    <dd className="text-right text-[14px] font-medium text-ink transition-transform duration-300 group-hover:-translate-x-1">
                      {f.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="lg:pt-2">
            <SectionHead
              eyebrow="The short version"
              no="02"
              title={
                <>
                  I write software
                  <br />
                  for businesses,
                  <br />
                  not for demos.
                </>
              }
            />

            <div className="space-y-5 text-[15.5px] leading-relaxed text-ink-700 text-pretty">
              <Reveal delay={60}>
                <p>
                  I started with HTML, CSS and small PHP scripts, then moved into Laravel once I
                  realised that the interesting problems — logins, permissions, reports, data that
                  grows — need real structure. Today most of my work sits between two worlds: a{" "}
                  <span className="font-semibold text-ink">public-facing website</span> that brings
                  enquiries, and a{" "}
                  <span className="font-semibold text-ink">private dashboard</span> that runs the
                  day-to-day operations behind it.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <p>
                  Over the last three years I've built clinic websites, a property listing portal,
                  a restaurant order dashboard, a React storefront on top of an existing REST API,
                  and an internal document management system used daily by an operations team. The
                  common thread: a business had a workflow living in spreadsheets, registers or
                  phone calls, and it needed to live in software instead.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <p>
                  I work with direct clients and small teams, so communication is direct too — you
                  talk to the person writing the code. I'd rather tell you on day two that a
                  feature is more expensive than you think, than tell you on delivery day that it
                  isn't possible.
                </p>
              </Reveal>
            </div>

            <Reveal delay={240}>
              <div className="mt-9 rounded-xl border border-ink/12 bg-paper-2/60 p-6">
                <Eyebrow>Currently working with</Eyebrow>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "Laravel 10 / 11",
                    "PHP 8.x",
                    "React.js (Vite)",
                    "MySQL 8",
                    "Bootstrap 5",
                    "REST APIs",
                    "Chart.js",
                    "Git & GitHub",
                    "cPanel deployment",
                  ].map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-5 border-t border-line pt-5">
                  <TextLink to="/skills" className="text-ink hover:text-ember">
                    Full skill breakdown
                  </TextLink>
                  <TextLink to="/projects" className="text-ink hover:text-ember">
                    See the work
                  </TextLink>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------- timeline ------------------------------- */}
      <section className="relative border-y border-line bg-ink py-20 text-paper md:py-28">
        <div aria-hidden className="blueprint-dark pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-[1400px] px-5 md:px-8">
          <SectionHead
            tone="light"
            eyebrow="Experience & education"
            no="03"
            title={
              <>
                Where the three
                <br />
                years went.
              </>
            }
            lead="Two years of study, three years of production work. No padded job titles, no invented clients."
          />

          <Timeline />
        </div>
      </section>

      {/* -------------------------------- values -------------------------------- */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
        <SectionHead
          align="between"
          eyebrow="How I work"
          no="04"
          title={
            <>
              Six things I
              <br />
              don't compromise on.
            </>
          }
          lead="These are the same points clients raise afterwards, which is why they're written down before we start."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 70}>
              <SpotCard className="h-full rounded-xl border border-ink/12 bg-paper p-6">
                <span className="font-display text-[1.1rem] font-extrabold text-ember">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display mt-3 text-[1.25rem] leading-tight font-bold tracking-[-0.02em] text-ink">
                  {v.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-mute">{v.body}</p>
              </SpotCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* -------------------------- portfolio vs resume ------------------------- */}
      <section className="border-t border-line bg-paper-2/70 py-20 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div>
              <Reveal>
                <Eyebrow no="05">A note on this page</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="font-display mt-4 text-[clamp(1.9rem,4.2vw,3rem)] leading-[0.98] font-extrabold tracking-[-0.035em] text-ink">
                  This is a work
                  <br />
                  portfolio —
                  <br />
                  <span className="text-ember">not a CV.</span>
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-6 max-w-md text-[15px] leading-relaxed text-mute">
                  Clients don't need personal details to decide whether I can build their website.
                  They need to see the work, understand the process and know how to reach me. So
                  this site deliberately leaves the resume fields out.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <Btn to="/contact" className="mt-8">
                  Talk about your project
                </Btn>
              </Reveal>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Reveal delay={100}>
                <div className="h-full rounded-xl border border-ink/12 bg-paper p-6">
                  <div className="flex items-center gap-2.5">
                    <span className="grid h-8 w-8 place-items-center rounded-md bg-ink/8 text-ink-700">
                      <IconClose width={15} height={15} />
                    </span>
                    <h3 className="font-mono text-[10.5px] tracking-[0.16em] text-ink-700 uppercase">
                      Left off on purpose
                    </h3>
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {notOnThisPage.map((n) => (
                      <li key={n} className="flex items-center gap-2.5 text-[13.5px] text-mute">
                        <span className="h-px w-3 bg-ink/30" />
                        <span className="line-through decoration-ink/25">{n}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={180}>
                <div className="h-full rounded-xl border border-ember/25 bg-ember/[0.06] p-6">
                  <div className="flex items-center gap-2.5">
                    <span className="grid h-8 w-8 place-items-center rounded-md bg-ember text-white">
                      <IconCheck width={15} height={15} />
                    </span>
                    <h3 className="font-mono text-[10.5px] tracking-[0.16em] text-ink uppercase">
                      Here instead
                    </h3>
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {insteadOnThisPage.map((n) => (
                      <li key={n} className="flex items-start gap-2.5 text-[13.5px] text-ink-700">
                        <IconCheck width={13} height={13} className="mt-1 shrink-0 text-ember" />
                        {n}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------ skill teaser ---------------------------- */}
      <section className="mx-auto max-w-[1400px] px-5 py-18 md:px-8 md:py-24">
        <SectionHead
          align="between"
          eyebrow="Skills"
          no="06"
          title={
            <>
              The stack,
              <br />
              grouped honestly.
            </>
          }
          lead="No percentage bars — nobody can prove 'PHP 95%'. Just the tools I use, grouped by where they're used."
          action={
            <Btn to="/skills" variant="ghost" className="mt-6">
              Skills page
            </Btn>
          }
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 80}>
              <div className="group h-full rounded-xl border border-ink/12 bg-paper p-6 transition-all duration-400 hover:-translate-y-1.5 hover:border-ink">
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-ink text-ember transition-colors duration-400 group-hover:bg-ember group-hover:text-white">
                    {i === 0 ? (
                      <IconTerminal width={18} height={18} />
                    ) : i === 1 ? (
                      <IconArrowUpRight width={18} height={18} />
                    ) : i === 2 ? (
                      <IconDatabase width={18} height={18} />
                    ) : (
                      <IconCheck width={18} height={18} />
                    )}
                  </span>
                  <span className="font-mono text-[10px] text-mute">{g.items.length} tools</span>
                </div>
                <h3 className="font-display mt-5 text-[1.3rem] font-bold tracking-[-0.02em] text-ink">
                  {g.title}
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-mute">{g.note}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {g.items.slice(0, 4).map((it) => (
                    <Chip key={it.name}>{it.name}</Chip>
                  ))}
                  {g.items.length > 4 && <Chip>+{g.items.length - 4}</Chip>}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand
        title={["WANT THE LONG", "VERSION?"]}
        lead="Skip the CV. Send me your requirement and I'll tell you honestly whether it's a two-week website or a six-week application."
        primary="Contact Me"
        secondary={{ label: "Read case studies", to: "/projects" }}
      />
    </>
  );
}

/* --------------------------------- timeline -------------------------------- */

function Timeline() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.05 });
  return (
    <div ref={ref} className="relative mt-4 pl-8 md:pl-0">
      {/* vertical line */}
      <span
        aria-hidden
        className={cn(
          "absolute top-2 bottom-2 left-[7px] w-px bg-white/15 transition-all duration-1000 md:hidden",
          inView && "bg-white/30",
        )}
      />
      <div className="space-y-10 md:space-y-0">
        {timeline.map((t, i) => (
          <div
            key={t.title}
            className={cn(
              "reveal grid gap-6 md:grid-cols-[190px_1fr] md:gap-10 md:border-t md:border-white/12 md:py-9",
              inView && "is-in",
              i === 0 && "md:pt-0",
            )}
            style={{ ["--reveal-delay" as string]: `${i * 130}ms` }}
          >
            <div className="relative">
              <span className="absolute top-2 -left-8 h-3 w-3 rounded-full border-2 border-ember bg-ink md:hidden" />
              <span className="font-display block text-[1.5rem] leading-none font-extrabold tracking-[-0.02em] text-paper">
                {t.from}
                <span className="mx-2 text-ember">—</span>
                {t.to}
              </span>
              <span className="mt-2.5 inline-flex items-center gap-2 rounded-full border border-white/15 px-2.5 py-1 font-mono text-[9px] tracking-[0.16em] text-paper-3/60 uppercase">
                <span
                  className={cn(
                    "h-1.5 w-1.5 rounded-full",
                    t.type === "work" ? "bg-ember" : "bg-teal-2",
                  )}
                />
                {t.type === "work" ? "Work" : "Education"}
              </span>
            </div>

            <div>
              <h3 className="font-display text-[clamp(1.4rem,2.6vw,2rem)] leading-tight font-bold tracking-[-0.03em] text-paper">
                {t.title}
              </h3>
              <p className="mt-1.5 font-mono text-[11px] tracking-[0.16em] text-ember-soft uppercase">
                {t.org}
              </p>
              <ul className="mt-5 grid gap-2.5 md:grid-cols-2">
                {t.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5">
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-ember" />
                    <span className="text-[14px] leading-snug text-paper-3/75">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-white/12 pt-8">
        <Btn href={`mailto:${profile.email}`} variant="light">
          Request full CV
        </Btn>
        <p className="max-w-sm text-[13px] leading-relaxed text-paper-3/55">
          A detailed CV with references is available on request for full-time or contract roles.
        </p>
      </div>
    </div>
  );
}
