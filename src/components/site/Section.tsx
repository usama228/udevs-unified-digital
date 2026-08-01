import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-20 md:py-28", className)}>
      <div className="container-x">{children}</div>
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
      <h2 className="mt-5 text-3xl leading-tight md:text-5xl">{title}</h2>
      {text ? (
        <p className="mt-4 text-base text-muted-foreground md:text-lg">{text}</p>
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
    <section className="bg-night relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="animate-drift bg-primary/25 absolute -top-24 -left-24 h-96 w-96 rounded-full blur-[120px]" />
      <div className="animate-drift bg-accent/20 absolute -right-24 bottom-0 h-96 w-96 rounded-full blur-[120px]" />
      <div className="container-x relative">
        <Reveal className="max-w-3xl">
          <span className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground/80 inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase">
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