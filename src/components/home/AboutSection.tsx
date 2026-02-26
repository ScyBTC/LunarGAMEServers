import { motion } from "framer-motion";
import { Shield, Users, Calendar, Headphones } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Community-First",
    description: "Built by players who understand what makes gaming great. Every decision is community-driven.",
  },
  {
    icon: Shield,
    title: "Fair Play",
    description: "Active moderation, clear rules, and zero tolerance for cheating. Everyone plays fair.",
  },
  {
    icon: Calendar,
    title: "Regular Events",
    description: "Tournaments, wipe days, build contests, and community game nights every week.",
  },
  {
    icon: Headphones,
    title: "Always Staffed",
    description: "Dedicated staff team online daily. Issues resolved fast, community heard.",
  },
];

const AboutSection = () => {
  return (
    <section className="relative py-28 lg:py-36 px-4 overflow-hidden">
      {/* Subtle logo watermark — embossed motif */}
      <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 w-[500px] h-[500px] pointer-events-none opacity-[0.012]">
        <img
          src="/brand/logo.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-contain brightness-0 invert"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          {/* Left: editorial copy */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-display font-semibold text-primary uppercase tracking-[0.25em] mb-4">
              What is Lunar?
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-[1.05] tracking-[-0.02em]">
              A game network,
              <br />
              <span className="text-gradient-lunar">not a service.</span>
            </h2>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-[1.75] text-[15px]">
                LunarGAMEServers is a community of gamers who run and maintain official servers across multiple games.
                We're not selling hosting — we're building a home for players who want quality servers, fair moderation,
                and real community.
              </p>
              <p className="text-muted-foreground leading-[1.75] text-[15px]">
                Every server is staffed, maintained, and updated by our team. Join Discord, find your game, and start playing.
              </p>
            </div>
          </motion.div>

          {/* Right: feature cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="glass-panel rounded-xl p-6 group hover:border-primary/25 transition-all duration-500 hover:bg-card/80"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/8 border border-primary/15 flex items-center justify-center mb-4 group-hover:border-primary/30 transition-colors duration-300">
                    <feature.icon size={18} className="text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-sm text-foreground mb-2">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground leading-[1.7]">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
