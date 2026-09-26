import { Link } from "react-router-dom";
import CodePanel from "@/components/CodePanel";
import { CTABand } from "@/components/Chrome";
import images from
"../images/images.jpeg";
import {
  BrowserFrame,
  Btn,
  Chip,
  Counter,
  Eyebrow,
  Marquee,
  Reveal,
  SectionHead,
  SpotCard,
  TextLink,
  cn,
} from "@/components/ui";
import {
  IconArrowRight,
  IconCheck,
  IconClock,
  IconLayers,
  serviceIcons,
} from "@/components/Icons";
import {
  heroStats,
  marqueeItems,
  profile,
  projects,
  services,
  trustPoints,
  whyMe,
} from "@/lib/data";

const heroCode = [
  "<?php",
  "// routes/web.php — anash.dev",
  "Route::get('/', [HomeController::class, 'index']);",
  "",
  "Route::middleware('auth')->group(function () {",
  "    Route::resource('projects', ProjectController::class);",
  "    Route::get('/dashboard', [DashboardController::class, 'index']);",
  "});",
  "",
  "// business problem in, working software out",
];

/* ------------------------------- photography ------------------------------- */

const photos = {
  dev: "https://images.pexels.com/photos/35140700/pexels-photo-35140700.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1100&w=880",
  workspace:
    "https://images.pexels.com/photos/34803969/pexels-photo-34803969.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
  wireframe:
    "https://images.pexels.com/photos/11813187/pexels-photo-11813187.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1000",
  night:
    "https://images.pexels.com/photos/34803973/pexels-photo-34803973.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
};

const industries: {
  name: string;
  built: string;
  img: string;
  slug: string;
  ratio: string;
  tilt: string;
  span: string;
  shift: string;
}[] = [
  {
    name: "Healthcare",
    built: "Dental Clinic Website",
    img: "https://images.pexels.com/photos/5355863/pexels-photo-5355863.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900",
    slug: "dental-clinic-website",
    ratio: "aspect-[4/3]",
    tilt: "-rotate-[2.4deg]",
    span: "lg:col-span-5",
    shift: "lg:mt-0",
  },
  {
    name: "Real Estate",
    built: "Property Listing Portal",
    img: "https://images.pexels.com/photos/37224965/pexels-photo-37224965.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=760",
    slug: "property-listing-portal",
    ratio: "aspect-[3/4]",
    tilt: "rotate-[1.8deg]",
    span: "lg:col-span-4",
    shift: "lg:mt-10",
  },
  {
    name: "Food & Hospitality",
    built: "Restaurant Order Dashboard",
    img: "https://images.pexels.com/photos/34206671/pexels-photo-34206671.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=700",
    slug: "restaurant-ordering-dashboard",
    ratio: "aspect-square",
    tilt: "-rotate-[1.2deg]",
    span: "lg:col-span-3",
    shift: "lg:-mt-4",
  },
  {
    name: "Legal Services",
    built: "Document Management Portal",
    img: "https://images.pexels.com/photos/8112113/pexels-photo-8112113.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=700",
    slug: "document-management-portal",
    ratio: "aspect-square",
    tilt: "rotate-[2.2deg]",
    span: "lg:col-span-3",
    shift: "lg:mt-6",
  },
  {
    name: "Retail",
    built: "React.js Storefront",
    img: "https://images.pexels.com/photos/5717973/pexels-photo-5717973.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900",
    slug: "react-storefront",
    ratio: "aspect-[4/3]",
    tilt: "-rotate-[1.8deg]",
    span: "lg:col-span-4",
    shift: "lg:-mt-10",
  },
  {
    name: "Fitness",
    built: "Gym Membership Dashboard",
    img: "https://images.pexels.com/photos/32610333/pexels-photo-32610333.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900",
    slug: "gym-membership-dashboard",
    ratio: "aspect-[4/3]",
    tilt: "rotate-[1.4deg]",
    span: "lg:col-span-5",
    shift: "lg:mt-4",
  },
];

