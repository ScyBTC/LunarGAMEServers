import { games } from "@/data/mock";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const GameShowcase = () => {
  return (
    <section className="relative py-28 lg:py-36 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 text-center"
        >
          <p className="text-xs font-display font-semibold text-primary uppercase tracking-[0.25em] mb-4">Our Games</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-[-0.02em]">
            Choose your world.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {games.map((game, i) => (
            <motion.div
              key={game.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to={`/servers?game=${game.slug}`}
                className="block group relative overflow-hidden rounded-2xl aspect-[3/4] border border-border/20 hover:border-primary/25 transition-all duration-700"
              >
                {/* Cover image */}
                <img
                  src={game.coverPath}
                  alt={`${game.name} cover art`}
                  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-[1.04] transition-all duration-[900ms] ease-out"
                  loading="lazy"
                />

                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground mb-2 tracking-[-0.01em]">
                    {game.name}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-4 max-w-[90%]">
                    {game.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-display font-medium text-primary/80 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300">
                    View Servers
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-70">
                      <path d="M4.5 2.5L8 6L4.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>

                {/* Top corner accent line */}
                <div className="absolute top-0 right-0 w-16 h-px bg-gradient-to-l from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameShowcase;
