import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative border-t border-border/20 overflow-hidden">
      {/* Subtle logo watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 pointer-events-none opacity-[0.015]">
        <img
          src="/brand/logo.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-contain brightness-0 invert"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
          {/* Brand column */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-8 h-8 flex-shrink-0">
                <img
                  src="/brand/logo.png"
                  alt="LunarGAMEServers logo"
                  className="w-8 h-8 object-contain brightness-0 invert opacity-80"
                />
              </div>
              <span className="font-display font-bold text-base tracking-tight">
                <span className="text-foreground">Lunar</span>
                <span className="text-primary">GAME</span>
                <span className="text-muted-foreground font-medium">Servers</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              A community-driven game network built by players who care. No hosting, no services — just great servers and great people.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <h4 className="font-display font-semibold text-xs text-muted-foreground/70 mb-4 tracking-[0.15em] uppercase">Navigate</h4>
            <div className="space-y-2.5">
              {[
                { label: "Home", to: "/" },
                { label: "Servers", to: "/servers" },
                { label: "Events", to: "/events" },
                { label: "Rules", to: "/rules" },
                { label: "News", to: "/news" },
              ].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Community */}
          <div className="md:col-span-3">
            <h4 className="font-display font-semibold text-xs text-muted-foreground/70 mb-4 tracking-[0.15em] uppercase">Community</h4>
            <div className="space-y-2.5">
              <a
                href="https://discord.gg/lunargame"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Discord
              </a>
              <Link to="/support" className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                Support
              </Link>
              <Link to="/donate" className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                Support Us
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div className="md:col-span-3">
            <h4 className="font-display font-semibold text-xs text-muted-foreground/70 mb-4 tracking-[0.15em] uppercase">Legal</h4>
            <div className="space-y-2.5">
              <span className="block text-sm text-muted-foreground/60">Terms of Service</span>
              <span className="block text-sm text-muted-foreground/60">Privacy Policy</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-border/15 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground/50">© 2026 LunarGAMEServers. All rights reserved.</p>
          <p className="text-xs text-muted-foreground/40">Not affiliated with any game publishers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
