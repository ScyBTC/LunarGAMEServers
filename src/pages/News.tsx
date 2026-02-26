import { announcements, games } from "@/data/mock";
import { motion } from "framer-motion";

const News = () => {
  return (
    <main className="pt-24 pb-16 px-4 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <p className="text-xs font-display font-semibold text-primary uppercase tracking-[0.2em] mb-3">Transmissions</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-3">News &amp; Updates</h1>
          <p className="text-muted-foreground">The latest from the Lunar network.</p>
        </motion.div>

        <div className="space-y-6">
          {announcements.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-panel rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <time className="text-xs font-mono text-muted-foreground/60">{post.createdAt}</time>
                {post.gameSlug && (
                  <span className="px-2 py-0.5 text-[10px] font-medium bg-primary/5 text-primary/70 border border-primary/10 rounded-md uppercase tracking-wider">
                    {post.gameSlug}
                  </span>
                )}
              </div>
              <h2 className="font-display text-xl font-bold text-foreground mb-3">{post.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{post.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default News;
