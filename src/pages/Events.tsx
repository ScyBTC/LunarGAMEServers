import { events, games } from "@/data/mock";
import { motion } from "framer-motion";
import { useState } from "react";

const Events = () => {
  const [gameFilter, setGameFilter] = useState<string | null>(null);

  const filtered = gameFilter
    ? events.filter((e) => e.gameSlug === gameFilter)
    : events;

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
  };

  const formatTime = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false }) + " UTC";
  };

  return (
    <main className="pt-24 pb-16 px-4 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <p className="text-xs font-display font-semibold text-primary uppercase tracking-[0.2em] mb-3">Lunar Calendar</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-3">Events</h1>
          <p className="text-muted-foreground">Tournaments, wipe days, and community gatherings.</p>
        </motion.div>

        {/* Filter */}
        <div className="flex gap-2 mb-10 flex-wrap">
          <button
            onClick={() => setGameFilter(null)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
              !gameFilter ? "bg-primary/10 text-primary border-primary/30" : "bg-secondary text-muted-foreground border-border"
            }`}
          >
            All
          </button>
          {games.map((g) => (
            <button
              key={g.slug}
              onClick={() => setGameFilter(g.slug)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                gameFilter === g.slug ? "bg-primary/10 text-primary border-primary/30" : "bg-secondary text-muted-foreground border-border"
              }`}
            >
              {g.name}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/10 to-transparent" />

          <div className="space-y-8">
            {filtered.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative flex gap-6"
              >
                <div className="relative z-10 flex-shrink-0 w-12 flex flex-col items-center pt-1">
                  <div className="w-3 h-3 rounded-full bg-primary/40 border-2 border-primary glow-cyan" />
                </div>

                <div className="glass-panel rounded-xl p-5 flex-1">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-display font-semibold text-foreground">{event.title}</h3>
                    {event.gameSlug && (
                      <span className="px-2 py-0.5 text-[10px] font-medium bg-primary/5 text-primary/70 border border-primary/10 rounded-md uppercase tracking-wider flex-shrink-0">
                        {event.gameSlug}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{event.description}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground/70">
                    <span>{formatDate(event.startsAt)}</span>
                    <span className="font-mono text-primary/60">{formatTime(event.startsAt)}</span>
                    {event.endsAt && (
                      <>
                        <span>→</span>
                        <span className="font-mono text-primary/60">{formatTime(event.endsAt)}</span>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Events;
