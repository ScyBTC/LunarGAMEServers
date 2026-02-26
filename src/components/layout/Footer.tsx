import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 bg-space-deep/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-primary/60" />
              </div>
              <span className="font-display font-bold text-lg tracking-tight">
                <span className="text-foreground">Lunar</span>
                <span className="text-primary">GAME</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A community-driven game network. From players, for players.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold text-sm text-foreground mb-4 tracking-wide uppercase">Navigate</h4>
            <div className="space-y-2">
              {[{ label: "Home", to: "/" }, { label: "Servers", to: "/servers" }, { label: "Events", to: "/events" }, { label: "Rules", to: "/rules" }, { label: "News", to: "/news" }].map((l) => (
                <Link key={l.to} to={l.to} className="block text-sm text-muted-foreground hover:text-primary transition-colors">{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-display font-semibold text-sm text-foreground mb-4 tracking-wide uppercase">Community</h4>
            <div className="space-y-2">
              <a href="https://discord.gg/lunargame" target="_blank" rel="noopener noreferrer" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Discord</a>
              <Link to="/support" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Support</Link>
              <Link to="/donate" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Donate</Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold text-sm text-foreground mb-4 tracking-wide uppercase">Legal</h4>
            <div className="space-y-2">
              <span className="block text-sm text-muted-foreground">Terms of Service</span>
              <span className="block text-sm text-muted-foreground">Privacy Policy</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2026 LunarGAMEServers. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">Not affiliated with any game publishers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
