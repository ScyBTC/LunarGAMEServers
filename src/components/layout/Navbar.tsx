import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:glow-cyan transition-all duration-300">
              <div className="w-4 h-4 rounded-full bg-primary/60" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight">
              <span className="text-foreground">Lunar</span>
              <span className="text-primary">GAME</span>
              <span className="text-muted-foreground">Servers</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative px-4 py-2 text-sm font-medium transition-colors duration-200"
              >
                <span className={location.pathname === item.path ? "text-primary" : "text-muted-foreground hover:text-foreground"}>
                  {item.label}
                </span>
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Discord CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://discord.gg/lunargame"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary border border-primary/20 rounded-lg hover:bg-primary/20 transition-all duration-200"
            >
              Join Discord
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-muted-foreground hover:text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-panel border-t border-border/30 px-4 py-4 space-y-2"
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-2 rounded-lg text-sm font-medium ${
                location.pathname === item.path
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://discord.gg/lunargame"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 text-sm font-medium text-primary"
          >
            Join Discord
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
