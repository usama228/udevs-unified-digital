import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle, Phone } from "lucide-react";
import { SITE } from "@/data/site";

export function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3">
      {show ? (
        <button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="glass-card text-foreground flex h-11 w-11 items-center justify-center rounded-full"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      ) : null}
      <a
        href={`tel:${SITE.phone.replace(/\s/g, "")}`}
        aria-label="Call U Devs"
        className="bg-secondary text-secondary-foreground flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-105"
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href={SITE.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="bg-emerald text-emerald-foreground flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-105"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
    </div>
  );
}