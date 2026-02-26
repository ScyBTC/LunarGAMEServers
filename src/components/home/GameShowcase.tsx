import { games } from "@/data/mock";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const GameShowcase = () => {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="text-xs font-display font-semibold text-primary uppercase tracking-[0.2em] mb-3">Our Games</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Choose your world.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {games.map((game, i) => (
            <motion.div
              key={game.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link
                to={`/servers?game=${game.slug}`}
                className="block group relative overflow-hidden rounded-xl aspect-[4/5] glass-panel border border-border/30 hover:border-primary/30 transition-all duration-500"
              >
                {/* Cover image */}
                <img
                  src={game.coverPath}
                  alt={game.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">{game.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{game.description}</p>
                  <span className="inline-block mt-3 text-xs font-medium text-primary group-hover:translate-x-1 transition-transform">
                    View Servers →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameShowcase;
