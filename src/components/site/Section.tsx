import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Section({
  children,
  className,
  id,
  tone = "plain",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  /** "alt" gives the section a soft tinted band for vertical rhythm */
  tone?: "plain" | "alt";
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-24 md:py-32",
        tone === "alt" && "section-alt border-border/60 border-y",
        className,
      )}
    >
      <div className="container-x relative">{children}</div>
    </section>
  );
}

export function SectionHeading({
  kicker,
  title,
  text,
  align = "center",
}: {
  kicker?: string;
  title: ReactNode;
  text?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal
      variant="blur"
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      {kicker ? (
        <span className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-primary uppercase">
          {kicker}
        </span>
      ) : null}
      <h2 className="mt-5 text-3xl leading-[1.1] tracking-[-0.03em] md:text-5xl">
        {title}
      </h2>
      {text ? (
        <p className="text-muted-foreground mt-5 text-base leading-relaxed md:text-lg">
          {text}
        </p>
      ) : null}
    </Reveal>
  );
}

export function PageHero({
  kicker,
  title,
  text,
  children,
}: {
  kicker: string;
  title: string;
  text: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-night relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="bg-aurora absolute inset-0 opacity-60" />
      <div className="bg-grid absolute inset-0 opacity-[0.07]" />
      <div className="animate-drift bg-primary/25 absolute -top-24 -left-24 h-96 w-96 rounded-full blur-[120px]" />
      <div className="animate-drift bg-accent/20 absolute -right-24 bottom-0 h-96 w-96 rounded-full blur-[120px]" />
      <div className="container-x relative">
        <Reveal className="max-w-3xl" variant="blur">
          <span className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground/80 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase backdrop-blur-sm">
            <span className="bg-accent h-1.5 w-1.5 rounded-full" />
            {kicker}
          </span>
          <h1 className="text-primary-foreground mt-6 text-4xl leading-[1.05] md:text-6xl">
            {title}
          </h1>
          <p className="text-primary-foreground/70 mt-5 max-w-2xl text-lg">{text}</p>
          {children ? <div className="mt-8">{children}</div> : null}
        </Reveal>
      </div>
    </section>
  );
}