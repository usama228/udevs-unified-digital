import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, Section } from "@/components/site/Section";
import { SITE, SOCIALS } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact U Devs — Start Your Project Today" },
      {
        name: "description",
        content:
          "Talk to the U Devs team about software, AI, ERP, CRM, marketing, training or Quran classes. Email, phone, WhatsApp and office details.",
      },
      { property: "og:title", content: "Contact U Devs" },
      { property: "og:description", content: "Tell us what you want to build and we'll reply within a day." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(6, "Enter a valid phone number"),
  country: z.string().min(2, "Enter your country"),
  company: z.string().optional(),
  service: z.string().min(1, "Select a service"),
  budget: z.string().min(1, "Select a budget"),
  message: z.string().min(10, "Tell us a little more (10+ characters)"),
});

type FormValues = z.infer<typeof schema>;

const SERVICES = [
  "Custom Software", "ERP / CRM", "AI & Automation", "Web Development",
  "Mobile App", "Cloud & DevOps", "Digital Marketing", "Training Program",
  "Quran Classes", "Other",
];
const BUDGETS = ["Under $2k", "$2k – $10k", "$10k – $50k", "$50k+", "Not sure yet"];

const inputCls =
  "border-border bg-background focus:ring-primary w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2";

function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    await new Promise((r) => setTimeout(r, 600));
    toast.success("Thanks! Your message is on its way.", {
      description: `We'll reply to ${values.email} within one business day.`,
    });
    reset();
  };

  return (
    <>
      <PageHero
        kicker="Contact"
        title="Let's talk about what you're building"
        text="Share a few details and the right specialist from our team will reply within one business day."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="border-border bg-card rounded-3xl border p-8"
              noValidate
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" error={errors.name?.message}>
                  <input className={inputCls} placeholder="Your full name" {...register("name")} />
                </Field>
                <Field label="Email" error={errors.email?.message}>
                  <input className={inputCls} placeholder="you@company.com" {...register("email")} />
                </Field>
                <Field label="Phone" error={errors.phone?.message}>
                  <input className={inputCls} placeholder="+92 300 0000000" {...register("phone")} />
                </Field>
                <Field label="Country" error={errors.country?.message}>
                  <input className={inputCls} placeholder="Pakistan" {...register("country")} />
                </Field>
                <Field label="Company (optional)">
                  <input className={inputCls} placeholder="Company name" {...register("company")} />
                </Field>
                <Field label="Service" error={errors.service?.message}>
                  <select className={inputCls} defaultValue="" {...register("service")}>
                    <option value="" disabled>
                      Select a service
                    </option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Budget" error={errors.budget?.message}>
                  <select className={inputCls} defaultValue="" {...register("budget")}>
                    <option value="" disabled>
                      Select a budget
                    </option>
                    {BUDGETS.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>
              <div className="mt-5">
                <Field label="Message" error={errors.message?.message}>
                  <textarea
                    rows={5}
                    className={inputCls}
                    placeholder="Tell us about your goals, timeline and current setup."
                    {...register("message")}
                  />
                </Field>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-brand-gradient text-primary-foreground mt-7 w-full rounded-full px-6 py-3.5 text-sm font-semibold transition-transform hover:scale-[1.01] disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </button>
            </form>
          </Reveal>

          <Reveal delay={100}>
            <div className="space-y-6">
              <div className="border-border bg-card rounded-3xl border p-8">
                <h2 className="text-xl">Office</h2>
                <ul className="text-muted-foreground mt-5 space-y-3.5 text-sm">
                  <li className="flex items-start gap-3">
                    <MapPin className="text-primary mt-0.5 h-4 w-4" /> {SITE.address}
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="text-primary mt-0.5 h-4 w-4" />
                    <a href={`mailto:${SITE.email}`} className="hover:text-primary">
                      {SITE.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="text-primary mt-0.5 h-4 w-4" />
                    <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-primary">
                      {SITE.phone}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MessageCircle className="text-emerald mt-0.5 h-4 w-4" />
                    <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="hover:text-primary">
                      Chat on WhatsApp
                    </a>
                  </li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="border-border hover:border-primary hover:text-primary rounded-full border px-3 py-1.5 text-xs font-medium transition-colors"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="border-border overflow-hidden rounded-3xl border">
                <iframe
                  title="U Devs office location"
                  src="https://www.google.com/maps?q=Lahore,Pakistan&output=embed"
                  loading="lazy"
                  className="h-72 w-full"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium">{label}</span>
      {children}
      {error ? <span className="text-destructive mt-1.5 block text-xs">{error}</span> : null}
    </label>
  );
}