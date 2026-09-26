import { useMemo, useState, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { CTABand, PageHero } from "@/components/Chrome";
import { Btn, Eyebrow, Reveal, cn } from "@/components/ui";
import {
  IconArrowRight,
  IconCheck,
  IconClock,
  IconGithub,
  IconLinkedin,
  IconMail,
  IconPhone,
  IconPin,
  IconWhatsapp,
} from "@/components/Icons";
import { contactBudgets, contactNotes, contactProjectTypes, profile, projects } from "@/lib/data";

type Form = {
  name: string;
  email: string;
  phone: string;
  type: string;
  budget: string;
  deadline: string;
  message: string;
};

const empty: Form = {
  name: "",
  email: "",
  phone: "",
  type: "",
  budget: "",
  deadline: "",
  message: "",
};

const nextSteps = [
  { no: "01", title: "I read it properly", body: "Usually within 24 hours. If your requirement needs questions, they'll come in the first reply." },
  { no: "02", title: "A short call or chat", body: "15–20 minutes on WhatsApp or a call to nail down pages, features and deadlines." },
  { no: "03", title: "Written scope + price", body: "What will be built, in what order, starting from what price, and what I need from you." },
];

export default function Contact() {
  const [params] = useSearchParams();
  const preselected = params.get("project");

  const prefillType = useMemo(() => {
    if (!preselected) return "";
    const found = projects.find((p) => p.slug === preselected);
    if (!found) return "";
    return found.category === "react"
      ? "React.js Project"
      : found.category === "business"
        ? "Business Website"
        : found.category === "dashboard"
          ? "Admin Dashboard"
          : "Laravel Application";
  }, [preselected]);

  const budgetTier = params.get("budget");
  const prefillBudget =
    budgetTier === "Starter"
      ? "Under ₹10,000"
      : budgetTier === "Business"
        ? "₹10,000 – ₹25,000"
        : budgetTier === "Custom"
          ? "Not sure yet — let's discuss"
          : "";

  const [form, setForm] = useState<Form>({
    ...empty,
    type: prefillType,
    budget: prefillBudget,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");

  const set = (k: keyof Form) => (v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const mailto = useMemo(() => {
    const subject = `Project enquiry — ${form.type || "New project"} (${form.name || "Portfolio form"})`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone / WhatsApp: ${form.phone || "—"}`,
      `Project type: ${form.type || "—"}`,
      `Budget: ${form.budget || "—"}`,
      `Target date: ${form.deadline || "—"}`,
      preselected ? `Reference project: ${preselected}` : "",
      "",
      "Requirement:",
      form.message,
    ]
      .filter(Boolean)
      .join("\n");
    return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [form, preselected]);

  const validate = () => {
    const e: Partial<Record<keyof Form, string>> = {};
    if (form.name.trim().length < 2) e.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim()))
      e.email = "Enter a valid email address so I can reply.";
    if (form.phone && !/^[+\d][\d\s\-()]{6,}$/.test(form.phone.trim()))
      e.phone = "That phone number looks incomplete.";
    if (!form.type) e.type = "Choose the closest project type.";
    if (form.message.trim().length < 20)
      e.message = "A little more detail helps — at least 20 characters about what you need.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) {
      const first = document.querySelector<HTMLElement>("[data-error='true']");
      first?.scrollIntoView({ behavior: "smooth", block: "center" });
      first?.focus?.({ preventScroll: true });
      return;
    }
    setState("sending");
    window.setTimeout(() => setState("sent"), 850);
  };

  const details = [
    { icon: IconMail, label: "Email", value: profile.email, href: `mailto:${profile.email}`, note: "Best for detailed requirements" },
    { icon: IconWhatsapp, label: "WhatsApp", value: profile.whatsapp, href: `https://wa.me/${profile.phoneRaw}`, note: "Fastest for quick questions", external: true },
    { icon: IconPhone, label: "Phone", value: profile.phone, href: `tel:+${profile.phoneRaw}`, note: "Weekdays, 10am – 7pm IST" },
    { icon: IconLinkedin, label: "LinkedIn", value: "Connect with me", href: profile.linkedin, note: "Professional background", external: true },
    { icon: IconGithub, label: "GitHub", value: "Repositories & experiments", href: profile.github, note: "Code samples on request", external: true },
    { icon: IconPin, label: "Location", value: `${profile.location} · remote`, href: undefined, note: "Working with clients across India & abroad" },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        no="07"
        title={["LET'S WORK", "TOGETHER"]}
        lead="Send the requirement — what the website or application must do, who will use it and when you need it. You'll get a scope, a timeline and a starting price, not a sales pitch."
        meta={[
          { label: "Response time", value: profile.responseTime.replace("Usually replies ", "") },
          { label: "Availability", value: "Open for new projects" },
          { label: "Based in", value: profile.location },
          { label: "Working hours", value: "Mon–Sat · IST" },
          { label: "Preferred", value: "Email or WhatsApp" },
        ]}
      />

      <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:gap-8">
          {/* ------------------------------- form ------------------------------- */}
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-ink/12 bg-paper p-6 md:p-9">
              {state === "sent" ? (
                <div className="relative py-6">
                  <span className="grid h-16 w-16 place-items-center rounded-2xl bg-teal text-white">
                    <IconCheck width={30} height={30} />
                  </span>
                  <h2 className="font-display mt-7 text-[clamp(1.9rem,4vw,2.8rem)] leading-[1] font-extrabold tracking-[-0.035em] text-ink">
                    Enquiry ready —
                    <br />
                    <span className="text-ember">one tap to send.</span>
                  </h2>
                  <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-mute">
                    This portfolio has no server behind it, so your details were composed into an
                    email instead of silently disappearing. Press the button below and your mail
                    app opens with everything already filled in.
                  </p>

                  <dl className="mt-7 grid gap-x-8 gap-y-4 border-y border-line py-6 sm:grid-cols-2">
                    {[
                      { k: "Name", v: form.name },
                      { k: "Email", v: form.email },
                      { k: "Phone / WhatsApp", v: form.phone || "—" },
                      { k: "Project type", v: form.type },
                      { k: "Budget", v: form.budget || "—" },
                      { k: "Target date", v: form.deadline || "—" },
                    ].map((r) => (
                      <div key={r.k}>
                        <dt className="font-mono text-[9.5px] tracking-[0.16em] text-mute uppercase">
                          {r.k}
                        </dt>
                        <dd className="mt-1 text-[14.5px] font-medium break-words text-ink">{r.v}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-3 rounded-lg border border-line bg-paper-2/60 p-4">
                    <Eyebrow>Your message</Eyebrow>
                    <p className="mt-2 max-h-40 overflow-auto text-[14px] leading-relaxed whitespace-pre-wrap text-ink-700">
                      {form.message}
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <Btn href={mailto}>Open in email app</Btn>
                    <Btn
                      href={`https://wa.me/${profile.phoneRaw}?text=${encodeURIComponent(
                        `Hi Anash, I'm ${form.name}. ${form.message.slice(0, 160)}`,
                      )}`}
                      external
                      variant="ghost"
                      icon={false}
                    >
                      Send on WhatsApp
                    </Btn>
                    <button
                      type="button"
                      onClick={() => {
                        setState("idle");
                        setForm({ ...empty, type: prefillType, budget: prefillBudget });
                      }}
                      className="font-mono text-[10.5px] tracking-[0.14em] text-mute uppercase underline-offset-4 transition-colors hover:text-ember hover:underline"
                    >
                      Edit &amp; start over
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate>
                  <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-6">
                    <div>
                      <Eyebrow no="✉">Project enquiry</Eyebrow>
                      <h2 className="font-display mt-3 text-[clamp(1.8rem,4vw,2.7rem)] leading-none font-extrabold tracking-[-0.035em] text-ink">
                        Tell me about it.
                      </h2>
                    </div>
                    <span className="flex items-center gap-2 rounded-full border border-teal/25 bg-teal/[0.07] px-3.5 py-1.5 font-mono text-[9.5px] tracking-[0.14em] text-teal uppercase">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-teal-2" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal-2" />
                      </span>
                      Taking new projects
                    </span>
                  </div>

                  {(preselected || budgetTier) && (
                    <div className="mt-6 flex items-start gap-3 rounded-lg border border-ember/30 bg-ember/[0.06] px-4 py-3">
                      <IconArrowRight width={15} height={15} className="mt-0.5 shrink-0 text-ember" />
                      <p className="text-[13.5px] leading-snug text-ink-700">
                        {preselected ? (
                          <>
                            You came from the{" "}
                            <span className="font-semibold">
                              {projects.find((p) => p.slug === preselected)?.name ?? "project"}
                            </span>{" "}
                            case study — the project type is pre-selected. Mention what you'd like
                            built along similar lines.
                          </>
                        ) : (
                          <>
                            You came from the{" "}
                            <span className="font-semibold">{budgetTier}</span> pricing tier — the
                            budget field is pre-filled. Tell me the pages and features you need and
                            I'll confirm whether that range fits.
                          </>
                        )}
                      </p>
                    </div>
                  )}

                  <div className="mt-7 grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Name"
                      required
                      error={errors.name}
                      className="sm:col-span-1"
                    >
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => set("name")(e.target.value)}
                        placeholder="Your full name"
                        autoComplete="name"
                        data-error={Boolean(errors.name)}
                        className={inputCls(Boolean(errors.name))}
                      />
                    </Field>

                    <Field label="Email" required error={errors.email}>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => set("email")(e.target.value)}
                        placeholder="you@company.com"
                        autoComplete="email"
                        data-error={Boolean(errors.email)}
                        className={inputCls(Boolean(errors.email))}
                      />
                    </Field>

                    <Field label="Phone / WhatsApp" error={errors.phone}>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => set("phone")(e.target.value)}
                        placeholder="+91 98XXX XXXXX"
                        autoComplete="tel"
                        data-error={Boolean(errors.phone)}
                        className={inputCls(Boolean(errors.phone))}
                      />
                    </Field>

                    <Field label="Project type" required error={errors.type}>
                      <div className="relative">
                        <select
                          value={form.type}
                          onChange={(e) => set("type")(e.target.value)}
                          data-error={Boolean(errors.type)}
                          className={cn(inputCls(Boolean(errors.type)), "appearance-none pr-10")}
                        >
                          <option value="">Select one…</option>
                          {contactProjectTypes.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                        <SelectArrow />
                      </div>
                    </Field>

                    <Field label="Budget">
                      <div className="relative">
                        <select
                          value={form.budget}
                          onChange={(e) => set("budget")(e.target.value)}
                          className={cn(inputCls(false), "appearance-none pr-10")}
                        >
                          <option value="">Prefer not to say</option>
                          {contactBudgets.map((b) => (
                            <option key={b} value={b}>
                              {b}
                            </option>
                          ))}
                        </select>
                        <SelectArrow />
                      </div>
                    </Field>

                    <Field label="Target start / deadline">
                      <input
                        type="text"
                        value={form.deadline}
                        onChange={(e) => set("deadline")(e.target.value)}
                        placeholder="e.g. before March, or ASAP"
                        className={inputCls(false)}
                      />
                    </Field>

                    <Field
                      label="Message"
                      required
                      error={errors.message}
                      className="sm:col-span-2"
                      hint={`${form.message.length} characters`}
                    >
                      <textarea
                        rows={6}
                        value={form.message}
                        onChange={(e) => set("message")(e.target.value)}
                        placeholder="What does the website or application need to do? Who will use it? Which pages or features matter most? Any reference sites you like?"
                        data-error={Boolean(errors.message)}
                        className={cn(inputCls(Boolean(errors.message)), "resize-y")}
                      />
                    </Field>
                  </div>

                  <div className="mt-7 flex flex-wrap items-center gap-4 border-t border-line pt-6">
                    <Btn type="submit" disabled={state === "sending"}>
                      {state === "sending" ? "Preparing…" : "Send Project Enquiry"}
                    </Btn>
                    <p className="max-w-xs text-[12px] leading-snug text-mute">
                      No newsletter, no data sharing. Your details are used only to reply to this
                      enquiry.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </Reveal>

          {/* ------------------------------- sidebar ------------------------------ */}
          <div className="space-y-6">
            <Reveal delay={80}>
              <div className="rounded-2xl border border-ink/12 bg-ink p-6 text-paper md:p-7">
                <Eyebrow tone="light">Direct details</Eyebrow>
                <ul className="mt-5 divide-y divide-white/10">
                  {details.map((d) => {
                    const Icon = d.icon;
                    const content = (
                      <>
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/[0.06] text-ember transition-colors duration-300 group-hover:bg-ember group-hover:text-white">
                          <Icon width={16} height={16} />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block font-mono text-[9px] tracking-[0.16em] text-paper-3/45 uppercase">
                            {d.label}
                          </span>
                          <span className="mt-0.5 block truncate text-[14px] font-medium text-paper">
                            {d.value}
                          </span>
                          <span className="mt-0.5 block text-[11.5px] text-paper-3/50">{d.note}</span>
                        </span>
                      </>
                    );
                    return (
                      <li key={d.label}>
                        {d.href ? (
                          <a
                            href={d.href}
                            target={d.external ? "_blank" : undefined}
                            rel={d.external ? "noreferrer noopener" : undefined}
                            className="group flex items-start gap-3 py-3.5 transition-colors"
                          >
                            {content}
                          </a>
                        ) : (
                          <div className="group flex items-start gap-3 py-3.5">{content}</div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="rounded-2xl border border-ink/12 bg-paper p-6 md:p-7">
                <Eyebrow no="→">What happens next</Eyebrow>
                <ol className="mt-5 space-y-5">
                  {nextSteps.map((s) => (
                    <li key={s.no} className="group flex gap-4">
                      <span className="font-display grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-ink/15 text-[12px] font-extrabold text-ink transition-colors duration-300 group-hover:border-ember group-hover:bg-ember group-hover:text-white">
                        {s.no}
                      </span>
                      <span>
                        <span className="block text-[14.5px] font-semibold text-ink">{s.title}</span>
                        <span className="mt-1 block text-[13px] leading-snug text-mute">{s.body}</span>
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="rounded-2xl border border-ember/25 bg-ember/[0.05] p-6 md:p-7">
                <div className="flex items-center gap-2.5">
                  <IconClock width={16} height={16} className="text-ember" />
                  <Eyebrow>Tips for a fast reply</Eyebrow>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {contactNotes.map((n) => (
                    <li key={n} className="flex items-start gap-2.5 text-[13.5px] leading-snug text-ink-700">
                      <span className="mt-[7px] h-1 w-3 shrink-0 rounded-full bg-ember" />
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand
        title={["STILL DECIDING?"]}
        lead="Read a case study first, or check the starting prices. Both take two minutes and neither obliges you to anything."
        primary="Send Enquiry"
        secondary={{ label: "View pricing", to: "/pricing" }}
      />
    </>
  );
}

/* --------------------------------- field ui -------------------------------- */

function inputCls(hasError: boolean) {
  return cn(
    "w-full rounded-lg border bg-paper-2/40 px-4 py-3 text-[14.5px] text-ink placeholder:text-mute/55 transition-all duration-300 outline-none",
    hasError
      ? "border-rust bg-rust/[0.05] focus:border-rust focus:ring-2 focus:ring-rust/20"
      : "border-line focus:border-ember focus:bg-paper focus:ring-2 focus:ring-ember/15",
  );
}

function SelectArrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="pointer-events-none absolute top-1/2 right-3.5 -translate-y-1/2 text-mute"
      aria-hidden
    >
      <path d="m5 9 7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Field({
  label,
  required,
  error,
  hint,
  children,
  className,
}: {
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={cn("block", className)} data-error={Boolean(error)}>
      <span className="mb-2 flex items-baseline justify-between gap-3">
        <span className="font-mono text-[10px] tracking-[0.16em] text-ink-700 uppercase">
          {label}
          {required && <span className="ml-1 text-ember">*</span>}
        </span>
        {hint && <span className="font-mono text-[9px] text-mute">{hint}</span>}
      </span>
      {children}
      <span
        className={cn(
          "mt-1.5 block overflow-hidden text-[11.5px] text-rust transition-all duration-300",
          error ? "max-h-8 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        {error}
      </span>
    </label>
  );
}
