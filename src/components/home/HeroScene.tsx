import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { useMemo } from "react";

const HeroScene = () => {
  const shouldReduceMotion = useReducedMotion();

  const stars = useMemo(() => 
    Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
    })),
  []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Deep space background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Radial gradient - eclipse glow */}
      <motion.div
        className="absolute inset-0"
        animate={shouldReduceMotion ? {} : { opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: "radial-gradient(ellipse at 50% 40%, hsl(190 90% 55% / 0.08) 0%, transparent 60%)",
        }}
      />

      {/* Starfield */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-foreground"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
            }}
            animate={shouldReduceMotion ? {} : { opacity: [0.1, 0.7, 0.1] }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Orbit arcs */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="absolute w-[600px] h-[600px] orbit-line opacity-20"
          animate={shouldReduceMotion ? {} : { rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] orbit-line opacity-10"
          animate={shouldReduceMotion ? {} : { rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[800px] h-[800px] orbit-line opacity-[0.07]"
          animate={shouldReduceMotion ? {} : { rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Moon / crescent */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="relative"
          animate={shouldReduceMotion ? {} : { y: [-5, 5, -5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Moon body */}
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-muted/40 to-muted/10 border border-primary/10" />
            <div className="absolute inset-0 rounded-full" style={{
              background: "radial-gradient(circle at 35% 35%, hsl(190 90% 55% / 0.15) 0%, transparent 60%)",
            }} />
            {/* Eclipse shadow */}
            <div className="absolute inset-0 rounded-full" style={{
              background: "linear-gradient(135deg, transparent 40%, hsl(230 25% 5% / 0.8) 70%)",
            }} />
            {/* Glow ring */}
            <motion.div
              className="absolute -inset-4 rounded-full"
              animate={shouldReduceMotion ? {} : { opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{
                background: "radial-gradient(circle, transparent 50%, hsl(190 90% 55% / 0.1) 70%, transparent 80%)",
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[0.9]">
            <span className="text-gradient-lunar">From players,</span>
            <br />
            <span className="text-foreground">for players.</span>
          </h1>
        </motion.div>

        <motion.p
          className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Official community servers. Events. Fair play. Always online.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="https://discord.gg/lunargame"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-primary text-primary-foreground font-display font-semibold rounded-lg glow-cyan hover:glow-cyan-strong transition-all duration-300 text-sm tracking-wide"
          >
            Join Discord
          </a>
          <Link
            to="/servers"
            className="px-8 py-3 bg-secondary text-secondary-foreground font-display font-medium rounded-lg border border-border hover:border-primary/30 transition-all duration-300 text-sm tracking-wide"
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
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroScene;
