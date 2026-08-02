import { useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight, PlayCircle, Star, Check, ShieldCheck, Zap } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import { Reveal, TextReveal } from "@/components/site/Reveal";
import { Magnetic } from "@/components/site/MagneticButton";
import { Counter } from "@/components/site/Counter";
import { Section, SectionHeading } from "@/components/site/Section";
import {
  DIVISIONS,
  INDUSTRIES,
  PROCESS,
  SERVICE_GROUPS,
  STATS,
  TECHNOLOGIES,
  TESTIMONIALS,
  WHY_US,
} from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "U Devs — Software & Digital Solutions" },
      {
        name: "description",
        content:
          "We build future ready digital solutions: custom software, AI, ERP, CRM, web, mobile, cloud, marketing, training programs and Quran learning.",
      },
      { property: "og:title", content: "U Devs — Software & Digital Solutions" },
      {
        property: "og:description",
        content:
          "Premium software development, professional training academy and modern Quran learning platform.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const HERO_TAGS = [
  "Custom Software", "AI", "ERP", "CRM", "Web Development", "Mobile Apps",
  "Cloud Solutions", "Digital Marketing", "Training Programs", "Quran Learning",
];

function Index() {
  const heroRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 90]), {
    stiffness: 90,
    damping: 24,
  });

  const onHeroMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduced) return;
    const el = heroRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--px", `${((e.clientX - r.left) / r.width - 0.5) * 2}`);
    el.style.setProperty("--py", `${((e.clientY - r.top) / r.height - 0.5) * 2}`);
  };

  return (
    <>
      <section
        ref={heroRef}
        onMouseMove={onHeroMove}
        className="bg-night relative flex min-h-[92vh] items-center overflow-hidden pt-32 pb-24"
      >
        <div className="bg-aurora absolute inset-0 opacity-70" />
        <div className="bg-grid absolute inset-0 opacity-30" />
        <motion.div style={{ y: parallaxY }} className="absolute inset-0">
          <div className="animate-drift bg-primary/20 absolute -top-40 -left-24 h-[30rem] w-[30rem] rounded-full blur-[160px]" />
          <div className="animate-float bg-accent/12 absolute right-0 bottom-0 h-[24rem] w-[24rem] rounded-full blur-[160px]" />
        </motion.div>
        {!reduced
          ? Array.from({ length: 14 }).map((_, i) => (
              <motion.span
                key={i}
                className="bg-accent/50 absolute h-1 w-1 rounded-full"
                style={{ left: `${(i * 37) % 96}%`, top: `${(i * 53) % 88}%` }}
                animate={{ y: [0, -26, 0], opacity: [0.15, 0.7, 0.15] }}
                transition={{
                  duration: 6 + (i % 5),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.35,
                }}
              />
            ))
          : null}

        <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <Reveal variant="blur">
              <span className="border-primary-foreground/15 bg-primary-foreground/5 text-primary-foreground/70 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-medium tracking-[0.22em] uppercase">
                U Devs · Success Starts Here
              </span>
            </Reveal>
            <h1 className="text-primary-foreground mt-7 text-4xl leading-[1.06] font-semibold tracking-[-0.03em] sm:text-5xl xl:text-[3.85rem]">
              <TextReveal text="We Build" delay={120} />
              <span className="text-accent">
                <TextReveal text="Future Ready" delay={280} />
              </span>
              <TextReveal text="Digital Solutions" delay={420} />
            </h1>
            <Reveal delay={220} variant="blur">
              <p className="text-primary-foreground/65 mt-6 max-w-xl text-base leading-relaxed">
                Custom software, AI systems, ERP/CRM platforms and digital growth —
                engineered by a team that ships, reviews and maintains.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <div className="mt-7 flex flex-wrap gap-2">
                {HERO_TAGS.map((t) => (
                  <span
                    key={t}
                    className="border-primary-foreground/12 text-primary-foreground/65 hover:border-accent/40 hover:text-primary-foreground hover:bg-primary-foreground/5 rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Magnetic>
                  <Link
                    to="/contact"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow shine group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300"
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Magnetic>
                <Magnetic strength={0.2}>
                  <Link
                    to="/contact"
                    className="border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/10 inline-flex items-center gap-2 rounded-full border px-6 py-3.5 text-sm font-semibold transition-colors duration-300"
                  >
                    Book Consultation
                  </Link>
                </Magnetic>
                <a
                  href="https://www.youtube.com/watch?v=q0jCUiWt1yw"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground link-underline inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                >
                  <PlayCircle className="h-5 w-5" /> Watch Company Video
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={260} variant="scale">
            <motion.div
              className="relative"
              style={
                reduced
                  ? undefined
                  : {
                      transform:
                        "translate3d(calc(var(--px, 0) * 10px), calc(var(--py, 0) * 10px), 0)",
                      transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1)",
                    }
              }
            >
              <div className="glass-card zoom-media overflow-hidden rounded-[1.5rem] p-2">
                <img
                  src={heroDashboard}
                  alt="U Devs analytics dashboard interface"
                  width={1280}
                  height={1024}
                  className="w-full rounded-[1.25rem]"
                />
              </div>

              <motion.div
                animate={reduced ? undefined : { y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="glass-card absolute -bottom-6 -left-4 hidden rounded-2xl px-5 py-4 sm:block"
              >
                <p className="text-primary-foreground text-2xl font-bold">
                  <Counter value={100} suffix="+" />
                </p>
                <p className="text-primary-foreground/60 text-xs tracking-wide">
                  Projects delivered
                </p>
              </motion.div>

              <motion.div
                animate={reduced ? undefined : { y: [0, 10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                className="glass-card text-primary-foreground absolute -top-5 -right-2 hidden items-center gap-2 rounded-2xl px-4 py-3 text-xs font-semibold md:flex"
              >
                <ShieldCheck className="text-accent h-4 w-4" /> Enterprise-grade delivery
              </motion.div>

              <motion.div
                animate={reduced ? undefined : { y: [0, -8, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                className="glass-card text-primary-foreground absolute top-1/2 -right-6 hidden items-center gap-2 rounded-2xl px-4 py-3 text-xs font-semibold lg:flex"
              >
                <Zap className="text-accent h-4 w-4" /> 99.9% uptime
              </motion.div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      <section className="border-border bg-surface border-y py-12">
        <div className="container-x grid grid-cols-2 gap-8 md:grid-cols-5">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 70} className="text-center">
              <p className="font-display text-4xl font-semibold tracking-tight">
                {s.label === "Support" ? "24/7" : <Counter value={s.value} suffix={s.suffix} />}
              </p>
              <p className="text-muted-foreground mt-1 text-xs tracking-[0.14em] uppercase">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <Section>
        <SectionHeading
          kicker="Our Ecosystem"
          title="Three divisions. One standard of excellence."
          text="Software that scales, training that changes careers, and Quran learning that fits real life."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {DIVISIONS.map((d, i) => (
            <Reveal key={d.name} delay={i * 90}>
              <div className="group border-border bg-card relative h-full overflow-hidden rounded-3xl border p-8 transition-all duration-300 card-hover">
                <div
                  className={
                    d.tone === "emerald"
                      ? "bg-emerald/15 absolute -top-16 -right-16 h-40 w-40 rounded-full blur-3xl"
                      : d.tone === "accent"
                        ? "bg-accent/20 absolute -top-16 -right-16 h-40 w-40 rounded-full blur-3xl"
                        : "bg-primary/20 absolute -top-16 -right-16 h-40 w-40 rounded-full blur-3xl"
                  }
                />
                <p className="text-muted-foreground relative text-xs font-semibold tracking-[0.18em] uppercase">
                  {d.kicker}
                </p>
                <h3 className="relative mt-3 text-2xl">{d.name}</h3>
                <p className="text-muted-foreground relative mt-3 text-sm leading-relaxed">
                  {d.blurb}
                </p>
                <ul className="relative mt-6 space-y-2.5">
                  {d.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm">
                      <Check
                        className={
                          d.tone === "emerald"
                            ? "text-emerald h-4 w-4 shrink-0"
                            : "text-primary h-4 w-4 shrink-0"
                        }
                      />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  to={d.to}
                  className="text-primary relative mt-7 inline-flex items-center gap-2 text-sm font-semibold"
                >
                  Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-surface border-border border-y">
        <SectionHeading
          kicker="Services"
          title="Everything you need to build, launch and scale"
          text="From a first MVP to enterprise platforms serving thousands of users every day."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {SERVICE_GROUPS.map((g, i) => (
            <Reveal key={g.title} delay={i * 60}>
              <div className="border-border bg-card h-full rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]">
                <h3 className="text-lg">{g.title}</h3>
                <ul className="text-muted-foreground mt-4 space-y-1.5 text-sm">
                  {g.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <Link
            to="/services"
            className="bg-brand-gradient text-primary-foreground inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold"
          >
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </Section>

      <Section>
        <SectionHeading kicker="Industries" title="Domain knowledge that shortens delivery" />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind} delay={i * 30}>
              <span className="border-border bg-card hover:border-primary hover:text-primary rounded-full border px-5 py-2.5 text-sm font-medium transition-colors">
                {ind}
              </span>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-night text-primary-foreground relative overflow-hidden">
        <div className="bg-primary/25 absolute top-0 left-1/3 h-80 w-80 rounded-full blur-[130px]" />
        <div className="relative">
          <SectionHeading
            kicker="Why U Devs"
            title={<span className="text-primary-foreground">Chosen for delivery, kept for trust</span>}
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {WHY_US.map((w, i) => (
              <Reveal key={w.title} delay={i * 60}>
                <div className="glass-card h-full rounded-2xl p-6">
                  <h3 className="text-primary-foreground text-lg">{w.title}</h3>
                  <p className="text-primary-foreground/70 mt-2 text-sm">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-surface border-border border-y">
        <SectionHeading
          kicker="Process"
          title="A transparent path from idea to impact"
          text="Every engagement follows the same seven steps, with demos and reports at each stage."
        />
        <div className="relative mt-14">
          <div className="bg-border absolute top-6 right-0 left-0 hidden h-px lg:block" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-7">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={i * 70}>
                <div className="relative">
                  <span className="bg-brand-gradient text-primary-foreground font-display flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold">
                    {p.step}
                  </span>
                  <h3 className="mt-4 text-base">{p.title}</h3>
                  <p className="text-muted-foreground mt-1.5 text-sm">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading kicker="Testimonials" title="What our clients and students say" />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <figure className="border-border bg-card card-hover h-full rounded-3xl border p-8">
                <div className="text-accent flex gap-1">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="fill-current h-4 w-4" />
                  ))}
                </div>
                <blockquote className="mt-5 text-base leading-relaxed">"{t.text}"</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="bg-brand-gradient text-primary-foreground flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold">
                    {t.name.split(" ").map((p) => p[0]).join("")}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">{t.name}</span>
                    <span className="text-muted-foreground block text-xs">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-surface border-border border-t">
        <SectionHeading kicker="Technologies" title="A stack chosen for longevity" />
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {TECHNOLOGIES.map((t) => (
            <span
              key={t}
              className="border-border bg-card text-muted-foreground hover:text-primary hover:border-primary rounded-xl border px-4 py-2 text-sm font-medium transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="bg-night shadow-glow relative overflow-hidden rounded-[2rem] px-8 py-16 text-center md:px-16">
            <div className="bg-accent/20 absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-[120px]" />
            <h2 className="text-primary-foreground relative text-3xl md:text-5xl">
              Ready to build something remarkable?
            </h2>
            <p className="text-primary-foreground/70 relative mx-auto mt-4 max-w-2xl">
              Join U Devs as a client, join U Devs Hub as a student, or join the Quran Hub
              as a learner. One registration, three doors.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/register"
                className="bg-brand-gradient text-primary-foreground rounded-full px-7 py-3.5 text-sm font-semibold"
              >
                REGISTER NOW
              </Link>
              <Link
                to="/portfolio"
                className="border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/10 rounded-full border px-7 py-3.5 text-sm font-semibold"
              >
                See our work
              </Link>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
