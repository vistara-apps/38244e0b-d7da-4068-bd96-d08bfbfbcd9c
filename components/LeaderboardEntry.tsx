'use client';

import { Trophy, Flame } from 'lucide-react';
import type { LeaderboardEntry as LeaderboardEntryType } from '@/lib/types';

interface LeaderboardEntryProps {
  entry: LeaderboardEntryType;
  isCurrentUser?: boolean;
}

export function LeaderboardEntry({ entry, isCurrentUser = false }: LeaderboardEntryProps) {
  const getRankColor = () => {
    if (entry.rank === 1) return 'text-accent';
    if (entry.rank === 2) return 'text-gray-300';
    if (entry.rank === 3) return 'text-warning';
    return 'text-text-muted';
  };

  const getRankBadge = () => {
    if (entry.rank <= 3) {
      return <Trophy className={`w-5 h-5 ${getRankColor()}`} />;
    }
    return <span className={`text-sm font-bold ${getRankColor()}`}>#{entry.rank}</span>;
  };

  return (
    <div className={`glass-card p-4 ${
      isCurrentUser ? 'border-accent neon-border' : ''
    }`}>
      <div className="flex items-center gap-4">
        {/* Rank */}
        <div className="flex items-center justify-center w-12">
          {getRankBadge()}
        </div>

        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl">
          {entry.avatar || '👤'}
        </div>

        {/* User Info */}
        <div className="flex-1">
          <h4 className="font-bold text-fg">
            {entry.username}
            {isCurrentUser && <span className="ml-2 text-xs text-accent">(You)</span>}
          </h4>
          <div className="flex items-center gap-4 text-sm text-text-muted">
            <span className="flex items-center gap-1">
              <Flame className="w-4 h-4 text-streak-fire" />
              {entry.longestStreak} streak
            </span>
            <span>{entry.totalDuelsWon} wins</span>
          </div>
        </div>

        {/* Points */}
        <div className="text-right">
          <p className="text-lg font-bold text-primary">{entry.cosmeticPoints}</p>
          <p className="text-xs text-text-muted">points</p>
        </div>
      </div>
    </div>
  );
}
