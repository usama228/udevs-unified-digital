import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, Section } from "@/components/site/Section";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Register — Join U Devs, U Devs Hub or Quran Hub" },
      {
        name: "description",
        content:
          "Register with U Devs to start a project, join the training academy as a student, or enrol in online Quran classes.",
      },
      { property: "og:title", content: "Register — Join the U Devs ecosystem" },
      { property: "og:description", content: "One registration, three doors: build, learn or recite." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/register" },
    ],
    links: [{ rel: "canonical", href: "/register" }],
  }),
  component: RegisterPage,
});

const OPTIONS = [
  {
    title: "Join U Devs",
    text: "Start a software, AI, ERP or marketing project with our delivery team.",
    cta: "Start a project",
    to: "/contact" as const,
  },
  {
    title: "Join U Devs Hub",
    text: "Apply for internships, mentorship and project based training programs.",
    cta: "Apply as a student",
    external: SITE.register,
  },
  {
    title: "Join Quran Hub",
    text: "Book three free trial classes with certified male or female teachers.",
    cta: "Book free trial",
    external: SITE.whatsapp,
  },
];

function RegisterPage() {
  return (
    <>
      <PageHero
        kicker="Register"
        title="One registration, three doors"
        text="Tell us which part of the U Devs ecosystem you want to join and we will get back within one business day."
      />
      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {OPTIONS.map((o, i) => (
            <Reveal key={o.title} delay={i * 80}>
              <div className="border-border bg-card flex h-full flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)]">
                <h2 className="text-2xl">{o.title}</h2>
                <p className="text-muted-foreground mt-3 flex-1 text-sm leading-relaxed">{o.text}</p>
                {o.external ? (
                  <a
                    href={o.external}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-brand-gradient text-primary-foreground mt-7 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold"
                  >
                    {o.cta} <ArrowRight className="h-4 w-4" />
                  </a>
                ) : (
                  <Link
                    to={o.to!}
                    className="bg-brand-gradient text-primary-foreground mt-7 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold"
                  >
                    {o.cta} <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}