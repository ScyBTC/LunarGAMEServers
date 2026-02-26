import { motion } from "framer-motion";
import { Shield, Users, Calendar, Headphones } from "lucide-react";

const features = [
  { icon: Users, title: "Community-First", description: "Built by players who understand what makes gaming great. Every decision is community-driven." },
  { icon: Shield, title: "Fair Play", description: "Active moderation, clear rules, and zero tolerance for cheating. Everyone plays fair." },
  { icon: Calendar, title: "Regular Events", description: "Tournaments, wipe days, build contests, and community game nights every week." },
  { icon: Headphones, title: "Always Staffed", description: "Dedicated staff team online daily. Issues resolved fast, community heard." },
];

const AboutSection = () => {
  return (
    <section className="relative py-24 px-4">
      {/* Subtle watermark moon */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 rounded-full opacity-[0.02]" style={{
        background: "radial-gradient(circle, hsl(190 90% 55%) 0%, transparent 70%)",
      }} />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-display font-semibold text-primary uppercase tracking-[0.2em] mb-3">What is Lunar?</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
              A game network,<br />
              <span className="text-gradient-lunar">not a service.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              LunarGAMEServers is a community of gamers who run and maintain official servers across multiple games. We're not selling hosting — we're building a home for players who want quality servers, fair moderation, and real community.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every server is staffed, maintained, and updated by our team. Join Discord, find your game, and start playing.
            </p>
          </motion.div>

          {/* Right: feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="glass-panel rounded-xl p-5 group hover:border-primary/20 transition-all duration-300"
              >
                <feature.icon size={20} className="text-primary mb-3 group-hover:glow-cyan transition-all" />
                <h3 className="font-display font-semibold text-sm text-foreground mb-1">{feature.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
