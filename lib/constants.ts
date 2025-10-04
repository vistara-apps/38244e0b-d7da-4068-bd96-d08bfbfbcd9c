export const ENERGY_REFILL_TIME = 8 * 60 * 60 * 1000; // 8 hours in milliseconds
export const MAX_ENERGY = 3;
export const ENERGY_REFILL_COST = 0.5; // USDC
export const TIME_SKIP_COST = 2.0; // USDC

export const COSMETIC_ITEMS = [
  {
    id: 'skin-cyber-warrior',
    name: 'Cyber Warrior',
    type: 'skin' as const,
    rarity: 'epic' as const,
    pointCost: 500,
    usdcCost: 2.0,
    imageUrl: '/cosmetics/cyber-warrior.png',
  },
  {
    id: 'skin-neon-ninja',
    name: 'Neon Ninja',
    type: 'skin' as const,
    rarity: 'legendary' as const,
    pointCost: 1000,
    usdcCost: 5.0,
    imageUrl: '/cosmetics/neon-ninja.png',
  },
  {
    id: 'color-toxic-green',
    name: 'Toxic Green',
    type: 'color' as const,
    rarity: 'rare' as const,
    pointCost: 200,
    usdcCost: 1.0,
    imageUrl: '/cosmetics/toxic-green.png',
  },
  {
    id: 'effect-lightning',
    name: 'Lightning Aura',
    type: 'effect' as const,
    rarity: 'epic' as const,
    pointCost: 400,
    usdcCost: 1.5,
    imageUrl: '/cosmetics/lightning.png',
  },
  {
    id: 'emote-victory',
    name: 'Victory Dance',
    type: 'emote' as const,
    rarity: 'common' as const,
    pointCost: 100,
    usdcCost: 0.5,
    imageUrl: '/cosmetics/victory.png',
  },
];

export const DAILY_MISSION_TEMPLATES = [
  { description: 'Complete 3 daily habits', reward: 50 },
  { description: 'Send a duel invite to a friend', reward: 30 },
  { description: 'Equip a new cosmetic item', reward: 20 },
  { description: 'React to a friend\'s streak', reward: 25 },
  { description: 'Win a duel', reward: 100 },
  { description: 'Reach a 7-day streak', reward: 150 },
];
