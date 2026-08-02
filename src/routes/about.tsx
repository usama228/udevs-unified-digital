import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { STATS, TEAM, TIMELINE } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About U Devs — Our Story, Vision and Leadership" },
      {
        name: "description",
        content:
          "Founded by Usama Aslam and co-founded by Warda Fatima, U Devs delivers innovation, education and digital transformation worldwide.",
      },
      { property: "og:title", content: "About U Devs — Our Story, Vision and Leadership" },
      {
        property: "og:description",
        content: "The people, vision and milestones behind U Devs.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About U Devs"
        title="A technology company built on craft, mentorship and trust"
        text="U Devs began as a small studio obsessed with quality. Today it is a three-division ecosystem serving businesses, students and Quran learners across the world."
      />

      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="border-border bg-card h-full rounded-3xl border p-8">
              <p className="text-muted-foreground text-xs font-semibold tracking-[0.18em] uppercase">
                Founder & CEO
              </p>
              <h2 className="mt-2 text-2xl">Usama Aslam</h2>
              <h3 className="text-primary mt-6 text-sm font-semibold tracking-[0.16em] uppercase">
                Vision
              </h3>
              <p className="text-muted-foreground mt-2 leading-relaxed">
                To become one of the world's leading technology companies delivering
                innovation, education and digital transformation.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="border-border bg-card h-full rounded-3xl border p-8">
              <p className="text-muted-foreground text-xs font-semibold tracking-[0.18em] uppercase">
                Co-Founder
              </p>
              <h2 className="mt-2 text-2xl">Warda Fatima</h2>
              <h3 className="text-primary mt-6 text-sm font-semibold tracking-[0.16em] uppercase">
                Mission
              </h3>
              <p className="text-muted-foreground mt-2 leading-relaxed">
                Empowering businesses, startups and students through technology,
                mentorship and innovation.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-5">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 60} className="text-center">
              <p className="text-gradient font-display text-4xl font-bold">
                {s.label === "Support" ? "24/7" : <Counter value={s.value} suffix={s.suffix} />}
              </p>
              <p className="text-muted-foreground mt-1 text-sm">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-surface border-border border-y">
        <SectionHeading kicker="Journey" title="Milestones that shaped U Devs" />
        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="bg-border absolute top-0 bottom-0 left-4 w-px md:left-1/2" />
          <div className="space-y-10">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} delay={i * 80}>
                <div
                  className={`relative pl-12 md:w-1/2 md:pl-0 ${i % 2 ? "md:ml-auto md:pl-12" : "md:pr-12 md:text-right"}`}
                >
                  <span
                    className={`bg-brand-gradient absolute top-2 left-2.5 h-3 w-3 rounded-full ${i % 2 ? "md:-left-1.5" : "md:right-[-0.375rem] md:left-auto"}`}
                  />
                  <p className="text-primary text-sm font-semibold">{t.year}</p>
                  <h3 className="mt-1 text-xl">{t.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading kicker="Leadership" title="The team behind the work" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={i * 70}>
              <div className="group border-border bg-card rounded-3xl border p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)]">
                <span className="bg-brand-gradient text-primary-foreground font-display mx-auto flex h-20 w-20 items-center justify-center rounded-2xl text-2xl font-bold">
                  {m.initials}
                </span>
                <h3 className="mt-5 text-lg">{m.name}</h3>
                <p className="text-muted-foreground text-sm">{m.role}</p>
                <a
                  href="https://www.linkedin.com/company/udevs-software-house/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary mt-4 inline-block text-sm font-semibold opacity-0 transition-opacity group-hover:opacity-100"
                >
                  LinkedIn
                </a>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <Link
            to="/careers"
            className="bg-brand-gradient text-primary-foreground inline-flex rounded-full px-6 py-3.5 text-sm font-semibold"
          >
            Join the team
          </Link>
        </Reveal>
      </Section>
    </>
  );
}