/** Frames for the scrolling photo strip: every case study + three sectors. */
const filmStrip = [
  ...projects.map((p) => ({ img: p.image, label: p.name, slug: p.slug, tag: p.year })),
  ...industries.slice(0, 3).map((i) => ({
    img: i.img,
    label: i.name,
    slug: i.slug,
    tag: "sector",
  })),
];

const problems: { problem: string; solution: string; service: string; to: string }[] = [
  {
    problem: "\"Nobody can find us online.\"",
    solution:
      "A responsive business website with proper SEO structure, service pages, WhatsApp click-to-chat and Google Maps — so enquiries arrive without a phone call.",
    service: "Business Website",
    to: "business-website",
  },
  {
    problem: "\"Our records live in spreadsheets and registers.\"",
    solution:
      "A custom Laravel application with a searchable database, login roles and validation — the workflow moves into software instead of paper.",
    service: "Laravel Development",
    to: "laravel-development",
  },
  {
    problem: "\"I can't see today's numbers without asking someone.\"",
    solution:
      "An admin dashboard with reports, date filters, charts and exports. You open one screen in the morning instead of chasing three people.",
    service: "Admin Dashboard",
    to: "admin-dashboard",
  },
  {
    problem: "\"The site works but feels slow and dated.\"",
    solution:
      "A React.js frontend built on top of your existing API and database — an app-like experience without rebuilding what already works.",
    service: "React.js Development",
    to: "react-development",
  },
  {
    problem: "\"Nobody can fix it — the developer disappeared.\"",
    solution:
      "A maintenance takeover: audit the code, fix what's broken, secure it, set up backups and hand you a system someone can actually work on.",
    service: "Website Maintenance",
    to: "maintenance",
  },
];

const processRibbon = [
  { no: "01", label: "Discover" },
  { no: "02", label: "Plan" },
  { no: "03", label: "Design" },
  { no: "04", label: "Develop" },
  { no: "05", label: "Test" },
  { no: "06", label: "Launch" },
];

