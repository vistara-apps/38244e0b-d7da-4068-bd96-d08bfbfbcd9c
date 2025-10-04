'use client';

import { CheckCircle2, Circle } from 'lucide-react';
import type { DailyMission } from '@/lib/types';

interface MissionBoardProps {
  missions: DailyMission;
  onClaim?: () => void;
}

export function MissionBoard({ missions, onClaim }: MissionBoardProps) {
  const allCompleted = missions.completedCount === missions.missions.length;
  const canClaim = allCompleted && !missions.rewardClaimed;

  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-fg">Daily Missions</h3>
        <span className="text-sm text-text-muted">
          {missions.completedCount}/{missions.missions.length}
        </span>
      </div>

      {/* Mission List */}
      <div className="space-y-3 mb-4">
        {missions.missions.map((mission) => (
          <div
            key={mission.id}
            className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-200 ${
              mission.completed
                ? 'bg-success/10 border-success/30'
                : 'bg-surface border-primary/30'
            }`}
          >
            {mission.completed ? (
              <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
            ) : (
              <Circle className="w-5 h-5 text-text-muted flex-shrink-0" />
            )}
            <div className="flex-1">
              <p className={`text-sm font-medium ${
                mission.completed ? 'text-success' : 'text-fg'
              }`}>
                {mission.description}
              </p>
            </div>
            <span className="text-sm font-bold text-primary">+{mission.reward} 💎</span>
          </div>
        ))}
      </div>

      {/* Claim Button */}
      {canClaim && (
        <button
          onClick={onClaim}
          className="cyber-button w-full"
        >
          <span className="flex items-center justify-center gap-2">
            Claim Rewards
          </span>
        </button>
      )}

      {missions.rewardClaimed && (
        <div className="p-3 bg-success/10 rounded-lg border border-success/30 text-center">
          <span className="text-sm font-bold text-success">Rewards Claimed!</span>
        </div>
      )}
    </div>
  );
}
