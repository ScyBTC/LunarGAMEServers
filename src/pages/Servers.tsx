import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { servers } from "@/data/mock";
import ServerCard from "@/components/servers/ServerCard";
import FilterBar from "@/components/servers/FilterBar";
import { motion } from "framer-motion";

const Servers = () => {
  const [searchParams] = useSearchParams();
  const initialGame = searchParams.get("game");
  const [activeFilter, setActiveFilter] = useState<string | null>(initialGame);

  const filtered = activeFilter
    ? servers.filter((s) => s.gameSlug === activeFilter)
    : servers;

  const onlineCount = filtered.filter((s) => s.status === "online").length;

  return (
    <main className="pt-24 pb-16 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <p className="text-xs font-display font-semibold text-primary uppercase tracking-[0.2em] mb-3">Mission Control</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-3">Server Directory</h1>
          <p className="text-muted-foreground">
            {onlineCount} of {filtered.length} servers online
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((server, i) => (
            <ServerCard key={server.id} server={server} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">No servers found for this filter.</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Servers;