export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <>
      {/* ================================ HERO ================================ */}
      <section className="relative overflow-hidden pt-28 pb-14 md:pt-36 md:pb-20">
        <div
          aria-hidden
          className="animate-drift pointer-events-none absolute -top-32 left-1/2 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(240,78,35,0.14),transparent_65%)] blur-[60px]"
        />
        <div className="relative mx-auto max-w-[1400px] px-5 md:px-8">
          <div className="grid items-start gap-14 lg:grid-cols-[1.06fr_0.94fr] lg:gap-10">
            {/* left */}
            <div>
              <Reveal>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[10.5px] tracking-[0.2em] text-mute uppercase">
                  <span className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-teal-2" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-2" />
                    </span>
                    Available for work
                  </span>
                  <span className="hidden h-3 w-px bg-line sm:block" />
                  <span>Portfolio · {new Date().getFullYear()}</span>
                  <span className="hidden h-3 w-px bg-line sm:block" />
                  <span>{profile.location}</span>
                </div>
              </Reveal>

              <h1 className="font-display mt-7 text-[clamp(2.9rem,9vw,6.6rem)] leading-[0.86] font-extrabold tracking-[-0.05em] text-ink">
                {profile.headline.map((line, i) => (
                  <span key={line} className="line-mask">
                    <span style={{ ["--line-delay" as string]: `${150 + i * 130}ms` }}>
                      {i === 2 ? (
                        <>
                          {line.split(" ")[0]}{" "}
                          <span className="relative inline-block text-ember">
                            {line.split(" ")[1]}
                            <svg
                              viewBox="0 0 200 12"
                              className="absolute -bottom-1 left-0 h-2.5 w-full text-ember/45"
                              preserveAspectRatio="none"
                              aria-hidden
                            >
                              <path
                                d="M2 8c40-6 90-7 196-3"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                              />
                            </svg>
                          </span>
                        </>
                      ) : (
                        line
                      )}
                    </span>
                  </span>
                ))}
              </h1>

              <Reveal delay={520}>
                <div className="mt-8 flex items-center gap-4">
                  <span className="h-px w-12 bg-ember" />
                  <p className="font-mono text-[11px] tracking-[0.2em] text-ink-700 uppercase">
                    {profile.role} <span className="text-mute">— {profile.tagline}</span>
                  </p>
                </div>
              </Reveal>

              <Reveal delay={600}>
                <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-mute text-pretty md:text-[17.5px]">
                  I build <span className="font-semibold text-ink">business websites</span>,{" "}
                  <span className="font-semibold text-ink">custom Laravel applications</span>,{" "}
                  <span className="font-semibold text-ink">admin dashboards</span> and{" "}
                  <span className="font-semibold text-ink">React.js interfaces</span> — focused on
                  solving the actual problem your business has, not on showing off a technology
                  list.
                </p>
              </Reveal>

              <Reveal delay={680}>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <Btn to="/projects">View My Work</Btn>
                  <Btn to="/contact" variant="ghost">
                    Start a Project
                  </Btn>
                </div>
              </Reveal>

              <Reveal delay={760}>
                <ul className="mt-10 flex flex-wrap gap-x-5 gap-y-2.5 border-t border-line pt-6">
                  {trustPoints.map((t) => (
                    <li
                      key={t}
                      className="group flex items-center gap-2 font-mono text-[10.5px] tracking-[0.12em] text-ink-700 uppercase"
                    >
                      <span className="grid h-4 w-4 place-items-center rounded-[3px] bg-teal/12 text-teal transition-colors duration-300 group-hover:bg-ember group-hover:text-white">
                        <IconCheck width={10} height={10} />
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* right — photo + code panel collage */}
            <Reveal delay={260} className="relative">
              <figure className="group/photo relative ml-auto w-[68%] rotate-[2.6deg] overflow-hidden rounded-xl border border-ink/15 bg-ink shadow-[0_45px_80px_-50px_rgba(13,16,20,0.95)] transition-[rotate,translate] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:rotate-0 sm:w-[62%] lg:w-[66%]">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={images}
                    alt="Developer focused on building a Laravel web application"
                    fetchPriority="high"
                    className="animate-kenburns h-full w-full object-cover"
                  />
                </div>
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-transparent"
                />
                <div
                  aria-hidden
                  className="absolute top-3 left-3 h-6 w-6 rounded-full border border-white/25 bg-ink/40 backdrop-blur-sm"
                />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-4">
                  <span className="font-mono text-[9px] tracking-[0.16em] text-paper-3/85 uppercase">
                    Laravel + MySQL, in progress
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-[9px] tracking-[0.14em] text-ember-soft uppercase">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-ember" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ember" />
                    </span>
                    live
                  </span>
                </figcaption>
              </figure>

              <div className="relative z-10 -mt-24 w-[95%] rotate-[-1.4deg] sm:-mt-28 lg:-mt-36">
                <CodePanel lines={heroCode} filename="routes/web.php" badge="Laravel 11" />
              </div>

              {/* floating stat cards */}
              <div className="absolute top-6 -left-3 hidden rotate-[-3deg] rounded-lg border border-line bg-paper px-4 py-3 shadow-[0_20px_45px_-30px_rgba(13,16,20,0.8)] transition-transform duration-500 hover:rotate-0 sm:block md:-left-8">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-md bg-ink text-ember">
                    <IconLayers width={17} height={17} />
                  </span>
                  <span className="leading-tight">
                    <span className="font-display block text-[19px] font-extrabold text-ink">
                      3+ yrs
                    </span>
                    <span className="block font-mono text-[9px] tracking-[0.14em] text-mute uppercase">
                      production PHP
                    </span>
                  </span>
                </div>
              </div>

              <div className="absolute -right-1 -bottom-5 hidden rotate-[2deg] items-center gap-2 rounded-full border border-line bg-paper px-3.5 py-2 shadow-[0_16px_36px_-26px_rgba(13,16,20,0.8)] transition-transform duration-500 hover:rotate-0 md:flex">
                <IconClock width={14} height={14} className="text-ember" />
                <span className="font-mono text-[9.5px] tracking-[0.14em] text-ink-700 uppercase">
                  replies in ~24h
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================== TECH TICKER ============================ */}
      <section className="relative border-y border-ink/12 bg-ink py-3.5 text-paper">
        <Marquee items={marqueeItems} tone="light" />
      </section>

      {/* ================================ STATS ================================ */}
      <section className="mx-auto max-w-[1400px] px-5 py-14 md:px-8 md:py-16">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
          {heroStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="border-l border-line pl-5">
              <Counter value={s.value} suffix={s.suffix} label={s.label} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============================ INDUSTRIES =============================== */}
      <section className="relative overflow-hidden border-b border-line bg-paper-2/50 py-20 md:py-28">
        <div aria-hidden className="dots pointer-events-none absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-[1400px] px-5 md:px-8">
          <SectionHead
            align="between"
            eyebrow="Industries"
            no="01"
            title={
              <>
                Businesses I've
                <br />
                built for.
              </>
            }
            lead="Clinics, brokers, kitchens, stores, gyms, legal teams. Each photo below is a real project — tap one to read how it was built."
            action={
              <TextLink to="/projects" className="mt-6 text-ink hover:text-ember">
                All case studies
              </TextLink>
            }
          />

          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-7 lg:grid-cols-12">
            {industries.map((ind, i) => (
              <Reveal
                key={ind.name}
                delay={i * 80}
                className={cn(ind.span, ind.shift)}
              >
                <Link
                  to={`/projects/${ind.slug}`}
                  className={cn(
                    "postcard group block rounded-lg border border-ink/12 bg-paper p-2.5 shadow-[0_18px_40px_-30px_rgba(13,16,20,0.7)] md:p-3",
                    ind.tilt,
                  )}
                >
                  <div className={cn("relative overflow-hidden rounded-[4px] bg-ink", ind.ratio)}>
                    <img
                      src={ind.img}
                      alt={`${ind.name} — ${ind.built}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.09]"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/5 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95"
                    />
                    <span className="absolute top-2.5 left-2.5 rounded-full bg-paper/92 px-2.5 py-1 font-mono text-[8.5px] tracking-[0.16em] text-ink uppercase">
                      {ind.name}
                    </span>
                    <span className="absolute right-2.5 bottom-2.5 left-2.5 flex items-end justify-between gap-2">
                      <span className="font-display text-[13px] leading-tight font-bold text-paper md:text-[15px]">
                        {ind.built}
                      </span>
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-ember text-white opacity-0 transition-all duration-400 group-hover:opacity-100">
                        <IconArrowRight width={13} height={13} />
                      </span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3 px-1 pt-2.5 pb-1">
                    <span className="font-mono text-[8.5px] tracking-[0.14em] text-mute uppercase">
                      Case study
                    </span>
                    <span className="h-px flex-1 bg-line" />
                    <span className="font-mono text-[8.5px] tracking-[0.14em] text-ember uppercase">
                      0{i + 1}
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================== PROBLEM → SOLUTION ========================= */}
      <section className="mx-auto max-w-[1400px] px-5 pb-20 md:px-8 md:pb-28">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <Eyebrow no="02">Problem first</Eyebrow>
            </Reveal>
            <Reveal delay={70}>
              <h2 className="font-display mt-4 text-[clamp(2rem,4.6vw,3.3rem)] leading-[0.96] font-extrabold tracking-[-0.04em] text-ink">
                Which of these
                <br />
                sounds like
                <br />
                <span className="relative inline-block text-ember">
                  your business?
                  <svg
                    viewBox="0 0 260 12"
                    className="absolute -bottom-1.5 left-0 h-2.5 w-full text-ember/40"
                    preserveAspectRatio="none"
                    aria-hidden
                  >
                    <path
                      d="M3 8c60-6 140-7 254-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>
            </Reveal>
            <Reveal delay={130}>
              <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-mute">
                Technology is the easy part. Every project I take starts from one of these five
                sentences — because if the problem isn't clear, the software won't be either.
              </p>
            </Reveal>
            <Reveal delay={190}>
              <Btn to="/services" variant="ghost" className="mt-8">
                Explore services
              </Btn>
            </Reveal>
          </div>

          <div className="border-t border-line">
            {problems.map((item, i) => (
              <Reveal key={item.problem} delay={i * 70}>
                <Link
                  to={`/services#${item.to}`}
                  className="group grid gap-3 border-b border-line py-7 transition-colors duration-400 hover:border-ember md:grid-cols-[auto_1fr_auto] md:items-start md:gap-7"
                >
                  <span className="font-mono text-[10.5px] tracking-[0.16em] text-ember">
                    P{String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="font-display block text-[clamp(1.25rem,2.4vw,1.7rem)] leading-snug font-bold tracking-[-0.025em] text-ink transition-transform duration-400 group-hover:translate-x-1.5">
                      {item.problem}
                    </span>
                    <span className="mt-2.5 block max-w-xl text-[14px] leading-relaxed text-mute transition-transform duration-400 group-hover:translate-x-1.5">
                      {item.solution}
                    </span>
                  </span>
                  <span className="flex items-center gap-2 font-mono text-[9.5px] tracking-[0.14em] text-mute uppercase transition-colors duration-300 group-hover:text-ember md:mt-2">
                    {item.service}
                    <IconArrowRight
                      width={14}
                      height={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =============================== SERVICES ============================== */}
      <section className="relative border-y border-line bg-paper-2/70 py-20 md:py-28">
        <div aria-hidden className="dots pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-[1400px] px-5 md:px-8">
          <SectionHead
            align="between"
            eyebrow="What I build"
            no="03"
            title={
              <>
                Services that map to
                <br />
                real business needs.
              </>
            }
            lead="Six things I do properly, instead of twenty I do occasionally. Each one comes with a defined scope, timeline and handover."
            action={
              <TextLink to="/services" className="mt-6 text-ink hover:text-ember">
                All services
              </TextLink>
            }
          />

          <div className="grid gap-4 lg:grid-cols-6">
            {services.map((s, i) => {
              const Icon = serviceIcons[s.icon];
              const spans = ["lg:col-span-4", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2", "lg:col-span-6"];
              const isWide = i === 0 || i === 5;
              return (
                <Reveal key={s.id} delay={i * 70} className={spans[i]}>
                  <SpotCard
                    id={s.id}
                    className="h-full rounded-xl border border-ink/12 bg-paper p-6 md:p-7"
                  >
                    <div
                      className={cn(
                        "flex h-full flex-col",
                        i === 5 && "lg:flex-row lg:items-start lg:gap-12",
                      )}
                    >
                      <div className={cn(i === 5 && "lg:w-[34%] lg:shrink-0")}>
                        <div className="flex items-start justify-between gap-4">
                          <span className="grid h-11 w-11 place-items-center rounded-lg bg-ink text-ember transition-all duration-400 group-hover:rotate-6 group-hover:bg-ember group-hover:text-white">
                            <Icon width={20} height={20} />
                          </span>
                          <span className="font-display text-[2.4rem] leading-none font-extrabold text-ink/10 transition-colors duration-400 group-hover:text-ember/35">
                            {s.no}
                          </span>
                        </div>
                        <h3 className="font-display mt-5 text-[clamp(1.3rem,2.2vw,1.75rem)] leading-tight font-bold tracking-[-0.025em] text-ink">
                          {s.title}
                        </h3>
                        <p className="mt-2.5 text-[14px] leading-relaxed text-mute">{s.short}</p>
                        <div className="mt-4 flex flex-wrap items-center gap-2">
                          <Chip>{s.timeline}</Chip>
                          {isWide && <Chip>MySQL</Chip>}
                          {isWide && <Chip>Responsive</Chip>}
                        </div>
                      </div>

                      <div className={cn("mt-6", i === 5 && "lg:mt-0 lg:flex-1")}>
                        <ul
                          className={cn(
                            "grid gap-2 border-t border-line pt-5",
                            isWide && "sm:grid-cols-2 lg:grid-cols-3",
                          )}
                        >
                          {(isWide ? s.deliverables.slice(0, 6) : s.deliverables.slice(0, 4)).map(
                            (d) => (
                              <li key={d} className="flex items-start gap-2.5">
                                <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-ember" />
                                <span className="text-[13.5px] leading-snug text-ink-700">{d}</span>
                              </li>
                            ),
                          )}
                        </ul>
                        <Link
                          to={`/services#${s.id}`}
                          className="group/link mt-6 inline-flex items-center gap-2 font-mono text-[10.5px] tracking-[0.14em] text-ink uppercase transition-colors hover:text-ember"
                        >
                          <span className="underline-sweep">Service details</span>
                          <IconArrowRight
                            width={14}
                            height={14}
                            className="transition-transform duration-300 group-hover/link:translate-x-1"
                          />
                        </Link>
                      </div>
                    </div>
                  </SpotCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================ FEATURED WORK ============================ */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
        <SectionHead
          align="between"
          eyebrow="Selected work"
          no="04"
          title={
            <>
              Featured
              <br />
              projects.
            </>
          }
          lead="Four recent builds with the problem, the solution and what changed after launch. Every one has a full case study."
          action={
            <Btn to="/projects" variant="ink" className="mt-6">
              View All Projects
            </Btn>
          }
        />

        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 110} className={cn(i % 2 === 1 && "md:mt-16")}>
              <article className="group">
                <Link to={`/projects/${p.slug}`} className="block">
                  <div className="relative">
                    <BrowserFrame src={p.image} alt={p.name} domain={p.domain} />
                    <span className="absolute top-3 right-3 z-10 rounded-full bg-ink/85 px-3 py-1 font-mono text-[9px] tracking-[0.16em] text-paper uppercase backdrop-blur">
                      {p.categoryLabel}
                    </span>
                    <span className="absolute bottom-3 left-3 z-10 flex items-center gap-2 rounded-full bg-ember px-3.5 py-1.5 font-mono text-[9.5px] tracking-[0.14em] text-white uppercase opacity-0 transition-all duration-400 group-hover:opacity-100">
                      View case study
                      <IconArrowRight width={12} height={12} />
                    </span>
                  </div>
                </Link>
                <div className="mt-5 flex items-start justify-between gap-6 border-t border-line pt-4">
                  <div>
                    <h3 className="font-display text-[1.45rem] leading-tight font-bold tracking-[-0.025em] text-ink transition-colors duration-300 group-hover:text-ember">
                      <Link to={`/projects/${p.slug}`}>{p.name}</Link>
                    </h3>
                    <p className="mt-1.5 font-mono text-[10.5px] tracking-[0.12em] text-mute uppercase">
                      {p.client} · {p.year}
                    </p>
                  </div>
                  <span className="font-display shrink-0 text-[2rem] leading-none font-extrabold text-ink/10">
                    0{i + 1}
                  </span>
                </div>
                <p className="mt-3 max-w-lg text-[14px] leading-relaxed text-mute">{p.summary}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.slice(0, 5).map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============================ PHOTO STRIP ============================== */}
      <section className="relative overflow-hidden border-y border-ink/15 bg-ink py-8 md:py-10">
        <div className="mx-auto mb-6 flex max-w-[1400px] items-baseline justify-between gap-6 px-5 md:px-8">
          <Eyebrow tone="light" no="✦">
            From the workshop
          </Eyebrow>
          <span className="hidden font-mono text-[9.5px] tracking-[0.16em] text-paper-3/40 uppercase sm:block">
            hover to pause · click any frame for the case study
          </span>
        </div>

        <div className="group/strip flex overflow-hidden">
          <div className="animate-marquee-slow flex shrink-0 items-center gap-4 pr-4 group-hover/strip:[animation-play-state:paused]">
            {[...filmStrip, ...filmStrip].map((f, i) => (
              <Link
                key={`${f.label}-${i}`}
                to={`/projects/${f.slug}`}
                className={cn(
                  "block w-[210px] shrink-0 overflow-hidden rounded-md border border-white/12 bg-ink-800 p-1.5 transition-all duration-500 hover:-translate-y-1.5 hover:border-ember/60 md:w-[280px]",
                  i % 3 === 1 ? "rotate-[1.4deg]" : i % 3 === 2 ? "-rotate-[1.2deg]" : "rotate-0",
                )}
              >
                <div className="aspect-[16/10] overflow-hidden rounded-[3px] bg-ink-700">
                  <img
                    src={f.img}
                    alt={f.label}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale-[0.55] transition-all duration-700 group-hover/strip:grayscale-0 hover:scale-110 hover:grayscale-0"
                  />
                </div>
                <div className="flex items-center justify-between gap-2 px-1 pt-2 pb-1">
                  <span className="truncate font-mono text-[8.5px] tracking-[0.14em] text-paper-3/60 uppercase">
                    {f.label}
                  </span>
                  <span className="shrink-0 font-mono text-[8.5px] text-ember">{f.tag}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= WHY WORK ================================ */}
      <section className="relative border-y border-line bg-paper-2/70 py-20 md:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-5 md:px-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHead
              eyebrow="Why work with me"
              no="05"
              title={
                <>
                  Not a template
                  <br />
                  factory.
                </>
              }
              lead="I take fewer projects and finish them properly. Here's what that means for you in practice."
            />
            <Reveal delay={160}>
              <div className="relative pb-16">
                <BrowserFrame
                  src={photos.workspace}
                  alt="Development workspace with code on screen"
                  domain="~/anash/workspace"
                />
                {/* overlapping planning photo */}
                <figure className="group/plan absolute -bottom-2 right-0 w-[46%] rotate-[3deg] overflow-hidden rounded-lg border border-ink/15 bg-paper p-2 shadow-[0_28px_55px_-32px_rgba(13,16,20,0.9)] transition-[rotate,translate] duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] hover:rotate-0 hover:-translate-y-1.5 sm:w-[42%]">
                  <div className="aspect-[4/3] overflow-hidden rounded-[3px] bg-ink">
                    <img
                      src={photos.wireframe}
                      alt="Hand-drawn wireframe of a landing page being planned before development"
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover/plan:scale-110"
                    />
                  </div>
                  <figcaption className="mt-2 flex items-center justify-between px-0.5 font-mono text-[8px] tracking-[0.14em] text-mute uppercase">
                    Stage 03 — design
                    <span className="text-ember">✎</span>
                  </figcaption>
                </figure>
                <span className="absolute -top-3 left-4 rotate-[-2deg] rounded-full border border-line bg-paper px-3 py-1.5 font-mono text-[9px] tracking-[0.14em] text-ink-700 uppercase shadow-[0_12px_26px_-20px_rgba(13,16,20,0.9)]">
                  Stage 04 — develop
                </span>
              </div>
            </Reveal>
            <Reveal delay={220}>
              <Btn to="/about" variant="ghost" className="mt-2">
                More about me
              </Btn>
            </Reveal>
          </div>

          <div>
            {whyMe.map((w, i) => (
              <Reveal key={w.title} delay={i * 70}>
                <div className="group flex gap-6 border-b border-line py-7 transition-colors duration-400 hover:border-ember first:pt-0">
                  <span className="font-mono text-[11px] tracking-[0.14em] text-ember">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-[1.35rem] leading-tight font-bold tracking-[-0.02em] text-ink transition-transform duration-400 group-hover:translate-x-1.5 md:text-[1.55rem]">
                      {w.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-[14.5px] leading-relaxed text-mute transition-transform duration-400 group-hover:translate-x-1.5">
                      {w.body}
                    </p>
                  </div>
                  <IconArrowRight
                    width={18}
                    height={18}
                    className="mt-1 shrink-0 text-ink/20 transition-all duration-400 group-hover:translate-x-1 group-hover:text-ember"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =============================== PROCESS =============================== */}
      <section className="blueprint-dark relative overflow-hidden bg-ink py-20 text-paper md:py-28">
        <div
          aria-hidden
          className="animate-drift pointer-events-none absolute top-1/3 -right-24 h-[45vh] w-[45vh] rounded-full bg-[radial-gradient(circle,rgba(240,78,35,0.22),transparent_65%)] blur-[80px]"
        />
        <div className="relative mx-auto max-w-[1400px] px-5 md:px-8">
          <SectionHead
            tone="light"
            align="between"
            eyebrow="How a project runs"
            no="06"
            title={
              <>
                Work process,
                <br />
                start to launch.
              </>
            }
            lead="No black box. You know what stage the project is in, what's next, and what you need to send me."
            action={
              <Btn to="/process" variant="light" className="mt-6">
                See the full process
              </Btn>
            }
          />

          <div className="relative">
            <div
              aria-hidden
              className="absolute top-[27px] right-0 left-0 hidden h-px bg-gradient-to-r from-transparent via-white/20 to-transparent lg:block"
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
              {processRibbon.map((step, i) => (
                <Reveal key={step.no} delay={i * 80}>
                  <Link to="/process" className="group block">
                    <span className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-ink-800 font-mono text-[12px] text-paper-3/70 transition-all duration-400 group-hover:border-ember group-hover:bg-ember group-hover:text-white">
                      {step.no}
                      <span className="animate-pulse-ring absolute inset-0 rounded-full border border-ember/40 opacity-0 group-hover:opacity-100" />
                    </span>
                    <h3 className="font-display mt-5 text-[1.3rem] leading-none font-bold tracking-[-0.02em] text-paper transition-colors duration-300 group-hover:text-ember-soft">
                      {step.label}
                    </h3>
                    <span className="mt-2.5 block h-px w-8 bg-white/20 transition-all duration-400 group-hover:w-full group-hover:bg-ember" />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={200}>
            <div className="mt-14 flex flex-col gap-4 rounded-xl border border-white/12 bg-white/[0.03] p-6 sm:flex-row sm:items-center sm:justify-between md:p-7">
              <p className="max-w-2xl text-[14.5px] leading-relaxed text-paper-3/75">
                <span className="font-semibold text-paper">Step 07 — Support.</span> After launch I
                stay reachable for fixes, content updates and questions from your team. Ongoing
                maintenance is optional and quoted separately.
              </p>
              <Eyebrow tone="light">7 stages · written scope</Eyebrow>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================= AVAILABILITY (photo) ======================== */}
      <section className="relative h-[64vh] min-h-[430px] overflow-hidden border-b border-ink/25">
        <img
          src={photos.night}
          alt="Late-evening development session with code on screen"
          className="animate-kenburns-slow absolute inset-0 h-full w-full object-cover"
        />
        <div aria-hidden className="absolute inset-0 bg-ink/80" />
        <div aria-hidden className="blueprint-dark absolute inset-0 opacity-70" />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent"
        />

        <div className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-center px-5 md:px-8">
          <Reveal>
            <Eyebrow tone="light" no="07">
              Current status
            </Eyebrow>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="font-display mt-5 max-w-4xl text-[clamp(2.2rem,6.8vw,5rem)] leading-[0.9] font-extrabold tracking-[-0.045em] text-paper">
              Currently open for{" "}
              <span className="relative inline-block text-ember">
                new projects.
                <svg
                  viewBox="0 0 300 12"
                  className="absolute -bottom-1 left-0 h-2.5 w-full text-ember/45"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M3 8c70-6 160-7 294-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
          </Reveal>
          <Reveal delay={170}>
            <p className="mt-7 max-w-xl text-[15.5px] leading-relaxed text-paper-3/75 text-pretty">
              One developer, so the calendar fills up quickly. If your website or application needs
              to be live in the next couple of months, the first conversation should happen now —
              it costs nothing and commits you to nothing.
            </p>
          </Reveal>
          <Reveal delay={250}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Btn to="/contact">Check availability</Btn>
              <Btn to="/process" variant="light" icon={false}>
                How a project runs
              </Btn>
            </div>
          </Reveal>
        </div>

        <div className="absolute right-5 bottom-5 hidden items-center gap-4 font-mono text-[9.5px] tracking-[0.16em] text-paper-3/45 uppercase md:right-8 md:flex">
          <span>{profile.location}</span>
          <span className="h-3 w-px bg-white/20" />
          <span>{profile.responseTime}</span>
        </div>
      </section>

      <CTABand
        title={["HAVE A WEBSITE IDEA?", "LET'S BUILD IT."]}
        secondary={{ label: "See pricing", to: "/pricing" }}
      />
    </>
  );
}
