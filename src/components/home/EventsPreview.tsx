import { events } from "@/data/mock";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const EventsPreview = () => {
  const upcoming = events.slice(0, 4);

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  const formatTime = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false });
  };

  return (
    <section className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs font-display font-semibold text-primary uppercase tracking-[0.2em] mb-3">Upcoming</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Events &amp; Tournaments</h2>
        </motion.div>

        {/* Lunar timeline */}
        <div className="relative">
          {/* Orbit line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/10 to-transparent" />

          <div className="space-y-8">
            {upcoming.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="relative flex gap-6 md:gap-8"
              >
                {/* Node */}
                <div className="relative z-10 flex-shrink-0 w-12 md:w-16 flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-primary/40 border-2 border-primary glow-cyan" />
                  <span className="mt-2 text-[10px] font-display font-semibold text-primary/70 text-center leading-tight">
                    {formatDate(event.startsAt)}
                  </span>
                </div>

                {/* Card */}
                <div className="glass-panel rounded-xl p-5 flex-1 hover:border-primary/20 transition-all duration-300">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display font-semibold text-sm text-foreground">{event.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{event.description}</p>
                    </div>
                    <span className="text-[10px] font-mono text-primary/60 whitespace-nowrap">{formatTime(event.startsAt)} UTC</span>
                  </div>
                  {event.gameSlug && (
                    <span className="inline-block mt-3 px-2 py-0.5 text-[10px] font-medium bg-primary/5 text-primary/70 border border-primary/10 rounded-md uppercase tracking-wider">
                      {event.gameSlug}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary/70 hover:text-primary transition-colors"
          >
            View all events →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsPreview;
