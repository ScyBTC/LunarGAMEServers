import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState, useEffect } from "react";

const IntroLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [visible, setVisible] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 500);
    }, shouldReduceMotion ? 300 : 2000);
    return () => clearTimeout(timer);
  }, [onComplete, shouldReduceMotion]);

  const handleSkip = () => {
    setVisible(false);
    setTimeout(onComplete, 300);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Eclipse glow */}
          <motion.div
            className="absolute rounded-full"
            initial={{ width: 0, height: 0, opacity: 0 }}
            animate={{ width: 400, height: 400, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: "radial-gradient(circle, hsl(190 90% 55% / 0.06) 0%, transparent 70%)",
            }}
          />

          {/* Logo rising */}
          <motion.div
            className="relative"
            initial={{ y: 40, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{
              duration: shouldReduceMotion ? 0.2 : 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Halo ring */}
            <motion.div
              className="absolute -inset-8 rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 0.3] }}
              transition={{ duration: 1.5, delay: 0.3 }}
              style={{
                background: "radial-gradient(circle, transparent 50%, hsl(190 90% 55% / 0.1) 70%, transparent 85%)",
              }}
            />
            <img
              src="/brand/logo.png"
              alt="LunarGAMEServers"
              className="w-20 h-20 md:w-28 md:h-28 object-contain brightness-0 invert drop-shadow-[0_0_30px_hsl(190_90%_55%_/_0.25)]"
            />
          </motion.div>

          {/* Wordmark below */}
          <motion.p
            className="absolute mt-40 md:mt-48 font-display text-sm tracking-[0.3em] uppercase text-muted-foreground/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            LunarGAMEServers
          </motion.p>

          {/* Skip button */}
          <button
            onClick={handleSkip}
            className="absolute bottom-8 right-8 text-xs text-muted-foreground/40 hover:text-muted-foreground transition-colors font-display tracking-wider uppercase"
          >
            Skip
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroLoader;
