import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { NAV, SITE, SOCIALS } from "@/data/site";
import logoMark from "@/assets/udevs-mark.png.asset.json";

export function Footer() {
  return (
    <footer className="bg-night text-primary-foreground relative overflow-hidden">
      <div className="bg-accent/15 absolute -top-32 right-0 h-80 w-80 rounded-full blur-[120px]" />
      <div className="container-x relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="bg-primary-foreground flex h-12 w-12 items-center justify-center rounded-2xl p-2 shadow-sm">
                <img src={logoMark.url} alt="U Devs logo" className="h-full w-full object-contain" />
              </span>
              <span className="font-display text-xl leading-none font-bold">
                U Devs
                <span className="text-primary-foreground/60 mt-1 block text-[10px] font-medium tracking-[0.16em] uppercase">
                  Software &amp; Digital Solutions
                </span>
              </span>
            </div>
            <p className="text-primary-foreground/70 mt-4 max-w-sm text-sm leading-relaxed">
              A software and digital solutions company: a premium engineering studio, a
              professional training academy and a modern Quran learning platform under
              one brand.
            </p>
            <div className="text-primary-foreground/70 mt-6 space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> {SITE.email}
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> {SITE.phone}
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> {SITE.address}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-[0.16em] uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-[0.16em] uppercase">Ecosystem</h3>
            <ul className="text-primary-foreground/70 mt-4 space-y-2.5 text-sm">
              <li>
                <a href={SITE.website} className="hover:text-primary-foreground" target="_blank" rel="noreferrer">
                  udevs.company
                </a>
              </li>
              <li>
                <a href={SITE.hub} className="hover:text-primary-foreground" target="_blank" rel="noreferrer">
                  udevs-hub.com
                </a>
              </li>
              <li>
                <Link to="/quran" className="hover:text-primary-foreground">Quran Hub</Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-primary-foreground">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-primary-foreground">Terms</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-[0.16em] uppercase">Newsletter</h3>
            <p className="text-primary-foreground/70 mt-4 text-sm">
              Monthly insights on AI, engineering and career growth.
            </p>
            <form
              className="mt-4 flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                e.currentTarget.reset();
              }}
            >
              <input
                type="email"
                required
                placeholder="you@company.com"
                aria-label="Email address"
                className="border-primary-foreground/20 bg-primary-foreground/10 placeholder:text-primary-foreground/45 focus:ring-accent w-full rounded-full border px-4 py-2.5 text-sm outline-none focus:ring-2"
              />
              <button
                type="submit"
                className="bg-brand-gradient rounded-full px-4 py-2.5 text-sm font-semibold"
              >
                Join
              </button>
            </form>
            <div className="mt-6 flex flex-wrap gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="border-primary-foreground/20 text-primary-foreground/75 hover:border-accent/60 hover:text-primary-foreground hover:bg-primary-foreground/10 rounded-full border px-3 py-1.5 text-xs transition-all duration-200 hover:-translate-y-0.5"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-primary-foreground/15 text-primary-foreground/60 mt-12 flex flex-col gap-2 border-t pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} U Devs. All rights reserved.</p>
          <p>Founded by Usama Aslam · Co-founded by Warda Fatima</p>
        </div>
      </div>
    </footer>
  );
}