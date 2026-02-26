import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const tabs = [
  { id: "global", label: "Global Rules" },
  { id: "ark", label: "ARK" },
  { id: "fivem", label: "FiveM" },
  { id: "hytale", label: "Hytale" },
];

const rulesData: Record<string, { title: string; rules: string[] }> = {
  global: {
    title: "Global Community Rules",
    rules: [
      "Be respectful to all community members. Harassment, hate speech, and toxicity are not tolerated.",
      "No cheating, hacking, exploiting, or using unauthorized modifications on any server.",
      "Follow staff instructions. Moderators and admins act in the community's best interest.",
      "No advertising other communities or servers without permission.",
      "Keep communication appropriate. No NSFW content in any community channel.",
      "Alt accounts used to evade bans will result in permanent removal.",
      "Report bugs and exploits rather than abusing them. Responsible disclosure is rewarded.",
      "Donations do not grant immunity from rules. All players are equal.",
    ],
  },
  ark: {
    title: "ARK Server Rules",
    rules: [
      "No foundation spam or pillar blocking on PvE servers.",
      "Tribe wars on PvP servers must follow engagement rules — no offline raiding during declared peace hours.",
      "Tame limits are enforced per tribe. Check server MOTD for current limits.",
      "No kiting wild dinos into other players' bases.",
      "Cave building is restricted to designated caves only on PvE.",
      "Wipe schedules are announced 7 days in advance. No exceptions.",
    ],
  },
  fivem: {
    title: "FiveM RP Rules",
    rules: [
      "Stay in character at all times on RP servers. Use /ooc for out-of-character.",
      "No Random Deathmatch (RDM) — you must have valid RP reason for hostile actions.",
      "No Vehicle Deathmatch (VDM) — vehicles are not weapons.",
      "Value your life. If at gunpoint, comply realistically.",
      "No metagaming — don't use out-of-character information in RP.",
      "Emergency services have priority in active scenarios. Don't interfere with ongoing RP scenes.",
      "Custom vehicles must be approved by staff before use on official servers.",
    ],
  },
  hytale: {
    title: "Hytale Server Rules",
    rules: [
      "Respect build zones and other players' creations. No griefing.",
      "PvP is only allowed in designated arenas unless on a PvP-flagged server.",
      "Custom mods must be approved before use on our servers.",
      "Resource hoarding that disrupts other players' experience is not allowed.",
      "Community builds are collaborative — contribute positively or build elsewhere.",
    ],
  },
};

const Rules = () => {
  const [activeTab, setActiveTab] = useState("global");
  const data = rulesData[activeTab];

  return (
    <main className="pt-24 pb-16 px-4 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <p className="text-xs font-display font-semibold text-primary uppercase tracking-[0.2em] mb-3">The Codex</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-3">Rules</h1>
          <p className="text-muted-foreground">Fair play keeps the community strong. Know the rules, respect the game.</p>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-1 mb-10 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-primary/10 text-primary border border-primary/30"
                  : "text-muted-foreground hover:text-foreground border border-transparent"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Rules content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">{data.title}</h2>
          <div className="space-y-4">
            {data.rules.map((rule, i) => (
              <div key={i} className="flex gap-4 items-start glass-panel rounded-xl p-5">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-xs font-display font-bold text-primary">
                  {i + 1}
                </span>
                <p className="text-sm text-foreground/80 leading-relaxed">{rule}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Actions */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link
            to="/support"
            className="px-6 py-3 text-sm font-medium bg-destructive/10 text-destructive border border-destructive/20 rounded-lg hover:bg-destructive/20 transition-all text-center"
          >
            Report a Player
          </Link>
          <Link
            to="/support"
            className="px-6 py-3 text-sm font-medium bg-secondary text-secondary-foreground border border-border rounded-lg hover:border-primary/20 transition-all text-center"
          >
            Appeal a Ban
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Rules;
