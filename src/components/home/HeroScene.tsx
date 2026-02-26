import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useMemo, useRef } from "react";

const HeroScene = () => {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const moonY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const orbitScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const stars = useMemo(
    () =>
      Array.from({ length: 80 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.8 + 0.3,
        delay: Math.random() * 6,
        duration: Math.random() * 4 + 2,
      })),
    []
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* Deep space base */}
      <div className="absolute inset-0 bg-background" />

      {/* Multi-layer radial glow — eclipse effect */}
      <motion.div
        className="absolute inset-0"
        animate={shouldReduceMotion ? {} : { opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 42%, hsl(190 90% 55% / 0.06) 0%, hsl(190 80% 40% / 0.02) 40%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 40% 35% at 50% 42%, hsl(230 60% 30% / 0.12) 0%, transparent 60%)",
        }}
      />

      {/* Starfield */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
              backgroundColor: star.size > 1.2 ? "hsl(190 60% 80%)" : "hsl(220 20% 75%)",
            }}
            animate={shouldReduceMotion ? { opacity: 0.4 } : { opacity: [0.05, 0.6, 0.05] }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Orbit arcs with parallax */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ scale: shouldReduceMotion ? 1 : orbitScale }}
      >
        {[
          { size: 320, opacity: 0.15, dur: 50, dir: 1, dash: "4 12" },
          { size: 480, opacity: 0.08, dur: 70, dir: -1, dash: "2 20" },
          { size: 650, opacity: 0.05, dur: 100, dir: 1, dash: "1 30" },
          { size: 850, opacity: 0.03, dur: 120, dir: -1, dash: "1 40" },
        ].map((ring, i) => (
          <motion.svg
            key={i}
            className="absolute"
            width={ring.size}
            height={ring.size}
            viewBox={`0 0 ${ring.size} ${ring.size}`}
            style={{ opacity: ring.opacity }}
            animate={shouldReduceMotion ? {} : { rotate: 360 * ring.dir }}
            transition={{ duration: ring.dur, repeat: Infinity, ease: "linear" }}
          >
            <circle
              cx={ring.size / 2}
              cy={ring.size / 2}
              r={ring.size / 2 - 1}
              fill="none"
              stroke="hsl(190 90% 55%)"
              strokeWidth="0.5"
              strokeDasharray={ring.dash}
            />
          </motion.svg>
        ))}
      </motion.div>

      {/* Logo as the moon core */}
      <motion.div
        className="absolute flex items-center justify-center pointer-events-none"
        style={{ y: shouldReduceMotion ? 0 : moonY }}
      >
        <motion.div
          className="relative"
          animate={shouldReduceMotion ? {} : { y: [-4, 4, -4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Outer glow halo */}
          <motion.div
            className="absolute -inset-16 md:-inset-24 rounded-full"
            animate={shouldReduceMotion ? {} : { opacity: [0.2, 0.45, 0.2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background:
                "radial-gradient(circle, hsl(190 90% 55% / 0.08) 20%, hsl(190 80% 45% / 0.03) 50%, transparent 70%)",
            }}
          />

          {/* Inner glow ring */}
          <motion.div
            className="absolute -inset-6 md:-inset-8 rounded-full"
            animate={shouldReduceMotion ? {} : { opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background:
                "radial-gradient(circle, transparent 55%, hsl(190 90% 55% / 0.12) 70%, transparent 85%)",
            }}
          />

          {/* Eclipse crescent mask */}
          <div className="w-36 h-36 md:w-52 md:h-52 rounded-full relative overflow-hidden">
            {/* Ambient surface */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 40% 35%, hsl(190 30% 25% / 0.3) 0%, hsl(230 20% 10% / 0.2) 60%, transparent 80%)",
              }}
            />

            {/* The logo — the moon's core */}
            <div className="absolute inset-0 flex items-center justify-center p-6 md:p-8">
              <img
                src="/brand/logo.png"
                alt="LunarGAMEServers — community game network"
                className="w-full h-full object-contain brightness-0 invert opacity-70 drop-shadow-[0_0_20px_hsl(190_90%_55%_/_0.2)]"
              />
            </div>

            {/* Eclipse shadow overlay */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "linear-gradient(145deg, transparent 30%, hsl(230 25% 5% / 0.7) 65%, hsl(230 25% 5% / 0.85) 80%)",
              }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-3xl mx-auto mt-32 md:mt-40"
        style={{ y: shouldReduceMotion ? 0 : contentY }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-[-0.03em] mb-6 leading-[0.85]">
            <span className="text-gradient-lunar">From players,</span>
            <br />
            <span className="text-foreground">for players.</span>
          </h1>
        </motion.div>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-lg mx-auto mb-12 leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Official community servers. Events. Fair play. Always online.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="https://discord.gg/lunargame"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-3.5 bg-primary text-primary-foreground font-display font-semibold rounded-xl text-sm tracking-wide overflow-hidden transition-all duration-300"
          >
            <span className="relative z-10">Join Discord</span>
            <div className="absolute inset-0 glow-cyan-strong opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <Link
            to="/servers"
            className="px-8 py-3.5 font-display font-medium rounded-xl border border-border/60 text-secondary-foreground hover:border-primary/40 hover:text-foreground bg-secondary/50 backdrop-blur-sm transition-all duration-300 text-sm tracking-wide"
          >
            View Servers
          </Link>
          <Link
            to="/events"
            className="px-6 py-3 text-muted-foreground hover:text-primary font-display font-medium transition-colors duration-200 text-sm tracking-wide"
          >
            See Events →
          </Link>
        </motion.div>
      </motion.div>

      {/* Film grain overlay */}
      <div className="noise-overlay absolute inset-0 pointer-events-none" />

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroScene;
