import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { COURSES, SITE } from "@/data/site";

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title: "U Devs Hub — Internships, Mentorship & Tech Courses" },
      {
        name: "description",
        content:
          "Project based training, internships, mentorship, certification and interview preparation that turn students into hire-ready engineers.",
      },
      { property: "og:title", content: "U Devs Hub — Internships, Mentorship & Tech Courses" },
      { property: "og:description", content: "Learn by shipping real products with senior mentors." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/training" },
    ],
    links: [{ rel: "canonical", href: "/training" }],
  }),
  component: TrainingPage,
});

const BENEFITS = [
  "Internship placements",
  "1:1 mentorship",
  "Live interactive classes",
  "Project based learning",
  "Verified certification",
  "GitHub portfolio reviews",
  "Freelancing guidance",
  "Interview preparation",
  "Career counselling",
];

function TrainingPage() {
  return (
    <>
      <PageHero
        kicker="U Devs Hub"
        title="Training that ends with a job, not a certificate"
        text="Learn inside a working software company: real sprints, real reviews and a portfolio employers believe."
      >
        <div className="flex flex-wrap gap-3">
          <Link
            to="/register"
            className="bg-brand-gradient text-primary-foreground rounded-full px-6 py-3.5 text-sm font-semibold"
          >
            Join U Devs Hub
          </Link>
          <a
            href={SITE.hub}
            target="_blank"
            rel="noreferrer"
            className="border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/10 rounded-full border px-6 py-3.5 text-sm font-semibold"
          >
            Visit udevs-hub.com
          </a>
        </div>
      </PageHero>

      <Section>
        <SectionHeading kicker="Programs" title="Courses built around shipped work" />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {COURSES.map((c, i) => (
            <Reveal key={c.title} delay={i * 60}>
              <div className="border-border bg-card h-full rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]">
                <span className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-semibold">
                  {c.weeks}
                </span>
                <h3 className="mt-4 text-lg">{c.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm">{c.level}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-surface border-border border-y">
        <SectionHeading kicker="What's included" title="Everything a first job requires" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b, i) => (
            <Reveal key={b} delay={i * 50}>
              <div className="border-border bg-card flex items-center gap-3 rounded-2xl border p-5">
                <Check className="text-primary h-5 w-5 shrink-0" />
                <span className="text-sm font-medium">{b}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}