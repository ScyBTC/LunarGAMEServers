import { servers, games } from "@/data/mock";
import ServerCard from "@/components/servers/ServerCard";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FeaturedServers = () => {
  const featured = servers.filter((s) => s.status === "online").slice(0, 4);

  return (
    <section className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs font-display font-semibold text-primary uppercase tracking-[0.2em] mb-3">Mission Control</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">Active Servers</h2>
          <p className="text-muted-foreground max-w-md">Jump into any of our live community servers. All maintained, moderated, and always online.</p>
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
          className="mt-8 text-center"
        >
          <Link
            to="/servers"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary/70 hover:text-primary transition-colors"
          >
            View all servers →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedServers;
