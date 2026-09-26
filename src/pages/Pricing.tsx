import { useState } from "react";
import { CTABand, PageHero } from "@/components/Chrome";
import { Btn, CheckList, Chip, Eyebrow, Reveal, SectionHead, cn } from "@/components/ui";
import { IconCheck, IconClose, IconMinus, IconPlus, IconSpark } from "@/components/Icons";
import { pricingAddons, pricingFaqs, pricingNotes, pricingTiers } from "@/lib/data";

const notIncluded = [
  "Domain registration & renewal fees",
  "Hosting / server charges",
  "Paid plugins, themes or stock assets",
  "SMS, WhatsApp API or payment gateway charges",
  "Content writing & logo design (available on request)",
];

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <PageHero
        eyebrow="Pricing"
        no="08"
        title={["STARTING PRICES,", "NO FALSE EXACTNESS"]}
        lead="A range so you can budget, and an honest explanation of why the final number depends on your scope. Nothing here is a fixed quote — that comes after we talk."
        meta={[
          { label: "Starter", value: "From ₹9,999" },
          { label: "Business", value: "From ₹19,999" },
          { label: "Custom", value: "Let's discuss" },
          { label: "Payments", value: "Milestone based" },
          { label: "Ownership", value: "100% yours" },
        ]}
      />

      {/* tiers */}
      <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-20">
        <div className="grid items-start gap-4 lg:grid-cols-3">
          {pricingTiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <div
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-2xl border p-7 transition-all duration-500 hover:-translate-y-1.5 md:p-8",
                  t.featured
                    ? "border-ember/40 bg-ink text-paper shadow-[0_40px_80px_-50px_rgba(13,16,20,0.9)] lg:-mt-4 lg:pb-12"
                    : "border-ink/12 bg-paper",
                )}
              >
                {t.featured && (
                  <>
                    <div
                      aria-hidden
                      className="animate-drift pointer-events-none absolute -top-24 -right-16 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(240,78,35,0.4),transparent_65%)] blur-[50px]"
                    />
                    <span className="absolute top-0 right-0 rounded-bl-xl bg-ember px-4 py-1.5 font-mono text-[9px] tracking-[0.18em] text-white uppercase">
                      Most requested
                    </span>
                  </>
                )}

                <div className="relative">
                  <span
                    className={cn(
                      "font-mono text-[10px] tracking-[0.2em] uppercase",
                      t.featured ? "text-ember-soft" : "text-mute",
                    )}
                  >
                    Tier {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2
                    className={cn(
                      "font-display mt-3 text-[clamp(1.9rem,3.6vw,2.5rem)] leading-none font-extrabold tracking-[-0.04em]",
                      t.featured ? "text-paper" : "text-ink",
                    )}
                  >
                    {t.name}
                  </h2>
                  <p
                    className={cn(
                      "mt-4 font-mono text-[10px] tracking-[0.16em] uppercase",
                      t.featured ? "text-paper-3/55" : "text-mute",
                    )}
                  >
                    {t.prefix}
                  </p>
                  <p
                    className={cn(
                      "font-display mt-1 text-[clamp(2rem,4.4vw,2.9rem)] leading-none font-extrabold tracking-[-0.04em]",
                      t.featured ? "text-ember-soft" : "text-ink",
                    )}
                  >
                    {t.price}
                  </p>
                  <p
                    className={cn(
                      "mt-5 text-[14.5px] leading-relaxed",
                      t.featured ? "text-paper-3/75" : "text-mute",
                    )}
                  >
                    {t.summary}
                  </p>
                </div>

                <ul className="relative mt-7 flex-1 space-y-2.5 border-t pt-6"
                    style={{ borderColor: t.featured ? "rgba(255,255,255,0.14)" : undefined }}>
                  {t.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-2.5">
                      <span
                        className={cn(
                          "mt-[3px] grid h-4 w-4 shrink-0 place-items-center rounded-[3px]",
                          t.featured ? "bg-ember text-white" : "bg-teal/12 text-teal",
                        )}
                      >
                        <IconCheck width={10} height={10} />
                      </span>
                      <span
                        className={cn(
                          "text-[13.5px] leading-snug",
                          t.featured ? "text-paper-3/85" : "text-ink-700",
                        )}
                      >
                        {inc}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="relative mt-8 flex items-center justify-between gap-3 border-t pt-6"
                     style={{ borderColor: t.featured ? "rgba(255,255,255,0.14)" : undefined }}>
                  <span
                    className={cn(
                      "font-mono text-[9.5px] tracking-[0.14em] uppercase",
                      t.featured ? "text-paper-3/55" : "text-mute",
                    )}
                  >
                    {t.timeline}
                  </span>
                  <Btn
                    to={`/contact?budget=${encodeURIComponent(t.name)}`}
                    variant={t.featured ? "primary" : "ghost"}
                  >
                    {t.cta}
                  </Btn>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* honest note */}
        <Reveal delay={120}>
          <div className="mt-6 grid gap-6 rounded-2xl border border-ink/12 bg-paper-2/70 p-7 md:grid-cols-[auto_1fr] md:items-center md:p-8">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-ink text-ember">
              <IconSpark width={22} height={22} />
            </span>
            <p className="text-[15px] leading-relaxed text-ink-700 text-pretty">
              <span className="font-semibold text-ink">Why isn't there an exact price list?</span>{" "}
              Because two "business websites" can differ by forty hours of work. I'd rather give
              you a starting range now and a fixed number after a twenty-minute conversation than
              quote a figure that changes the moment you add an admin panel.
            </p>
          </div>
        </Reveal>
      </section>

      {/* add-ons + not included */}
      <section className="border-y border-line bg-ink py-18 text-paper md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <SectionHead
            tone="light"
            align="between"
            eyebrow="Add-ons & extras"
            no="01"
            title={
              <>
                The parts that
                <br />
                change the number.
              </>
            }
            lead="Common additions, priced separately so you can see exactly where money goes."
          />
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="divide-y divide-white/10 border-y border-white/10">
              {pricingAddons.map((a, i) => (
                <Reveal key={a.name} delay={i * 45}>
                  <div className="group flex items-center justify-between gap-6 py-4 transition-colors duration-300 hover:bg-white/[0.03]">
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-[10px] text-ember-soft">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-[1.2rem] font-bold tracking-[-0.02em] text-paper transition-transform duration-300 group-hover:translate-x-1">
                        {a.name}
                      </span>
                    </div>
                    <span className="shrink-0 font-mono text-[11px] tracking-[0.1em] text-paper-3/70">
                      {a.price}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <div className="rounded-2xl border border-rust/35 bg-rust/[0.12] p-7">
                <div className="flex items-center gap-2.5">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-rust/40 text-white">
                    <IconClose width={17} height={17} />
                  </span>
                  <Eyebrow tone="light">Never included</Eyebrow>
                </div>
                <p className="mt-4 text-[14px] leading-relaxed text-paper-3/75">
                  Third-party costs stay in your name and are billed at actuals. You should always
                  be able to see what went to me and what went to a registrar or provider.
                </p>
                <ul className="mt-5 space-y-2.5">
                  {notIncluded.map((n) => (
                    <li key={n} className="flex items-start gap-2.5 text-[13.5px] text-paper-3/85">
                      <span className="mt-[7px] h-1 w-3 shrink-0 rounded-full bg-ember-soft" />
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* notes */}
      <section className="mx-auto max-w-[1400px] px-5 py-18 md:px-8 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Eyebrow no="02">Terms, in plain language</Eyebrow>
            <h2 className="font-display mt-4 text-[clamp(1.8rem,4vw,2.8rem)] leading-[1] font-extrabold tracking-[-0.035em] text-ink">
              Four things
              <br />
              worth knowing
              <br />
              <span className="text-ember">before we start.</span>
            </h2>
            <div className="mt-8 flex flex-wrap gap-2">
              <Chip>Milestone payments</Chip>
              <Chip>You own the code</Chip>
              <Chip>No lock-in</Chip>
            </div>
            <Btn to="/contact" variant="ink" className="mt-8">
              Get a fixed quote
            </Btn>
          </div>

          <div className="space-y-4">
            {pricingNotes.map((n, i) => (
              <Reveal key={n} delay={i * 70}>
                <div className="group flex gap-5 rounded-xl border border-ink/12 bg-paper p-6 transition-all duration-400 hover:-translate-y-1 hover:border-ember">
                  <span className="font-display text-[1.6rem] leading-none font-extrabold text-ink/12 transition-colors duration-400 group-hover:text-ember/50">
                    0{i + 1}
                  </span>
                  <p className="text-[14.5px] leading-relaxed text-ink-700 text-pretty">{n}</p>
                </div>
              </Reveal>
            ))}

            <Reveal delay={200}>
              <div className="rounded-xl border border-teal/25 bg-teal/[0.06] p-6">
                <Eyebrow>Everything includes, by default</Eyebrow>
                <CheckList
                  className="mt-4 sm:grid-cols-2"
                  items={[
                    "Mobile responsive build",
                    "Deployment to your hosting",
                    "Source code handover",
                    "Credentials in your name",
                  ]}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* faq */}
      <section className="border-t border-line bg-paper-2/70 py-18 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <SectionHead
            align="between"
            eyebrow="Pricing questions"
            no="03"
            title={
              <>
                The awkward
                <br />
                money questions.
              </>
            }
            lead="Answered directly, including the ones most developers avoid."
          />
          <div className="grid gap-3 md:grid-cols-2">
            {pricingFaqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <Reveal key={f.q} delay={i * 60}>
                  <div
                    className={cn(
                      "h-full rounded-2xl border bg-paper p-6 transition-all duration-400",
                      open ? "border-ember/45" : "border-ink/12 hover:border-ink/30",
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(open ? null : i)}
                      aria-expanded={open}
                      className="flex w-full items-start gap-4 text-left"
                    >
                      <span className="flex-1 font-display text-[1.15rem] leading-snug font-bold tracking-[-0.02em] text-ink">
                        {f.q}
                      </span>
                      <span
                        className={cn(
                          "grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-all duration-400",
                          open
                            ? "rotate-180 border-ember bg-ember text-white"
                            : "border-ink/20 text-ink",
                        )}
                      >
                        {open ? <IconMinus width={13} height={13} /> : <IconPlus width={13} height={13} />}
                      </span>
                    </button>
                    <div
                      className={cn(
                        "grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                        open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="text-[14px] leading-relaxed text-mute text-pretty">{f.a}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTABand
        title={["WANT A FIXED", "NUMBER INSTEAD?"]}
        lead="Send the page list and the features. You'll get a quote with a start date, a delivery date and the payment milestones written down."
        primary="Get My Quote"
        secondary={{ label: "See the work", to: "/projects" }}
      />
    </>
  );
}
