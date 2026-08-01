import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { INDUSTRIES, PROCESS, SERVICE_GROUPS, TECHNOLOGIES } from "@/data/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Software, AI, ERP, CRM & Cloud | U Devs" },
      {
        name: "description",
        content:
          "Custom software, enterprise ERP and CRM, AI automation, web and mobile apps, cloud, DevOps, SEO and digital marketing from U Devs.",
      },
      { property: "og:title", content: "Services — Software, AI, ERP, CRM & Cloud | U Devs" },
      {
        property: "og:description",
        content: "Full-stack engineering, AI and growth services for ambitious teams.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Services"
        title="Engineering, AI and growth under one roof"
        text="One accountable partner for strategy, design, development, launch and long-term support."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {SERVICE_GROUPS.map((g, i) => (
            <Reveal key={g.title} delay={i * 60}>
              <div className="border-border bg-card h-full rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]">
                <h2 className="text-2xl">{g.title}</h2>
                <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {g.items.map((it) => (
                    <li key={it} className="text-muted-foreground flex items-start gap-2 text-sm">
                      <Check className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-surface border-border border-y">
        <SectionHeading kicker="Industries" title="Sectors we know well" />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {INDUSTRIES.map((i) => (
            <span
              key={i}
              className="border-border bg-card hover:border-primary hover:text-primary rounded-full border px-5 py-2.5 text-sm font-medium transition-colors"
            >
              {i}
            </span>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading kicker="How we work" title="Seven steps, zero surprises" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, i) => (
            <Reveal key={p.step} delay={i * 60}>
              <div className="border-border bg-card h-full rounded-2xl border p-6">
                <span className="text-gradient font-display text-3xl font-bold">{p.step}</span>
                <h3 className="mt-3 text-lg">{p.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-surface border-border border-t">
        <SectionHeading kicker="Stack" title="Technologies we build with" />
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {TECHNOLOGIES.map((t) => (
            <span key={t} className="border-border bg-card rounded-xl border px-4 py-2 text-sm">
              {t}
            </span>
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <Link
            to="/contact"
            className="bg-brand-gradient text-primary-foreground inline-flex rounded-full px-7 py-3.5 text-sm font-semibold"
          >
            Book a consultation
          </Link>
        </Reveal>
      </Section>
    </>
  );
}