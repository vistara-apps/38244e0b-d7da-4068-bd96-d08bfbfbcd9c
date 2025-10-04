'use client';

import { Flame, Trophy, Clock } from 'lucide-react';
import type { Duel } from '@/lib/types';

interface DuelCardProps {
  duel: Duel;
  currentUserFid: string;
  onComplete?: () => void;
}

export function DuelCard({ duel, currentUserFid, onComplete }: DuelCardProps) {
  const isChallenger = duel.challengerFid === currentUserFid;
  const myStreak = isChallenger ? duel.challengerStreak : duel.opponentStreak;
  const opponentStreak = isChallenger ? duel.opponentStreak : duel.challengerStreak;
  const opponentName = isChallenger ? 'Opponent' : 'Challenger';

  const getStatusColor = () => {
    if (duel.status === 'completed') return 'border-success';
    if (duel.status === 'abandoned') return 'border-error';
    return 'border-accent';
  };

  const getStatusText = () => {
    if (duel.status === 'completed') return 'Completed';
    if (duel.status === 'abandoned') return 'Abandoned';
    return 'Active';
  };

  return (
    <div className={`duel-card ${getStatusColor()}`}>
      {/* Status Badge */}
      <div className="absolute top-2 right-2">
        <span className={`px-2 py-1 text-xs font-bold rounded ${
          duel.status === 'active' ? 'bg-accent/20 text-accent' :
          duel.status === 'completed' ? 'bg-success/20 text-success' :
          'bg-error/20 text-error'
        }`}>
          {getStatusText()}
        </span>
      </div>

      {/* Habit Description */}
      <div className="mb-4">
        <h3 className="text-lg font-bold text-fg mb-1">{duel.habitDescription}</h3>
        <p className="text-sm text-text-muted">Started {new Date(duel.startDate).toLocaleDateString()}</p>
      </div>

      {/* Streak Comparison */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {/* My Streak */}
        <div className="stat-card !p-3">
          <div className="flex items-center gap-2 mb-2">
            <Flame className="w-4 h-4 text-streak-fire" />
            <span className="text-xs font-medium text-text-muted">Your Streak</span>
          </div>
          <p className="text-2xl font-black text-accent animate-streak-pop">{myStreak}</p>
        </div>

        {/* Opponent Streak */}
        <div className="stat-card !p-3">
          <div className="flex items-center gap-2 mb-2">
            <Flame className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium text-text-muted">{opponentName}</span>
          </div>
          <p className="text-2xl font-black text-primary">{opponentStreak}</p>
        </div>
      </div>

      {/* Action Button */}
      {duel.status === 'active' && (
        <button
          onClick={onComplete}
          className="cyber-button w-full"
        >
          <span className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4" />
            Complete Today's Habit
          </span>
        </button>
      )}

      {/* Winner Badge */}
      {duel.status === 'completed' && duel.winnerId && (
        <div className="flex items-center justify-center gap-2 p-3 bg-success/10 rounded-lg border border-success/30">
          <Trophy className="w-5 h-5 text-success" />
          <span className="font-bold text-success">
            {duel.winnerId === currentUserFid ? 'You Won!' : `${opponentName} Won!`}
          </span>
        </div>
      )}
    </div>
  );
}
