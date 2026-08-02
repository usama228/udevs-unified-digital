import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, MapPin, Video } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { INTERNSHIP, JOBS, SITE } from "@/data/site";

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

      <Section className="bg-muted/40 bg-grid relative overflow-hidden">
        <div className="bg-primary/10 animate-drift pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl" />
        <SectionHeading
          kicker="Internship"
          title="Join the U Devs Internship Programme"
          text="A 2.5 month remote internship with live classes on Google Meet, proper mentorship and structured training across engineering, AI/ML and marketing tracks. Unpaid, and on a performance basis it may lead to a job at U Devs."
        />
        <div className="mx-auto mt-14 max-w-5xl">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: "Duration", value: INTERNSHIP.duration },
              { label: "Mode", value: INTERNSHIP.mode },
              { label: "Compensation", value: INTERNSHIP.stipend },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 70}>
                <div className="border-border bg-card card-hover gradient-border shine h-full rounded-2xl border p-6">
                  <p className="text-muted-foreground text-xs font-semibold tracking-[0.16em] uppercase">
                    {s.label}
                  </p>
                  <p className="mt-2 text-sm font-medium">{s.value}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={100} className="mt-6">
            <div className="border-border bg-card gradient-border card-hover rounded-2xl border p-6 sm:p-8">
              <h3 className="text-lg">Available tracks</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {INTERNSHIP.tracks.map((t, i) => (
                  <span
                    key={t}
                    style={{ animationDelay: `${i * 60}ms` }}
                    className="bg-primary/10 text-primary animate-rise-in shine rounded-full px-4 py-2 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {INTERNSHIP.perks.map((p) => (
                  <li
                    key={p}
                    className="text-muted-foreground lift-sm border-border/60 bg-background/40 flex items-start gap-2 rounded-xl border p-3 text-sm"
                  >
                    <Check className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={SITE.register}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-brand-gradient text-primary-foreground shine inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold shadow-glow transition-transform duration-200 hover:scale-105 active:scale-95"
                >
                  Get Registered
                </a>
                <span className="text-muted-foreground inline-flex items-center gap-2 text-sm">
                  <Video className="h-4 w-4" /> Classes held live on Google Meet
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}