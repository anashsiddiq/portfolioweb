import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CTABand, PageHero } from "@/components/Chrome";
import { Btn, Chip, Eyebrow, Reveal, SectionHead, cn } from "@/components/ui";
import { IconArrowRight, IconCheck, IconClock, IconQuote } from "@/components/Icons";
import { posts } from "@/lib/data";

const tags = ["All", "Clients", "Development"];

/* ================================== LIST ================================== */

export function Blog() {
  const [tag, setTag] = useState("All");
  const list = useMemo(
    () => (tag === "All" ? posts : posts.filter((p) => p.tag === tag)),
    [tag],
  );
  const [lead, ...rest] = list;

  return (
    <>
      <PageHero
        eyebrow="Blog"
        no="09"
        title={["NOTES FOR", "CLIENTS, NOT SEO BAIT"]}
        lead="Short, practical articles on website costs, choosing between core PHP and Laravel, and what an admin dashboard is actually for. Written for business owners making a decision — no listicles, no invented statistics."
        meta={[
          { label: "Articles", value: `${posts.length} published` },
          { label: "Topics", value: "Cost · Stack choice · Dashboards" },
          { label: "Written for", value: "Non-technical owners" },
          { label: "Reading time", value: "4–6 min each" },
          { label: "Updates", value: "When something changes" },
        ]}
      />

      {/* filters */}
      <div className="sticky top-[68px] z-30 border-b border-line bg-paper/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1400px] items-center gap-2 px-5 py-3 md:px-8">
          {tags.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTag(t)}
              className={cn(
                "rounded-full border px-4 py-2 font-mono text-[10.5px] tracking-[0.14em] uppercase transition-all duration-300",
                tag === t
                  ? "border-ember bg-ember text-white"
                  : "border-ink/15 text-ink-700 hover:border-ink hover:bg-ink hover:text-paper",
              )}
            >
              {t}
            </button>
          ))}
          <span className="ml-auto hidden font-mono text-[10px] tracking-[0.16em] text-mute uppercase sm:block">
            {list.length} article{list.length === 1 ? "" : "s"}
          </span>
        </div>
      </div>

      <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-20">
        {lead && (
          <Reveal>
            <Link
              to={`/blog/${lead.slug}`}
              className="group grid gap-8 rounded-3xl border border-ink/12 bg-paper p-6 transition-all duration-500 hover:-translate-y-1 hover:border-ember md:grid-cols-[1.15fr_0.85fr] md:items-center md:p-10"
            >
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-ember px-3 py-1 font-mono text-[9px] tracking-[0.16em] text-white uppercase">
                    Latest
                  </span>
                  <Chip>{lead.tag}</Chip>
                  <span className="flex items-center gap-1.5 font-mono text-[9.5px] tracking-[0.14em] text-mute uppercase">
                    <IconClock width={12} height={12} />
                    {lead.readTime}
                  </span>
                </div>
                <h2 className="font-display mt-5 text-[clamp(1.9rem,4.4vw,3.1rem)] leading-[0.98] font-extrabold tracking-[-0.04em] text-ink transition-colors duration-300 group-hover:text-ember">
                  {lead.title}
                </h2>
                <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-mute text-pretty">
                  {lead.excerpt}
                </p>
                <span className="mt-7 inline-flex items-center gap-2 font-mono text-[10.5px] tracking-[0.16em] text-ink uppercase transition-colors group-hover:text-ember">
                  Read article
                  <IconArrowRight
                    width={15}
                    height={15}
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                  />
                </span>
              </div>

              <div className="relative">
                <span className="font-display block text-[clamp(5rem,14vw,10rem)] leading-[0.7] font-extrabold text-ink/[0.07] transition-colors duration-500 group-hover:text-ember/25">
                  {String(posts.indexOf(lead) + 1).padStart(2, "0")}
                </span>
                <div className="mt-4 space-y-2.5">
                  {(lead.body.find((b) => b.list)?.list ?? []).slice(0, 4).map((l) => (
                    <div key={l} className="flex items-center gap-2.5">
                      <IconCheck width={12} height={12} className="shrink-0 text-ember" />
                      <span className="text-[12.5px] leading-snug text-mute">{l}</span>
                    </div>
                  ))}
                </div>
                <span className="mt-5 block font-mono text-[9.5px] tracking-[0.14em] text-mute uppercase">
                  {lead.date}
                </span>
              </div>
            </Link>
          </Reveal>
        )}

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 70}>
              <Link
                to={`/blog/${p.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-ink/12 bg-paper p-6 transition-all duration-400 hover:-translate-y-1.5 hover:border-ember"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9.5px] tracking-[0.16em] text-ember uppercase">
                    {p.tag}
                  </span>
                  <span className="font-mono text-[9.5px] text-mute">
                    {String(posts.indexOf(p) + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display mt-4 text-[1.3rem] leading-[1.12] font-bold tracking-[-0.025em] text-ink transition-colors duration-300 group-hover:text-ember">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-mute">{p.excerpt}</p>
                <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                  <span className="font-mono text-[9.5px] tracking-[0.12em] text-mute uppercase">
                    {p.date}
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-[9.5px] tracking-[0.12em] text-ink-700 uppercase transition-colors group-hover:text-ember">
                    {p.readTime}
                    <IconArrowRight
                      width={12}
                      height={12}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {list.length === 0 && (
          <p className="py-16 text-center text-[15px] text-mute">
            Nothing published in this topic yet.
          </p>
        )}

        {/* suggest a topic */}
        <Reveal delay={120}>
          <div className="mt-6 grid gap-6 rounded-2xl border border-ink/12 bg-ink p-7 text-paper md:grid-cols-[1.2fr_auto] md:items-center md:p-9">
            <div>
              <Eyebrow tone="light">Missing a topic?</Eyebrow>
              <h3 className="font-display mt-4 text-[clamp(1.6rem,3.4vw,2.3rem)] leading-tight font-extrabold tracking-[-0.03em]">
                Ask a question and it becomes the next article.
              </h3>
              <p className="mt-4 max-w-xl text-[14.5px] leading-relaxed text-paper-3/70">
                Most of these posts started as something a client asked during a first call. If
                you're stuck on a decision — cost, technology, whether you need a dashboard —
                send it over.
              </p>
            </div>
            <Btn to="/contact" variant="light">
              Suggest a topic
            </Btn>
          </div>
        </Reveal>
      </section>

      <CTABand
        title={["READING IS FREE.", "SO IS THE FIRST CALL."]}
        lead="If an article here answered part of your question, the rest is usually answered faster in a conversation."
        primary="Contact Me"
        secondary={{ label: "See pricing", to: "/pricing" }}
      />
    </>
  );
}

/* ================================== POST ================================== */

export function BlogPost() {
  const { slug } = useParams();
  const index = posts.findIndex((p) => p.slug === slug);

  if (index === -1) {
    return (
      <section className="mx-auto flex min-h-[70vh] max-w-[1400px] flex-col items-start justify-center px-5 py-32 md:px-8">
        <Eyebrow no="404">Article not found</Eyebrow>
        <h1 className="font-display mt-5 text-[clamp(2.2rem,6vw,4rem)] leading-none font-extrabold tracking-[-0.04em] text-ink">
          This post isn't
          <br />
          here (yet).
        </h1>
        <Btn to="/blog" className="mt-8">
          Back to all articles
        </Btn>
      </section>
    );
  }

  const post = posts[index];
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article>
        <PageHero
          eyebrow={`${post.tag} · ${post.readTime}`}
          no="✎"
          title={[post.title.split(" ").slice(0, Math.ceil(post.title.split(" ").length / 2)).join(" "), post.title.split(" ").slice(Math.ceil(post.title.split(" ").length / 2)).join(" "), "."]}
          lead={post.excerpt}
          meta={[
            { label: "Published", value: post.date },
            { label: "Reading time", value: post.readTime },
            { label: "Topic", value: post.tag },
            { label: "Written by", value: "Anash Siddiqui" },
            { label: "Audience", value: "Business owners" },
          ]}
        >
          <Reveal delay={400}>
            <Link
              to="/blog"
              className="group mt-9 inline-flex items-center gap-2 font-mono text-[10.5px] tracking-[0.16em] text-paper-3/70 uppercase transition-colors hover:text-ember-soft"
            >
              <IconArrowRight
                width={14}
                height={14}
                className="rotate-180 transition-transform duration-300 group-hover:-translate-x-1"
              />
              All articles
            </Link>
          </Reveal>
        </PageHero>

        <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_280px] lg:gap-16">
            {/* body */}
            <div className="max-w-3xl">
              <div className="space-y-9">
                {post.body.map((b, i) => (
                  <Reveal key={i} delay={i * 40}>
                    <div>
                      {b.heading && (
                        <h2 className="font-display mb-4 flex items-baseline gap-4 text-[clamp(1.5rem,3.2vw,2.15rem)] leading-tight font-extrabold tracking-[-0.03em] text-ink">
                          <span className="font-mono text-[11px] tracking-[0.16em] text-ember">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          {b.heading}
                        </h2>
                      )}
                      {b.para && (
                        <p className="text-[16.5px] leading-[1.75] text-ink-700 text-pretty">
                          {b.para}
                        </p>
                      )}
                      {b.list && (
                        <ul className="mt-1 grid gap-2.5 border-l-2 border-line pl-5">
                          {b.list.map((l) => (
                            <li key={l} className="group flex items-start gap-2.5">
                              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-ember transition-transform duration-300 group-hover:scale-150" />
                              <span className="text-[15.5px] leading-relaxed text-ink-700">{l}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* pull quote */}
              <Reveal delay={80}>
                <figure className="relative mt-14 overflow-hidden rounded-2xl border border-ember/25 bg-ember/[0.06] p-7 md:p-9">
                  <IconQuote
                    width={34}
                    height={34}
                    className="absolute top-5 right-6 text-ember/25"
                  />
                  <blockquote className="font-display relative text-[clamp(1.3rem,2.6vw,1.85rem)] leading-[1.25] font-bold tracking-[-0.025em] text-ink">
                    A website is not a product with a shelf price — it's a scope. Two businesses can
                    both say "I need five pages" and end up forty hours apart.
                  </blockquote>
                  <figcaption className="mt-5 font-mono text-[10px] tracking-[0.16em] text-rust uppercase">
                    The single idea behind this article
                  </figcaption>
                </figure>
              </Reveal>

              {/* footer of article */}
              <Reveal delay={80}>
                <div className="mt-12 flex flex-wrap items-center justify-between gap-5 border-t border-line pt-8">
                  <div>
                    <Eyebrow>Found this useful?</Eyebrow>
                    <p className="font-display mt-2 text-[1.35rem] leading-tight font-bold tracking-[-0.025em] text-ink">
                      The follow-up question is usually the valuable one.
                    </p>
                  </div>
                  <Btn to="/contact">Ask it directly</Btn>
                </div>
              </Reveal>
            </div>

            {/* sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-2xl border border-ink/12 bg-paper-2/60 p-6">
                <Eyebrow>On this page</Eyebrow>
                <ol className="mt-4 space-y-2">
                  {post.body
                    .map((b, i) => ({ b, i }))
                    .filter(({ b }) => b.heading)
                    .map(({ b, i }) => (
                      <li key={i}>
                        <span className="flex items-baseline gap-2.5 text-[13px] leading-snug text-ink-700">
                          <span className="font-mono text-[9.5px] text-ember">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          {b.heading}
                        </span>
                      </li>
                    ))}
                </ol>
              </div>

              <div className="rounded-2xl border border-ink/12 bg-ink p-6 text-paper">
                <span className="font-display grid h-12 w-12 place-items-center rounded-xl bg-ember text-[15px] font-extrabold text-white">
                  AS
                </span>
                <p className="font-display mt-4 text-[1.2rem] leading-tight font-bold">
                  Anash Siddiqui
                </p>
                <p className="mt-1 font-mono text-[9.5px] tracking-[0.14em] text-ember-soft uppercase">
                  PHP &amp; Laravel Developer
                </p>
                <p className="mt-4 text-[13px] leading-relaxed text-paper-3/70">
                  Three years building business websites, Laravel applications and admin dashboards
                  for clients across India.
                </p>
                <Btn to="/about" variant="light" className="mt-5 w-full justify-center">
                  About me
                </Btn>
              </div>

              <div className="rounded-2xl border border-ink/12 bg-paper p-6">
                <Eyebrow>Keep reading</Eyebrow>
                <div className="mt-4 space-y-4">
                  {related.map((r) => (
                    <Link key={r.slug} to={`/blog/${r.slug}`} className="group block">
                      <span className="font-mono text-[9px] tracking-[0.14em] text-mute uppercase">
                        {r.tag} · {r.readTime}
                      </span>
                      <span className="font-display mt-1 block text-[1.05rem] leading-snug font-bold tracking-[-0.02em] text-ink transition-colors group-hover:text-ember">
                        {r.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>
      </article>

      <SectionHeadWrap />
    </>
  );
}

function SectionHeadWrap() {
  return (
    <section className="border-t border-line bg-paper-2/70 py-16 md:py-20">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <SectionHead
          align="between"
          eyebrow="Next step"
          title={
            <>
              From article
              <br />
              to actual project.
            </>
          }
          lead="Every post here exists to make a first conversation shorter. If one of them described your situation, send it along with your requirement."
          action={
            <div className="mt-6 flex flex-wrap gap-3">
              <Btn to="/contact">Start a Project</Btn>
              <Btn to="/projects" variant="ghost">
                See case studies
              </Btn>
            </div>
          }
        />
      </div>
    </section>
  );
}
