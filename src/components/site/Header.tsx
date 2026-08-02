import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { NAV } from "@/data/site";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { Magnetic } from "./MagneticButton";
import logoMark from "@/assets/udevs-mark.png.asset.json";

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

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="container-x">
        <div
          className={cn(
            "flex items-center justify-between gap-4 rounded-[1.5rem] px-4 py-2.5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            scrolled
              ? "glass-card shadow-soft backdrop-blur-xl"
              : "border border-transparent text-white",
          )}
        >
          <Link to="/" className="group flex items-center gap-2.5">
            <span className="logo-chip flex h-11 w-11 items-center justify-center rounded-2xl p-1.5 shadow-sm transition-all duration-300">
              <img
                src={logoMark.url}
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
            {NAV.map((item) => {
              const active = isActive(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-300",
                    scrolled
                      ? active
                        ? "text-primary"
                        : "hover:text-primary"
                      : active
                        ? "text-white"
                        : "text-white/80 hover:text-white",
                  )}
                >
                  {active ? (
                    <motion.span
                      layoutId="nav-active-pill"
                      transition={{ type: "spring", stiffness: 420, damping: 36 }}
                      className={cn(
                        "absolute inset-0 rounded-full",
                        scrolled ? "bg-primary/10" : "bg-white/15",
                      )}
                    />
                  ) : null}
                  <span className="relative">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Magnetic className="hidden sm:inline-flex">
              <Link
                to="/register"
                className="bg-brand-gradient text-primary-foreground shadow-glow shine inline-flex rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide"
              >
                REGISTER NOW
              </Link>
            </Magnetic>
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

        <AnimatePresence initial={false}>
          {open ? (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -12, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -12, height: 0 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card mt-2 overflow-hidden rounded-[1.5rem] p-3 xl:hidden"
            >
              <nav className="grid gap-1">
                {NAV.map((item, i) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.035, duration: 0.35 }}
                  >
                    <Link
                      to={item.to}
                      className="hover:bg-primary/10 block rounded-xl px-3 py-2.5 text-sm font-medium transition-colors"
                      activeProps={{ className: "text-primary bg-primary/10" }}
                      activeOptions={{ exact: item.to === "/" }}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <Link
                  to="/register"
                  className="bg-brand-gradient text-primary-foreground mt-1 rounded-xl px-3 py-2.5 text-center text-sm font-semibold"
                >
                  REGISTER NOW
                </Link>
              </nav>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}