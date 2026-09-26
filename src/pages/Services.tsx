import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CTABand, PageHero } from "@/components/Chrome";
import {
  Btn,
  CheckList,
  Chip,
  Eyebrow,
  Reveal,
  SectionHead,
  SpotCard,
  cn,
} from "@/components/ui";
import { IconArrowRight, IconMinus, IconPlus, serviceIcons } from "@/components/Icons";
import { services } from "@/lib/data";

const engagementModels = [
  {
    title: "Fixed-scope project",
    best: "New website or application",
    body: "We agree the page list, features and timeline in writing. Fixed price, milestone payments, defined delivery date. Best when you know what you need built.",
    points: ["Written scope before start", "Milestone payments", "Staging link from week 1", "Handover + training"],
  },
  {
    title: "Monthly maintenance",
    best: "Existing website",
    body: "A fixed number of hours each month for updates, fixes, backups and small improvements. No re-quoting every time something small breaks.",
    points: ["Priority on bugs", "Content & image updates", "Security + database checks", "Monthly summary report"],
  },
  {
    title: "Per-task / hourly",
    best: "One-off changes",
    body: "A single bug, a payment gateway, a new report screen or a rescue job on a site built by someone else. Quoted per task before work begins.",
    points: ["Quote before work starts", "No long-term commitment", "Good for audits", "Fast turnaround"],
  },
];

const defaults = [
  "Mobile-first responsive layout tested on real screen sizes",
  "Server-side validation on every form",
  "Basic on-page SEO: titles, meta, alt text, sitemap",
  "Speed pass: compressed images, lazy loading, minified assets",
  "SSL setup and domain configuration at launch",
  "Deployment to your hosting or cPanel account",
  "Full source code, database and credentials handed over",
  "A walkthrough of the admin panel for your team",
  "Post-launch support window for initial issues",
];

const faqs = [
  {
    q: "Can you work on a website someone else built?",
    a: "Yes. I take over existing PHP, Laravel and Bootstrap codebases regularly. I start with a short audit — code structure, database, security, speed — and tell you honestly whether fixing it is cheaper than rebuilding. Sometimes the answer is rebuild, sometimes it isn't.",
  },
  {
    q: "Do you design as well as develop?",
    a: "I build clean, modern interfaces using Bootstrap 5 and custom CSS, and I can work from a design file you already have. If you need a full brand identity or an illustration-heavy design, I'll tell you upfront and we can bring a designer in.",
  },
  {
    q: "Who owns the code and the hosting?",
    a: "You do, completely. Domain, hosting, database, repositories and every credential are in your name and handed over at launch. I don't keep your site hostage to my own account.",
  },
  {
    q: "What do you need from me to start?",
    a: "Requirements, content (text, logo, images) or permission to use placeholders, and access to the domain/hosting when we deploy. The faster feedback comes at each review point, the faster the project finishes.",
  },
  {
    q: "Can you add features later?",
    a: "That's the point of building it properly. Laravel's structure and a normalised database mean new modules — reports, roles, integrations — can be added without rewriting what exists.",
  },
  {
    q: "Do you sign NDAs or work with agencies?",
    a: "Yes to both. I've worked on internal business tools where confidentiality matters, and I'm comfortable being the development resource behind an agency's client work.",
  },
];

