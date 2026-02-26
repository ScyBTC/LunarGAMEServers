import { Server, games } from "@/data/mock";
import StatusPill from "@/components/ui/StatusPill";
import { motion } from "framer-motion";
import { useState } from "react";
import { Users, MapPin, ChevronRight } from "lucide-react";

interface ServerCardProps {
  server: Server;
  index?: number;
}

const ServerCard = ({ server, index = 0 }: ServerCardProps) => {
  const [showConnect, setShowConnect] = useState(false);
  const game = games.find((g) => g.slug === server.gameSlug);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="glass-panel rounded-xl p-5 hover:border-primary/20 transition-all duration-300 group"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-semibold text-sm text-foreground truncate">{server.name}</h3>
          <p className="text-xs text-muted-foreground mt-0.5">{game?.name}</p>
        </div>
        <StatusPill status={server.status} />
      </div>

      <p className="text-xs text-muted-foreground mb-4 line-clamp-2 leading-relaxed">{server.description}</p>

      <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <Users size={12} className="text-primary/60" />
          <span className={server.status === "online" ? "text-foreground" : ""}>{server.playersOnline}</span>
          <span>/ {server.maxPlayers}</span>
        </span>
        <span className="flex items-center gap-1">
          <MapPin size={12} className="text-primary/60" />
          {server.region}
        </span>
        <span className="text-muted-foreground/50">{server.lastCheckedAt}</span>
      </div>

      {/* Tags */}
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        {server.tags.map((tag) => (
          <span key={tag} className="px-2 py-0.5 text-[10px] font-medium bg-primary/5 text-primary/70 border border-primary/10 rounded-md uppercase tracking-wider">
            {tag}
          </span>
        ))}
      </div>

      {/* Connect */}
      <button
        onClick={() => setShowConnect(!showConnect)}
        className="flex items-center gap-1 text-xs font-medium text-primary/70 hover:text-primary transition-colors"
      >
        How to Join
        <ChevronRight size={12} className={`transition-transform ${showConnect ? "rotate-90" : ""}`} />
      </button>
      {showConnect && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="mt-3 p-3 bg-muted/50 rounded-lg border border-border/30"
        >
          <code className="text-xs text-primary/80 break-all">{server.connectInfo}</code>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ServerCard;
