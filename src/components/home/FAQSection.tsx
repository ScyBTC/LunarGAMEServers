import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is LunarGAMEServers?",
    a: "We're a community-driven game network that operates official servers for our members. We're not a hosting company — we run and maintain the servers ourselves for the community to enjoy.",
  },
  {
    q: "How do I join a server?",
    a: "Head to the Servers page, find the game you want to play, and click 'How to Join' on any server card. Most servers can be found by searching 'LunarGAME' in the game's server browser.",
  },
  {
    q: "Is it free to play?",
    a: "Yes! All our servers are free to join and play on. We accept optional donations to help cover server costs, but there's no pay-to-win.",
  },
  {
    q: "How do I report a player or appeal a ban?",
    a: "Visit our Support page to submit a report or appeal. You can also reach out through our Discord server for faster response.",
  },
  {
    q: "Can I apply to become staff?",
    a: "Staff applications open periodically. Watch our announcements on Discord for the next round. We look for active, mature community members.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative py-28 lg:py-36 px-4">
      {/* Section divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 text-center"
        >
          <p className="text-xs font-display font-semibold text-primary uppercase tracking-[0.25em] mb-4">FAQ</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-[-0.02em]">
            Common Questions
          </h2>
        </motion.div>

        <div className="space-y-2">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                className={`glass-panel rounded-xl overflow-hidden transition-colors duration-300 ${
                  isOpen ? "border-primary/15" : ""
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-5 lg:p-6 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-medium text-sm lg:text-[15px] text-foreground group-hover:text-primary/90 transition-colors">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-muted-foreground/50 transition-transform duration-300 flex-shrink-0 ml-4 ${
                      isOpen ? "rotate-180 text-primary/50" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 lg:px-6 pb-5 lg:pb-6"
                  >
                    <p className="text-sm text-muted-foreground leading-[1.75]">{faq.a}</p>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
