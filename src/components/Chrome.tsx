import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import {
  Outlet,
  useNavigationType,
} from "react-router-dom";

import Nav from "./Nav";
import PageTitle from "./PageTitle";
import {
  Backdrop,
  Eyebrow,
  Marquee,
  Reveal,
} from "./ui";

import {
  moreLinks,
  navLinks,
  profile,
  services,
  marqueeItems,
} from "@/lib/data";

import {
  IconArrowUpRight,
  IconGithub,
  IconLinkedin,
  IconMail,
  IconPin,
  IconWhatsapp,
} from "./Icons";

/* =========================================================
   AI CHATBOT
========================================================= */

import AIChatbot from "./AIChatbot";


/* =========================================================
   SCROLL RESTORE
========================================================= */

function ScrollToTop() {
  const { pathname } = useLocation();
  const nav = useNavigationType();

  useEffect(() => {
    if (nav === "POP") return;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname, nav]);

  return null;
}


/* =========================================================
   PAGE HERO
========================================================= */

export function PageHero({
  eyebrow,
  no,
  title,
  lead,
  meta,
  children,
}: {
  eyebrow: string;
  no?: string;
  title: ReactNode;
  lead?: ReactNode;
  meta?: {
    label: string;
    value: string;
  }[];
  children?: ReactNode;
}) {
  const lines = Array.isArray(title)
    ? (title as string[])
    : [title as string];

  return (
    <section className="blueprint-dark relative overflow-hidden bg-ink pt-32 pb-16 md:pt-40 md:pb-20">

      <div
        aria-hidden
        className="
          animate-drift
          pointer-events-none
          absolute
          -top-40
          -left-24
          h-[52vh]
          w-[52vh]
          rounded-full
          bg-[radial-gradient(circle,rgba(240,78,35,0.28),transparent_65%)]
          blur-[70px]
        "
      />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-8">

        <Reveal>
          <Eyebrow no={no} tone="light">
            {eyebrow}
          </Eyebrow>
        </Reveal>

        <h1
          className="
            font-display
            mt-6
            text-[clamp(2.7rem,8.4vw,6.4rem)]
            leading-[0.88]
            font-extrabold
            tracking-[-0.045em]
            text-paper
          "
        >
          {lines.map((line, i) => (
            <span
              key={i}
              className="line-mask"
            >
              <span
                style={{
                  ["--line-delay" as string]:
                    `${120 + i * 110}ms`,
                }}
              >
                {i === lines.length - 1 &&
                /[.?!,]/.test(line.slice(-1)) ? (
                  <>
                    {line.slice(0, -1)}
                    <span className="text-ember">
                      {line.slice(-1)}
                    </span>
                  </>
                ) : (
                  line
                )}
              </span>
            </span>
          ))}
        </h1>

        {lead && (
          <Reveal delay={280}>
            <p
              className="
                mt-7
                max-w-2xl
                text-[15.5px]
                leading-relaxed
                text-paper-3/75
                text-pretty
                md:text-[17px]
              "
            >
              {lead}
            </p>
          </Reveal>
        )}

        {children}

        {meta && (
          <Reveal delay={340}>
            <dl
              className="
                mt-10
                grid
                grid-cols-2
                gap-x-6
                gap-y-5
                border-t
                border-white/12
                pt-7
                sm:grid-cols-3
                lg:grid-cols-5
              "
            >
              {meta.map((m) => (
                <div key={m.label}>
                  <dt
                    className="
                      font-mono
                      text-[9.5px]
                      tracking-[0.18em]
                      text-paper-3/45
                      uppercase
                    "
                  >
                    {m.label}
                  </dt>

                  <dd
                    className="
                      mt-1.5
                      text-[14px]
                      font-medium
                      text-paper
                    "
                  >
                    {m.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        )}

      </div>
    </section>
  );
}


/* =========================================================
   CTA BAND
========================================================= */

export function CTABand({
  title = ["HAVE A PROJECT", "IN MIND?"],
  lead =
    "Tell me what your business needs the website to do. You'll get an honest scope, a timeline and a starting price — not a vague promise.",
  primary = "Start a Project",
  secondary,
}: {
  title?: string[];
  lead?: string;
  primary?: string;
  secondary?: {
    label: string;
    to: string;
  };
}) {
  return (
    <section className="relative overflow-hidden bg-ember text-white">

      <div
        aria-hidden
        className="dots absolute inset-0 opacity-[0.18]"
      />

      <div
        aria-hidden
        className="noise absolute inset-0 opacity-[0.14] mix-blend-overlay"
      />

      <div
        className="
          relative
          mx-auto
          grid
          max-w-[1400px]
          gap-10
          px-5
          py-16
          md:grid-cols-[1.35fr_auto]
          md:items-end
          md:px-8
          md:py-20
        "
      >

        <div>

          <span
            className="
              font-mono
              text-[10.5px]
              tracking-[0.24em]
              text-white/75
              uppercase
            "
          >
            Next step
          </span>

          <h2
            className="
              font-display
              mt-4
              text-[clamp(2.3rem,6.4vw,4.6rem)]
              leading-[0.9]
              font-extrabold
              tracking-[-0.04em]
            "
          >
            {title.map((l, i) => (
              <span
                key={i}
                className="line-mask"
              >
                <span
                  style={{
                    ["--line-delay" as string]:
                      `${i * 100}ms`,
                  }}
                >
                  {l}
                </span>
              </span>
            ))}
          </h2>

          <p
            className="
              mt-5
              max-w-xl
              text-[15px]
              leading-relaxed
              text-white/85
            "
          >
            {lead}
          </p>

        </div>

        <div className="flex flex-wrap items-center gap-3">

          <Link
            to="/contact"
            className="
              group
              inline-flex
              items-center
              gap-2.5
              rounded-full
              bg-ink
              px-7
              py-4
              font-mono
              text-[11.5px]
              tracking-[0.14em]
              uppercase
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-white
              hover:text-ink
            "
          >
            {primary}

            <IconArrowUpRight
              width={15}
              height={15}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </Link>

          {secondary && (
            <Link
              to={secondary.to}
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/45
                px-6
                py-4
                font-mono
                text-[11.5px]
                tracking-[0.14em]
                uppercase
                transition-colors
                hover:border-ink
                hover:bg-white/12
              "
            >
              {secondary.label}
            </Link>
          )}

        </div>

      </div>
    </section>
  );
}


/* =========================================================
   FOOTER
========================================================= */

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="
        blueprint-dark
        relative
        overflow-hidden
        bg-ink
        text-paper
      "
    >

      <div
        className="
          border-y
          border-white/10
          bg-ink-800/60
          py-3.5
        "
      >
        <Marquee
          items={marqueeItems}
          tone="light"
          speed="slow"
        />
      </div>

      <div
        className="
          mx-auto
          grid
          max-w-[1400px]
          gap-12
          px-5
          py-16
          md:px-8
          lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]
        "
      >

        {/* ================= BRAND ================= */}

        <div>

          <Link
            to="/"
            className="group inline-flex items-center gap-3"
          >

            <span
              className="
                grid
                h-11
                w-11
                place-items-center
                rounded-[8px]
                bg-ember
                font-display
                text-[15px]
                font-extrabold
                text-white
                transition-transform
                duration-500
                group-hover:rotate-6
              "
            >
              AS
            </span>

            <span className="leading-tight">

              <span
                className="
                  font-display
                  block
                  text-[17px]
                  font-extrabold
                  tracking-[-0.02em]
                "
              >
                {profile.name}
              </span>

              <span
                className="
                  block
                  font-mono
                  text-[9.5px]
                  tracking-[0.16em]
                  text-paper-3/55
                  uppercase
                "
              >
                {profile.role}
              </span>

            </span>

          </Link>

          <p
            className="
              mt-5
              max-w-sm
              text-[14px]
              leading-relaxed
              text-paper-3/65
            "
          >
            Business websites, custom Laravel applications,
            admin dashboards and React.js interfaces — built
            to solve a specific problem, and handed over with
            everything you need to own it.
          </p>

          <div
            className="
              mt-6
              inline-flex
              items-center
              gap-2.5
              rounded-full
              border
              border-teal-2/40
              bg-teal-2/10
              px-3.5
              py-1.5
            "
          >

            <span className="relative flex h-2 w-2">

              <span
                className="
                  animate-pulse-ring
                  absolute
                  inline-flex
                  h-full
                  w-full
                  rounded-full
                  bg-teal-2
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  h-2
                  w-2
                  rounded-full
                  bg-teal-2
                "
              />

            </span>

            <span
              className="
                font-mono
                text-[10px]
                tracking-[0.14em]
                text-paper-3/80
                uppercase
              "
            >
              {profile.availability}
            </span>

          </div>

        </div>


        {/* ================= NAVIGATE ================= */}

        <FooterCol title="Navigate">

          {navLinks.map((l) => (
            <FooterLink
              key={l.to}
              to={l.to}
            >
              {l.label}
            </FooterLink>
          ))}

        </FooterCol>


        {/* ================= SERVICES ================= */}

        <FooterCol title="Services">

          {services.slice(0, 5).map((s) => (
            <FooterLink
              key={s.id}
              to={`/services#${s.id}`}
            >
              {s.title}
            </FooterLink>
          ))}

          {moreLinks.map((l) => (
            <FooterLink
              key={l.to}
              to={l.to}
            >
              {l.label}
            </FooterLink>
          ))}

        </FooterCol>


        {/* ================= CONTACT ================= */}

        <FooterCol title="Get in touch">

          <a
            href={`mailto:${profile.email}`}
            className="
              flex
              items-start
              gap-2.5
              py-1.5
              text-[13.5px]
              text-paper-3/70
              transition-colors
              hover:text-ember-soft
            "
          >
            <IconMail
              width={15}
              height={15}
              className="mt-0.5 shrink-0"
            />

            <span className="break-all">
              {profile.email}
            </span>
          </a>


          <a
            href={`https://wa.me/${profile.phoneRaw}`}
            target="_blank"
            rel="noreferrer noopener"
            className="
              flex
              items-center
              gap-2.5
              py-1.5
              text-[13.5px]
              text-paper-3/70
              transition-colors
              hover:text-ember-soft
            "
          >
            <IconWhatsapp
              width={15}
              height={15}
              className="shrink-0"
            />

            {profile.whatsapp}
          </a>


          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            className="
              flex
              items-center
              gap-2.5
              py-1.5
              text-[13.5px]
              text-paper-3/70
              transition-colors
              hover:text-ember-soft
            "
          >
            <IconGithub
              width={15}
              height={15}
              className="shrink-0"
            />

            GitHub
          </a>


          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="
              flex
              items-center
              gap-2.5
              py-1.5
              text-[13.5px]
              text-paper-3/70
              transition-colors
              hover:text-ember-soft
            "
          >
            <IconLinkedin
              width={15}
              height={15}
              className="shrink-0"
            />

            LinkedIn
          </a>


          <span
            className="
              flex
              items-center
              gap-2.5
              py-1.5
              text-[13.5px]
              text-paper-3/70
            "
          >
            <IconPin
              width={15}
              height={15}
              className="shrink-0"
            />

            Based in {profile.location} · working remotely
          </span>

        </FooterCol>

      </div>


      {/* ================= OVERSIZED WORDMARK ================= */}

      <div
        className="
          pointer-events-none
          relative
          mx-auto
          max-w-[1400px]
          px-5
          md:px-8
        "
      >

        <div
          className="
            font-display
            -mb-2
            flex
            justify-center
            text-[clamp(3rem,17vw,15rem)]
            leading-[0.75]
            font-extrabold
            tracking-[-0.06em]
            text-white/[0.045]
            select-none
          "
        >
          ANASH
          <span className="text-ember/25">
            .
          </span>
          DEV
        </div>

      </div>


      {/* ================= FOOTER BOTTOM ================= */}

      <div className="border-t border-white/10">

        <div
          className="
            mx-auto
            flex
            max-w-[1400px]
            flex-col
            gap-4
            px-5
            py-6
            font-mono
            text-[10px]
            tracking-[0.14em]
            text-paper-3/45
            uppercase
            md:flex-row
            md:items-center
            md:justify-between
            md:px-8
          "
        >

          <p>
            © {year} {profile.name}. All rights reserved.
          </p>

          <p className="hidden md:block">
            Built with PHP · Laravel · React.js · MySQL
          </p>

          <div className="flex items-center gap-5">

            <Link
              to="/contact"
              className="transition-colors hover:text-ember-soft"
            >
              Hire me
            </Link>

            <button
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="
                group
                inline-flex
                items-center
                gap-1.5
                transition-colors
                hover:text-ember-soft
              "
            >
              Back to top

              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-1
                "
              >
                <path
                  d="M12 19V5M6 11l6-6 6 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

            </button>

          </div>

        </div>

      </div>

    </footer>
  );
}


/* =========================================================
   FOOTER COLUMN
========================================================= */

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>

      <h3
        className="
          font-mono
          text-[10px]
          tracking-[0.2em]
          text-paper-3/45
          uppercase
        "
      >
        {title}
      </h3>

      <div className="mt-4 flex flex-col">
        {children}
      </div>

    </div>
  );
}


