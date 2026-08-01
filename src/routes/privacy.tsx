import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | U Devs" },
      { name: "description", content: "How U Devs collects, uses and protects your personal data." },
      { property: "og:title", content: "Privacy Policy | U Devs" },
      { property: "og:description", content: "Our commitments on data collection and protection." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero
        kicker="Legal"
        title="Privacy Policy"
        text="We collect the minimum information required to respond to enquiries and deliver our services."
      />
      <Section>
        <div className="text-muted-foreground mx-auto max-w-3xl space-y-6 text-sm leading-relaxed">
          <p>
            <strong className="text-foreground">Information we collect.</strong> Contact
            details you submit through our forms, such as name, email, phone, country,
            company and message content.
          </p>
          <p>
            <strong className="text-foreground">How we use it.</strong> To respond to your
            enquiry, deliver agreed services, process training or class enrolments, and send
            newsletters you opted into.
          </p>
          <p>
            <strong className="text-foreground">Sharing.</strong> We never sell your data. It
            is shared only with processors required to run our services, under confidentiality.
          </p>
          <p>
            <strong className="text-foreground">Retention and rights.</strong> You can request
            access, correction or deletion at any time by emailing {SITE.email}.
          </p>
          <p>
            <strong className="text-foreground">Cookies.</strong> We use essential cookies and
            anonymous analytics to improve site performance.
          </p>
        </div>
      </Section>
    </>
  );
}