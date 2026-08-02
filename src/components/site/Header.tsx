import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { NAV } from "@/data/site";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import logo from "@/assets/udevs-logo.png.asset.json";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="container-x">
        <div
          className={cn(
            "flex items-center justify-between gap-4 rounded-2xl px-4 py-2.5 transition-all duration-300",
          scrolled ? "glass-card" : "border border-transparent text-white",
          )}
        >
          <Link to="/" className="group flex items-center gap-2.5">
            <span
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-2xl p-1.5 transition-all duration-300",
                scrolled ? "bg-primary/8" : "bg-white/12 backdrop-blur-sm",
              )}
            >
              <img
                src={logo.url}
                alt="U Devs logo"
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </span>
            <span className="font-display text-lg leading-none font-bold">
              U Devs
              <span
                className={cn(
                  "mt-1 block text-[9.5px] font-medium tracking-[0.16em] uppercase",
                  scrolled ? "text-muted-foreground" : "text-white/70",
                )}
              >
                Software & Digital Solutions
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 xl:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "relative rounded-full px-3 py-2 text-sm font-medium transition-all duration-200",
                  scrolled
                    ? "hover:bg-primary/8 hover:text-primary"
                    : "text-white/85 hover:bg-white/10 hover:text-white",
                )}
                activeProps={{
                  className: scrolled
                    ? "text-primary bg-primary/10"
                    : "text-white bg-white/15",
                }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              to="/register"
              className="bg-brand-gradient text-primary-foreground shadow-glow hidden rounded-full px-5 py-2.5 text-sm font-semibold transition-transform hover:scale-[1.03] sm:inline-flex"
            >
              REGISTER NOW
            </Link>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-full border xl:hidden",
                scrolled ? "border-border" : "border-white/30 text-white",
              )}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {open ? (
          <div className="glass-card mt-2 rounded-2xl p-3 xl:hidden">
            <nav className="grid gap-1">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="hover:bg-primary/10 rounded-xl px-3 py-2.5 text-sm font-medium"
                  activeProps={{ className: "text-primary bg-primary/10" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/register"
                className="bg-brand-gradient text-primary-foreground mt-1 rounded-xl px-3 py-2.5 text-center text-sm font-semibold"
              >
                REGISTER NOW
              </Link>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}