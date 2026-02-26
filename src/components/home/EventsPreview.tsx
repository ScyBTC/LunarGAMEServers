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
    <section className="relative py-28 lg:py-36 px-4">
      {/* Section divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <p className="text-xs font-display font-semibold text-primary uppercase tracking-[0.25em] mb-4">Upcoming</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-[-0.02em]">
            Events &amp; Tournaments
          </h2>
        </motion.div>

        {/* Lunar timeline */}
        <div className="relative">
          {/* Vertical orbit line */}
          <div className="absolute left-5 md:left-7 top-2 bottom-2 w-px">
            <div className="h-full bg-gradient-to-b from-primary/25 via-primary/8 to-transparent" />
          </div>

          <div className="space-y-6 lg:space-y-8">
            {upcoming.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex gap-5 md:gap-7"
              >
                {/* Timeline node */}
                <div className="relative z-10 flex-shrink-0 w-10 md:w-14 flex flex-col items-center pt-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/50 border border-primary/70" style={{
                    boxShadow: "0 0 10px hsl(190 90% 55% / 0.3)",
                  }} />
                  <span className="mt-2.5 text-[10px] font-display font-semibold text-primary/60 text-center leading-tight">
                    {formatDate(event.startsAt)}
                  </span>
                </div>

                {/* Card */}
                <div className="glass-panel rounded-xl p-5 lg:p-6 flex-1 hover:border-primary/20 transition-all duration-400">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="font-display font-semibold text-sm lg:text-base text-foreground">{event.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed line-clamp-2">{event.description}</p>
                    </div>
                    <span className="text-[10px] font-mono text-primary/50 whitespace-nowrap mt-1">{formatTime(event.startsAt)} UTC</span>
                  </div>
                  {event.gameSlug && (
                    <span className="inline-block mt-3 px-2 py-0.5 text-[10px] font-medium bg-primary/5 text-primary/60 border border-primary/10 rounded-md uppercase tracking-wider">
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
            className="inline-flex items-center gap-2 text-sm font-display font-medium text-primary/70 hover:text-primary transition-colors duration-200"
          >
            View all events
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5 3L9.5 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsPreview;
