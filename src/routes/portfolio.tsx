import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, Section } from "@/components/site/Section";
import { PROJECTS, PROJECT_FILTERS } from "@/data/site";
import { ExternalLink } from "lucide-react";

const FEATURED = PROJECTS.filter((p) => p.gallery);

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Case Studies & Delivered Projects | U Devs" },
      {
        name: "description",
        content:
          "Explore U Devs case studies across web, mobile, ERP, CRM, AI and WordPress projects delivered for global clients.",
      },
      { property: "og:title", content: "Portfolio — Case Studies & Delivered Projects | U Devs" },
      { property: "og:description", content: "Selected work from the U Devs engineering team." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const [filter, setFilter] = useState("All");
  const visible =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <>
      <PageHero
        kicker="Portfolio"
        title="Work that runs businesses every single day"
        text="Platforms handling production lines, patients, students, orders and payments in the real world."
      />

      <Section>
        <div className="flex flex-wrap justify-center gap-2.5">
          {PROJECT_FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={
                f === filter
                  ? "bg-brand-gradient text-primary-foreground rounded-full px-5 py-2.5 text-sm font-semibold"
                  : "border-border hover:border-primary hover:text-primary rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors"
              }
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <article className="group border-border bg-card h-full overflow-hidden rounded-3xl border transition-all duration-300 lift-lg cursor-glow">
                <div className="bg-night relative h-44 overflow-hidden">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={`${p.title} interface screenshot`}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <>
                      <div className="bg-primary/40 absolute -top-10 -left-6 h-40 w-40 rounded-full blur-3xl transition-transform duration-500 group-hover:scale-125" />
                      <div className="bg-accent/30 absolute right-0 bottom-0 h-32 w-32 rounded-full blur-3xl" />
                    </>
                  )}
                  <span className="text-primary-foreground/85 absolute bottom-4 left-6 text-xs font-semibold tracking-[0.18em] uppercase drop-shadow">
                    {p.category}
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="text-xl">{p.title}</h2>
                  <p className="text-muted-foreground mt-1 text-xs">{p.client}</p>
                  <p className="text-muted-foreground mt-3 text-sm">{p.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {p.link ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary mt-5 inline-flex items-center gap-1.5 text-sm font-semibold hover:underline"
                    >
                      Visit live site <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {FEATURED.map((project) => (
        <Section key={project.title} className="bg-surface border-border border-y">
          <Reveal>
            <p className="text-muted-foreground text-xs font-semibold tracking-[0.18em] uppercase">
              Featured case study
            </p>
            <h2 className="mt-2 text-3xl">{project.title}</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl">{project.summary}</p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {project.gallery?.map((shot, i) => (
              <Reveal key={shot.url} delay={i * 70}>
                <figure className="border-border bg-card overflow-hidden rounded-3xl border">
                  <img
                    src={shot.url}
                    alt={shot.caption}
                    loading="lazy"
                    className="w-full object-cover"
                  />
                  <figcaption className="text-muted-foreground p-5 text-sm">
                    {shot.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Section>
      ))}
    </>
  );
}