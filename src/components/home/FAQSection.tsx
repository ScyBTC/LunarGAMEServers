import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "What is LunarGAMEServers?", a: "We're a community-driven game network that operates official servers for our members. We're not a hosting company — we run and maintain the servers ourselves for the community to enjoy." },
  { q: "How do I join a server?", a: "Head to the Servers page, find the game you want to play, and click 'How to Join' on any server card. Most servers can be found by searching 'LunarGAME' in the game's server browser." },
  { q: "Is it free to play?", a: "Yes! All our servers are free to join and play on. We accept optional donations to help cover server costs, but there's no pay-to-win." },
  { q: "How do I report a player or appeal a ban?", a: "Visit our Support page to submit a report or appeal. You can also reach out through our Discord server for faster response." },
  { q: "Can I apply to become staff?", a: "Staff applications open periodically. Watch our announcements on Discord for the next round. We look for active, mature community members." },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative py-24 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="text-xs font-display font-semibold text-primary uppercase tracking-[0.2em] mb-3">FAQ</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Common Questions</h2>
        </motion.div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-panel rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-display font-medium text-sm text-foreground">{faq.q}</span>
                <ChevronDown
                  size={16}
                  className={`text-muted-foreground transition-transform flex-shrink-0 ml-4 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="px-5 pb-5"
                >
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