export default function Services() {
  const { hash } = useLocation();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const t = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
    return () => window.clearTimeout(t);
  }, [hash]);

  return (
    <>
      <PageHero
        eyebrow="Services"
        no="02"
        title={["WHAT I CAN BUILD", "FOR YOUR BUSINESS"]}
        lead="Six services, each with a defined scope and realistic timeline. If your requirement sits between two of them, that's normal — most real projects do."
        meta={[
          { label: "Typical timeline", value: "1–8 weeks" },
          { label: "Engagement", value: "Fixed / Monthly / Task" },
          { label: "Core stack", value: "PHP · Laravel · React" },
          { label: "Handover", value: "Full code + credentials" },
          { label: "Support", value: "After launch, included" },
        ]}
      />

      {/* sticky service index */}
      <div className="sticky top-[68px] z-30 border-b border-line bg-paper/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1400px] gap-2 overflow-x-auto px-5 py-3 md:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {services.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="group flex shrink-0 items-center gap-2 rounded-full border border-ink/12 bg-paper px-3.5 py-1.5 font-mono text-[10px] tracking-[0.14em] text-ink-700 uppercase transition-all duration-300 hover:border-ember hover:bg-ember hover:text-white"
            >
              <span className="text-ember transition-colors group-hover:text-white">{s.no}</span>
              {s.title}
            </a>
          ))}
        </div>
      </div>

      {/* ------------------------------ service list ----------------------------- */}
      <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-20">
        <div className="space-y-6">
          {services.map((s, i) => {
            const Icon = serviceIcons[s.icon];
            const flip = i % 2 === 1;
            return (
              <Reveal key={s.id} delay={40}>
                <SpotCard
                  id={s.id}
                  className={cn(
                    "grid gap-8 rounded-2xl border border-ink/12 bg-paper p-6 md:p-9 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14",
                  )}
                >
                  <div className={cn("relative", flip && "lg:order-2")}>
                    <div className="flex items-start gap-4">
                      <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-ink text-ember transition-all duration-500 group-hover:rotate-6 group-hover:bg-ember group-hover:text-white">
                        <Icon width={25} height={25} />
                      </span>
                      <div>
                        <span className="font-mono text-[10.5px] tracking-[0.2em] text-mute uppercase">
                          Service {s.no}
                        </span>
                        <h2 className="font-display mt-1.5 text-[clamp(1.7rem,3.4vw,2.6rem)] leading-[1.02] font-extrabold tracking-[-0.035em] text-ink">
                          {s.title}
                        </h2>
                      </div>
                    </div>
                    <p className="mt-6 text-[15.5px] leading-relaxed text-ink-700 text-pretty">
                      {s.blurb}
                    </p>
                    <div className="mt-7 grid gap-4 border-t border-line pt-6 sm:grid-cols-2">
                      <div>
                        <Eyebrow>Best for</Eyebrow>
                        <p className="mt-2 text-[13.5px] leading-snug text-ink-700">{s.bestFor}</p>
                      </div>
                      <div>
                        <Eyebrow>Typical timeline</Eyebrow>
                        <p className="mt-2 text-[13.5px] leading-snug text-ink-700">{s.timeline}</p>
                      </div>
                    </div>
                    <div className="mt-7 flex flex-wrap items-center gap-3">
                      <Btn to="/contact">Discuss this service</Btn>
                      <Btn to="/projects" variant="ghost" icon={false}>
                        Related work
                      </Btn>
                    </div>
                  </div>

                  <div
                    className={cn(
                      "rounded-xl border border-ink/10 bg-paper-2/60 p-6 md:p-7",
                      flip && "lg:order-1",
                    )}
                  >
                    <Eyebrow no="✓">What's included</Eyebrow>
                    <CheckList items={s.deliverables} className="mt-5 sm:grid-cols-2" />
                    <div className="mt-7 flex flex-wrap gap-2 border-t border-line pt-5">
                      <Chip>MySQL</Chip>
                      <Chip>Responsive</Chip>
                      <Chip>Validation</Chip>
                      <Chip>Handover</Chip>
                    </div>
                  </div>
                </SpotCard>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* --------------------------- template vs custom -------------------------- */}
      <section className="border-y border-line bg-ink py-20 text-paper md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <SectionHead
            tone="light"
            align="between"
            eyebrow="Choosing an approach"
            no="03"
            title={
              <>
                Template site
                <br />
                or custom build?
              </>
            }
            lead="Neither is wrong. Picking the wrong one for your situation is what costs money — here's how I'd decide."
          />
          <div className="grid gap-4 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-white/12 bg-white/[0.03] p-7">
                <Eyebrow tone="light">Option A</Eyebrow>
                <h3 className="font-display mt-3 text-[1.9rem] leading-none font-extrabold tracking-[-0.03em]">
                  Template / brochure site
                </h3>
                <p className="mt-4 text-[14.5px] leading-relaxed text-paper-3/70">
                  Fast, affordable, perfectly good when your pages are mostly information and the
                  only interaction is a contact form.
                </p>
                <ul className="mt-6 space-y-2.5">
                  {[
                    "You need an online presence quickly",
                    "Content changes rarely",
                    "No logins, roles or private data",
                    "Budget is the deciding constraint",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2.5 text-[14px] text-paper-3/80">
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-teal-2" />
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-2 border-t border-white/12 pt-5">
                  <Chip tone="light">1–2 weeks</Chip>
                  <Chip tone="light">Lower cost</Chip>
                  <Chip tone="light">Static content</Chip>
                </div>
              </div>
            </Reveal>
            <Reveal delay={110}>
              <div className="relative h-full overflow-hidden rounded-2xl border border-ember/35 bg-ember/[0.08] p-7">
                <div
                  aria-hidden
                  className="animate-drift pointer-events-none absolute -top-24 -right-16 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(240,78,35,0.35),transparent_65%)] blur-[50px]"
                />
                <Eyebrow tone="light">Option B</Eyebrow>
                <h3 className="font-display relative mt-3 text-[1.9rem] leading-none font-extrabold tracking-[-0.03em]">
                  Custom Laravel / React build
                </h3>
                <p className="relative mt-4 text-[14.5px] leading-relaxed text-paper-3/80">
                  Costs more upfront, saves far more later — because the software matches how your
                  business actually operates.
                </p>
                <ul className="relative mt-6 space-y-2.5">
                  {[
                    "Multiple users with different permissions",
                    "Data with a lifecycle: enquiry → order → paid",
                    "Reports, exports or recurring calculations",
                    "Integration with payments, SMS, WhatsApp or a CRM",
                    "Something that must keep growing after launch",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2.5 text-[14px] text-paper-3/90">
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-ember" />
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="relative mt-7 flex flex-wrap gap-2 border-t border-white/15 pt-5">
                  <Chip tone="light">3–8 weeks</Chip>
                  <Chip tone="light">Scoped per project</Chip>
                  <Chip tone="light">Extensible</Chip>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------ engagement ------------------------------- */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
        <SectionHead
          align="between"
          eyebrow="Ways to work together"
          no="04"
          title={
            <>
              Three engagement
              <br />
              models.
            </>
          }
          lead="Pick the one that matches your situation — you can move between them later."
          action={
            <Btn to="/pricing" variant="ghost" className="mt-6">
              See starting prices
            </Btn>
          }
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {engagementModels.map((m, i) => (
            <Reveal key={m.title} delay={i * 90}>
              <SpotCard className="group h-full rounded-2xl border border-ink/12 bg-paper p-7">
                <div className="flex items-center justify-between">
                  <span className="font-display text-[2.2rem] leading-none font-extrabold text-ink/10 transition-colors duration-500 group-hover:text-ember/40">
                    0{i + 1}
                  </span>
                  <span className="rounded-full border border-ink/12 px-3 py-1 font-mono text-[9.5px] tracking-[0.14em] text-mute uppercase">
                    {m.best}
                  </span>
                </div>
                <h3 className="font-display mt-5 text-[1.5rem] leading-tight font-bold tracking-[-0.025em] text-ink">
                  {m.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-mute">{m.body}</p>
                <ul className="mt-6 space-y-2 border-t border-line pt-5">
                  {m.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-[13.5px] text-ink-700">
                      <IconArrowRight width={13} height={13} className="shrink-0 text-ember" />
                      {p}
                    </li>
                  ))}
                </ul>
              </SpotCard>
            </Reveal>
          ))}
        </div>

        {/* defaults */}
        <Reveal delay={120}>
          <div className="mt-6 grid gap-8 rounded-2xl border border-ink/12 bg-paper-2/60 p-7 md:p-9 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Eyebrow no="✓">Every project, by default</Eyebrow>
              <h3 className="font-display mt-4 text-[clamp(1.6rem,3vw,2.2rem)] leading-tight font-extrabold tracking-[-0.03em] text-ink">
                Included whether
                <br />
                you ask or not.
              </h3>
              <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-mute">
                These aren't upsells. They're the baseline that keeps a website working a year
                after launch.
              </p>
            </div>
            <CheckList items={defaults} className="sm:grid-cols-2" />
          </div>
        </Reveal>
      </section>

      {/* ---------------------------------- FAQ ---------------------------------- */}
      <section className="border-t border-line bg-paper-2/70 py-20 md:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 md:px-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHead
              eyebrow="Questions"
              no="05"
              title={
                <>
                  Before you
                  <br />
                  ask.
                </>
              }
              lead="The six questions that come up in almost every first conversation."
            />
            <Btn to="/contact" variant="ink">
              Ask something else
            </Btn>
          </div>

          <div className="divide-y divide-line border-y border-line">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    aria-expanded={open}
                    className="group flex w-full items-start gap-5 py-6 text-left"
                  >
                    <span className="mt-1 font-mono text-[10.5px] tracking-[0.14em] text-ember">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={cn(
                        "font-display flex-1 text-[1.15rem] leading-snug font-bold tracking-[-0.02em] transition-colors duration-300 md:text-[1.35rem]",
                        open ? "text-ember" : "text-ink group-hover:text-ember",
                      )}
                    >
                      {f.q}
                    </span>
                    <span
                      className={cn(
                        "mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-all duration-400",
                        open
                          ? "rotate-180 border-ember bg-ember text-white"
                          : "border-ink/20 text-ink group-hover:border-ember group-hover:text-ember",
                      )}
                    >
                      {open ? <IconMinus width={13} height={13} /> : <IconPlus width={13} height={13} />}
                    </span>
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pb-7 pl-11 text-[14.5px] leading-relaxed text-mute text-pretty">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABand
        title={["NOT SURE WHICH", "SERVICE FITS?"]}
        lead="Describe what your business needs the software to do. I'll tell you which of these it is, roughly how long it takes and what it starts at."
        primary="Get a Free Scope"
        secondary={{ label: "See projects", to: "/projects" }}
      />
    </>
  );
}
