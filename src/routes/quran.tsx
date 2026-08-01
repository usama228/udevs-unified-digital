import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { QURAN_COURSES } from "@/data/site";

export const Route = createFileRoute("/quran")({
  head: () => ({
    meta: [
      { title: "U Devs Quran Hub — Online Quran Classes Worldwide" },
      {
        name: "description",
        content:
          "Learn Qaida, Nazra, Tajweed, Hifz, translation and Tafseer online with certified male and female teachers. Kids and weekend classes available.",
      },
      { property: "og:title", content: "U Devs Quran Hub — Online Quran Classes Worldwide" },
      { property: "og:description", content: "A professional Islamic learning platform for every age." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/quran" },
    ],
    links: [{ rel: "canonical", href: "/quran" }],
  }),
  component: QuranPage,
});

const FEATURES = [
  { title: "Certified Teachers", text: "Qualified male and female Qaris and scholars." },
  { title: "Flexible Timings", text: "Weekday, weekend and late-night slots across time zones." },
  { title: "One-to-One Classes", text: "Personal attention with structured progress reports." },
  { title: "Kids Friendly", text: "Patient, playful teaching designed for young learners." },
  { title: "Worldwide Students", text: "Families joining from 10+ countries." },
  { title: "Free Trial", text: "Three trial classes before you commit." },
];

function QuranPage() {
  return (
    <>
      <PageHero
        kicker="U Devs Quran Hub"
        title="Learn the Quran with structure, patience and care"
        text="A modern Islamic learning platform for children, adults and families — taught online by certified teachers."
      >
        <Link
          to="/register"
          className="bg-emerald text-emerald-foreground inline-flex rounded-full px-6 py-3.5 text-sm font-semibold"
        >
          Join Quran Hub
        </Link>
      </PageHero>

      <Section>
        <SectionHeading kicker="Courses" title="From first letters to deep understanding" />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {QURAN_COURSES.map((c, i) => (
            <Reveal key={c.title} delay={i * 60}>
              <div className="group border-border bg-card relative h-full overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1">
                <div className="bg-emerald/15 absolute -top-14 -right-14 h-32 w-32 rounded-full blur-2xl transition-transform duration-500 group-hover:scale-125" />
                <h3 className="relative text-lg">{c.title}</h3>
                <p className="text-muted-foreground relative mt-2 text-sm">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-surface border-border border-y">
        <SectionHeading kicker="Why families choose us" title="Calm, consistent and accountable" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 60}>
              <div className="border-border bg-card h-full rounded-2xl border p-6">
                <span className="bg-emerald/15 text-emerald inline-flex rounded-full px-3 py-1 text-xs font-semibold">
                  Quran Hub
                </span>
                <h3 className="mt-4 text-lg">{f.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}