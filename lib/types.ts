export interface User {
  fid: string;
  walletAddress: string;
  username: string;
  avatarCosmetics: string[];
  cosmeticPoints: number;
  energyCount: number;
  lastEnergyRefill: number;
  createdAt: number;
}

export interface Duel {
  id: string;
  challengerFid: string;
  opponentFid: string;
  habitDescription: string;
  startDate: number;
  challengerStreak: number;
  opponentStreak: number;
  status: 'active' | 'completed' | 'abandoned';
  winnerId?: string;
  createdAt: number;
}

export interface StreakEntry {
  id: string;
  duelId: string;
  userFid: string;
  date: string;
  completed: boolean;
  createdAt: number;
}

export interface CosmeticItem {
  id: string;
  name: string;
  type: 'skin' | 'color' | 'effect' | 'emote';
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  pointCost: number;
  usdcCost: number;
  imageUrl: string;
  unlockCondition?: string;
}

export interface UserCosmetic {
  id: string;
  userFid: string;
  cosmeticItemId: string;
  acquiredAt: number;
  equipped: boolean;
}

export interface DailyMission {
  id: string;
  userFid: string;
  date: string;
  missions: Mission[];
  completedCount: number;
  rewardClaimed: boolean;
}

export interface Mission {
  id: string;
  description: string;
  completed: boolean;
  reward: number;
}

export interface Transaction {
  id: string;
  userFid: string;
  type: 'energy_refill' | 'time_skip' | 'cosmetic_purchase';
  amountUsdc: number;
  txHash: string;
  createdAt: number;
}

export interface LeaderboardEntry {
  rank: number;
  fid: string;
  username: string;
  avatar: string;
  longestStreak: number;
  totalDuelsWon: number;
  cosmeticPoints: number;
}
