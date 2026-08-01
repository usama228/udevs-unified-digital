import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | U Devs" },
      { name: "description", content: "The terms that govern the use of U Devs websites and services." },
      { property: "og:title", content: "Terms of Service | U Devs" },
      { property: "og:description", content: "Engagement, payment and intellectual property terms." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHero
        kicker="Legal"
        title="Terms of Service"
        text="Clear terms for projects, training programs and Quran classes delivered by U Devs."
      />
      <Section>
        <div className="text-muted-foreground mx-auto max-w-3xl space-y-6 text-sm leading-relaxed">
          <p>
            <strong className="text-foreground">Engagements.</strong> Project scope, timeline
            and pricing are defined in a signed proposal. Changes are handled through written
            change requests.
          </p>
          <p>
            <strong className="text-foreground">Payments.</strong> Invoices are issued per
            milestone or monthly retainer and are payable within the agreed terms.
          </p>
          <p>
            <strong className="text-foreground">Intellectual property.</strong> On full
            payment, ownership of delivered custom code transfers to the client, excluding
            third-party and open-source components.
          </p>
          <p>
            <strong className="text-foreground">Training and classes.</strong> Enrolment fees,
            attendance expectations and refund windows are shared at registration.
          </p>
          <p>
            <strong className="text-foreground">Liability.</strong> Our liability is limited to
            the fees paid for the affected service.
          </p>
        </div>
      </Section>
    </>
  );
}