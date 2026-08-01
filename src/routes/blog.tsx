import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, Section } from "@/components/site/Section";
import { POSTS } from "@/data/site";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — AI, Business, Technology & Career Insights | U Devs" },
      {
        name: "description",
        content:
          "Practical articles from the U Devs team on AI, enterprise software, technology trends, careers, training and Quran learning.",
      },
      { property: "og:title", content: "Blog — Insights from the U Devs team" },
      { property: "og:description", content: "Writing about AI, engineering, business and learning." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <PageHero
        kicker="Blogs"
        title="Ideas worth shipping"
        text="Field notes from engineers, mentors and teachers inside the U Devs ecosystem."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <article className="group border-border bg-card h-full rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)]">
                <div className="text-muted-foreground flex items-center gap-3 text-xs">
                  <span className="bg-primary/10 text-primary rounded-full px-3 py-1 font-semibold">
                    {p.category}
                  </span>
                  <span>{p.date}</span>
                  <span>· {p.read}</span>
                </div>
                <h2 className="group-hover:text-primary mt-4 text-xl transition-colors">
                  {p.title}
                </h2>
                <p className="text-muted-foreground mt-3 text-sm">{p.excerpt}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}