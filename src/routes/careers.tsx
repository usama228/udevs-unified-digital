import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { JOBS, SITE } from "@/data/site";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers at U Devs — Jobs, Internships & Remote Roles" },
      {
        name: "description",
        content:
          "Open full time, part time, remote and internship roles at U Devs. Apply now and grow with a fast-moving technology company.",
      },
      { property: "og:title", content: "Careers at U Devs" },
      { property: "og:description", content: "Build your career with engineers who mentor." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

function CareersPage() {
  return (
    <>
      <PageHero
        kicker="Careers"
        title="Grow faster with people who review your code"
        text="Internships, full time, part time and remote roles across engineering, design, marketing and teaching."
      />
      <Section>
        <SectionHeading kicker="Open roles" title="Find your seat at U Devs" />
        <div className="mx-auto mt-14 max-w-4xl space-y-4">
          {JOBS.map((j, i) => (
            <Reveal key={j.title} delay={i * 50}>
              <div className="border-border bg-card flex flex-col gap-4 rounded-2xl border p-6 transition-colors hover:border-[var(--primary)] sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-lg">{j.title}</h3>
                  <p className="text-muted-foreground mt-1 flex items-center gap-3 text-sm">
                    <span className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-semibold">
                      {j.type}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" /> {j.location}
                    </span>
                  </p>
                </div>
                <a
                  href={`mailto:${SITE.email}?subject=Application: ${encodeURIComponent(j.title)}`}
                  className="bg-brand-gradient text-primary-foreground inline-flex shrink-0 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
                >
                  Apply Now
                </a>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            Don't see your role? Send your CV to{" "}
            <a href={`mailto:${SITE.email}`} className="text-primary font-semibold">
              {SITE.email}
            </a>
          </p>
          <Link
            to="/register"
            className="border-border hover:border-primary mt-6 inline-flex rounded-full border px-6 py-3.5 text-sm font-semibold transition-colors"
          >
            Register your interest
          </Link>
        </Reveal>
      </Section>
    </>
  );
}