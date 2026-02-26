import { Link, useLocation } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Servers", path: "/servers" },
  { label: "Events", path: "/events" },
  { label: "Rules", path: "/rules" },
  { label: "News", path: "/news" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-panel border-b border-border/30 shadow-lg shadow-background/50"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo mark + wordmark */}
          <Link to="/" className="flex items-center gap-3 group" aria-label="LunarGAMEServers home">
            <div className="relative w-10 h-10 flex-shrink-0">
              {/* Glow behind logo */}
              <motion.div
                className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"
                style={{
                  background: "radial-gradient(circle, hsl(190 90% 55% / 0.4) 0%, transparent 70%)",
                }}
              />
              <img
                src="/brand/logo.png"
                alt="LunarGAMEServers logo"
                className="w-10 h-10 object-contain relative z-10 brightness-0 invert opacity-90 group-hover:opacity-100 transition-all duration-300 drop-shadow-[0_0_8px_hsl(190_90%_55%_/_0.5)] group-hover:scale-110"
              />
            </div>
            <span className="font-display font-bold text-base sm:text-lg tracking-tight">
              <span className="text-foreground">Lunar</span>
              <span className="text-primary group-hover:text-primary/80 transition-colors">GAME</span>
              <span className="text-muted-foreground font-medium">Servers</span>
            </span>
          </Link>

          {/* Desktop Nav with orbit indicator */}
          <div className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative px-4 py-2.5 text-sm font-medium transition-colors duration-200 group"
                >
                  <span className={isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"}>
                    {item.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-orbit"
                      className="absolute -bottom-0.5 left-3 right-3 h-[2px] rounded-full"
                      style={{
                        background: "linear-gradient(90deg, transparent, hsl(190 90% 55%), transparent)",
                        boxShadow: "0 0 8px hsl(190 90% 55% / 0.4)",
                      }}
                      transition={shouldReduceMotion ? { duration: 0 } : { type: "spring", stiffness: 400, damping: 28 }}
                    />
                  )}
                  {/* Orbit dot that follows active */}
                  {isActive && (
                    <motion.div
                      layoutId="nav-orbit-dot"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                      style={{ boxShadow: "0 0 6px hsl(190 90% 55% / 0.6)" }}
                      transition={shouldReduceMotion ? { duration: 0 } : { type: "spring", stiffness: 400, damping: 28 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Discord CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://discord.gg/lunargame"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-5 py-2 text-sm font-display font-semibold text-primary border border-primary/25 rounded-lg overflow-hidden group transition-all duration-300 hover:border-primary/50"
            >
              <span className="relative z-10">Join Discord</span>
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/15 transition-colors duration-300" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-muted-foreground hover:text-foreground p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden glass-panel border-t border-border/30 px-4 py-5 space-y-1"
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                location.pathname === item.path
                  ? "text-primary bg-primary/8"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-border/20 mt-2">
            <a
              href="https://discord.gg/lunargame"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2.5 text-sm font-medium text-primary hover:bg-primary/8 rounded-lg transition-all"
            >
              Join Discord →
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
