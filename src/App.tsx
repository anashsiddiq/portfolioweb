import { BrowserRouter , Link, Route, Routes, useLocation } from "react-router-dom";
import Layout from "@/components/Chrome";
import { Btn, Eyebrow } from "@/components/ui";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Projects from "@/pages/Projects";
import CaseStudy from "@/pages/CaseStudy";
import Skills from "@/pages/Skills";
import Process from "@/pages/Process";
import Testimonials from "@/pages/Testimonials";
import Contact from "@/pages/Contact";
import Pricing from "@/pages/Pricing";
import { Blog, BlogPost } from "@/pages/Blog";
import { navLinks } from "@/lib/data";


function NotFound() {
  const { pathname } = useLocation();
  return (
    <section className="blueprint-dark relative flex min-h-[80vh] items-center overflow-hidden bg-ink px-5 py-32 text-paper md:px-8">
      <div
        aria-hidden
        className="animate-drift pointer-events-none absolute -top-32 -left-20 h-[55vh] w-[55vh] rounded-full bg-[radial-gradient(circle,rgba(240,78,35,0.3),transparent_65%)] blur-[70px]"
      />
      <div className="relative mx-auto w-full max-w-[1400px]">
        <span className="font-display block text-[clamp(6rem,22vw,17rem)] leading-[0.72] font-extrabold tracking-[-0.06em] text-white/[0.07] select-none">
          404
        </span>
        <Eyebrow tone="light" no="✕">
          Page not found
        </Eyebrow>
        <h1 className="font-display mt-5 max-w-3xl text-[clamp(2.2rem,6.4vw,4.4rem)] leading-[0.94] font-extrabold tracking-[-0.045em]">
          This route doesn't exist —{" "}
          <span className="text-ember">which is a 404, not a bug.</span>
        </h1>
        <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-paper-3/70">
          You tried <code className="rounded bg-white/10 px-2 py-0.5 font-mono text-[13px] text-ember-soft">{pathname}</code>.
          Nothing is registered here. Pick a page below and I'll take you somewhere real.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Btn to="/" variant="light">
            Back home
          </Btn>
          <Btn to="/projects" variant="ghost" className="border-white/25 text-paper hover:border-ember hover:bg-ember">
            View projects
          </Btn>
        </div>
        <nav className="mt-14 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/12 pt-8">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="group flex items-baseline gap-2 font-mono text-[10.5px] tracking-[0.14em] text-paper-3/60 uppercase transition-colors hover:text-ember-soft"
            >
              <span className="h-px w-0 bg-ember transition-all duration-300 group-hover:w-4" />
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:slug" element={<CaseStudy />} />
          <Route path="skills" element={<Skills />} />
          <Route path="process" element={<Process />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="contact" element={<Contact />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter >
  );
}