/* =========================================================
   FOOTER LINK
========================================================= */

function FooterLink({
  to,
  children,
}: {
  to: string;
  children: ReactNode;
}) {
  return (
    <Link
      to={to}
      className="
        group
        flex
        items-center
        gap-2
        py-1.5
        text-[13.5px]
        text-paper-3/70
        transition-colors
        hover:text-ember-soft
      "
    >
      <span
        className="
          h-px
          w-0
          bg-ember
          transition-all
          duration-300
          group-hover:w-3
        "
      />

      {children}
    </Link>
  );
}


/* =========================================================
   MAIN LAYOUT
========================================================= */

export default function Layout() {
  const { pathname } = useLocation();

  return (
    <div className="relative flex min-h-screen flex-col">

      <PageTitle />

      <Backdrop variant="paper" />

      <ScrollToTop />

      <Nav />

      <main key={pathname} className="page-enter flex-1">
        <Outlet />
      </main>

      <Footer />

      <AIChatbot />

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${profile.phoneRaw}`}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Chat on WhatsApp"
        className="whatsapp-float group"
      >
        <span className="whatsapp-pulse"></span>

        <span className="whatsapp-icon">
          <IconWhatsapp width={28} height={28} />
        </span>

        <span className="whatsapp-tooltip">
          Chat on WhatsApp
        </span>
      </a>

    </div>
  );
}