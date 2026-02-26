export interface Game {
  id: string;
  slug: string;
  name: string;
  description: string;
  coverPath: string;
}

export interface Server {
  id: string;
  gameId: string;
  gameSlug: string;
  name: string;
  region: string;
  description: string;
  connectInfo: string;
  status: "online" | "offline";
  playersOnline: number;
  maxPlayers: number;
  tags: string[];
  lastCheckedAt: string;
}

export interface Announcement {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  gameSlug: string | null;
}

export interface GameEvent {
  id: string;
  title: string;
  description: string;
  startsAt: string;
  endsAt: string | null;
  gameSlug: string | null;
}

export const games: Game[] = [
  {
    id: "1",
    slug: "ark",
    name: "ARK: Survival Evolved",
    description: "Survive, tame, and thrive on our official ARK servers. PvE & PvP clusters with active admins and regular events.",
    coverPath: "/covers/ark.jpg",
  },
  {
    id: "2",
    slug: "fivem",
    name: "GTA FiveM",
    description: "Experience immersive roleplay on our custom FiveM servers. Unique jobs, economy, and community-driven storylines.",
    coverPath: "/covers/fivem.jpg",
  },
  {
    id: "3",
    slug: "hytale",
    name: "Hytale",
    description: "Explore, build, and adventure together on our Hytale servers. Custom mods, creative worlds, and competitive arenas.",
    coverPath: "/covers/hytale.jpg",
  },
];

export const servers: Server[] = [
  {
    id: "s1", gameId: "1", gameSlug: "ark", name: "Lunar ARK — The Island [PvE]",
    region: "EU", description: "Relaxed PvE experience on The Island with boosted rates.",
    connectInfo: "Search 'LunarGAME' in ARK server browser", status: "online",
    playersOnline: 34, maxPlayers: 70, tags: ["PvE", "Boosted"], lastCheckedAt: "2 min ago",
  },
  {
    id: "s2", gameId: "1", gameSlug: "ark", name: "Lunar ARK — Ragnarok [PvP]",
    region: "NA", description: "Competitive PvP on Ragnarok. Weekly raids and tribe wars.",
    connectInfo: "Search 'LunarGAME' in ARK server browser", status: "online",
    playersOnline: 52, maxPlayers: 70, tags: ["PvP", "Modded"], lastCheckedAt: "1 min ago",
  },
  {
    id: "s3", gameId: "1", gameSlug: "ark", name: "Lunar ARK — Aberration [Hardcore]",
    region: "EU", description: "Hardcore survival on Aberration. Permadeath enabled.",
    connectInfo: "Search 'LunarGAME' in ARK server browser", status: "offline",
    playersOnline: 0, maxPlayers: 50, tags: ["Hardcore", "PvP"], lastCheckedAt: "5 min ago",
  },
  {
    id: "s4", gameId: "2", gameSlug: "fivem", name: "Lunar City RP — Main",
    region: "NA", description: "Our flagship roleplay server. Custom scripts, active economy.",
    connectInfo: "Connect via FiveM: cfx.re/join/lunar1", status: "online",
    playersOnline: 128, maxPlayers: 200, tags: ["RP", "Serious"], lastCheckedAt: "30 sec ago",
  },
  {
    id: "s5", gameId: "2", gameSlug: "fivem", name: "Lunar City RP — EU",
    region: "EU", description: "European roleplay server with multilingual support.",
    connectInfo: "Connect via FiveM: cfx.re/join/lunar2", status: "online",
    playersOnline: 87, maxPlayers: 150, tags: ["RP", "EU"], lastCheckedAt: "1 min ago",
  },
  {
    id: "s6", gameId: "2", gameSlug: "fivem", name: "Lunar Drift — Racing",
    region: "NA", description: "Competitive racing and car meets. Custom tracks.",
    connectInfo: "Connect via FiveM: cfx.re/join/lunar3", status: "online",
    playersOnline: 23, maxPlayers: 64, tags: ["Racing", "Casual"], lastCheckedAt: "2 min ago",
  },
  {
    id: "s7", gameId: "3", gameSlug: "hytale", name: "Lunar Hytale — Adventure",
    region: "EU", description: "Co-op adventure server with custom quests and dungeons.",
    connectInfo: "Join via Hytale launcher: lunar.hytale.gg", status: "online",
    playersOnline: 41, maxPlayers: 100, tags: ["Adventure", "PvE"], lastCheckedAt: "1 min ago",
  },
  {
    id: "s8", gameId: "3", gameSlug: "hytale", name: "Lunar Hytale — Creative",
    region: "NA", description: "Build anything. Creative mode with community plots.",
    connectInfo: "Join via Hytale launcher: lunar.hytale.gg", status: "online",
    playersOnline: 19, maxPlayers: 80, tags: ["Creative", "Vanilla"], lastCheckedAt: "3 min ago",
  },
];

export const announcements: Announcement[] = [
  { id: "a1", title: "Season 4 Wipe — ARK Ragnarok", body: "The Ragnarok PvP cluster wipes this Saturday at 6 PM UTC. Prepare your tribes and alliances. New mod pack dropping with the wipe.", createdAt: "2026-02-25", gameSlug: "ark" },
  { id: "a2", title: "FiveM Update: Custom Housing System", body: "We've deployed our brand-new housing system on all FiveM RP servers. Buy, furnish, and secure your property in-game.", createdAt: "2026-02-23", gameSlug: "fivem" },
  { id: "a3", title: "Hytale Server Launch", body: "We're thrilled to announce our official Hytale servers are now live! Join the Adventure or Creative server today.", createdAt: "2026-02-20", gameSlug: "hytale" },
  { id: "a4", title: "Staff Applications Open", body: "Looking for dedicated community members to join our moderation team. Apply through Discord.", createdAt: "2026-02-18", gameSlug: null },
  { id: "a5", title: "Community Awards Voting", body: "Vote for your favorite community members, builders, and content creators in our quarterly Community Awards.", createdAt: "2026-02-15", gameSlug: null },
];

export const events: GameEvent[] = [
  { id: "e1", title: "ARK Boss Rush Tournament", description: "Teams of 5 compete to defeat all ARK bosses in record time. Prizes for top 3.", startsAt: "2026-03-01T18:00:00Z", endsAt: "2026-03-01T22:00:00Z", gameSlug: "ark" },
  { id: "e2", title: "FiveM Grand Prix", description: "Monthly racing championship across 5 custom tracks. Open to all players.", startsAt: "2026-03-05T20:00:00Z", endsAt: "2026-03-05T23:00:00Z", gameSlug: "fivem" },
  { id: "e3", title: "Community Game Night", description: "Cross-game community hangout. Mini-games, trivia, and prizes on Discord.", startsAt: "2026-03-08T19:00:00Z", endsAt: null, gameSlug: null },
  { id: "e4", title: "Hytale Build Contest", description: "Theme: 'Lunar Landscapes'. Build your best moon-inspired creation.", startsAt: "2026-03-12T16:00:00Z", endsAt: "2026-03-14T16:00:00Z", gameSlug: "hytale" },
  { id: "e5", title: "ARK Ragnarok Wipe Day", description: "Season 4 fresh start. New mods, new rules, new alliances.", startsAt: "2026-03-01T18:00:00Z", endsAt: null, gameSlug: "ark" },
  { id: "e6", title: "FiveM RP Story Arc Finale", description: "The 'Lunar Syndicate' storyline reaches its climax. All hands on deck.", startsAt: "2026-03-15T21:00:00Z", endsAt: "2026-03-15T23:59:00Z", gameSlug: "fivem" },
];
