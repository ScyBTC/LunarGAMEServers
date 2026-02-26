import { servers } from "@/data/mock";
import ServerCard from "@/components/servers/ServerCard";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FeaturedServers = () => {
  const featured = servers.filter((s) => s.status === "online").slice(0, 4);

  return (
    <section className="relative py-28 lg:py-36 px-4">
      {/* Section divider accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <p className="text-xs font-display font-semibold text-primary uppercase tracking-[0.25em] mb-4">Mission Control</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-[-0.02em]">Active Servers</h2>
          <p className="text-muted-foreground max-w-md text-[15px]">
            Jump into any of our live community servers. All maintained, moderated, and always online.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featured.map((server, i) => (
            <ServerCard key={server.id} server={server} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Link
            to="/servers"
            className="inline-flex items-center gap-2 text-sm font-display font-medium text-primary/70 hover:text-primary transition-colors duration-200"
          >
            View all servers
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5 3L9.5 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedServers;
