'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Navigation } from '@/components/Navigation';
import { DuelCard } from '@/components/DuelCard';
import { EnergyIndicator } from '@/components/EnergyIndicator';
import { MissionBoard } from '@/components/MissionBoard';
import { Swords, TrendingUp, Users } from 'lucide-react';
import type { Duel, DailyMission } from '@/lib/types';

export default function HomePage() {
  const [energyCount, setEnergyCount] = useState(3);
  const [cosmeticPoints, setCosmeticPoints] = useState(250);
  const [activeDuels, setActiveDuels] = useState<Duel[]>([]);
  const [dailyMissions, setDailyMissions] = useState<DailyMission | null>(null);

  // Mock data for demo
  useEffect(() => {
    // Mock active duels
    setActiveDuels([
      {
        id: 'duel_1',
        challengerFid: 'user_123',
        opponentFid: 'user_456',
        habitDescription: 'Meditate for 5 minutes',
        startDate: Date.now() - 2 * 24 * 60 * 60 * 1000,
        challengerStreak: 3,
        opponentStreak: 2,
        status: 'active',
        createdAt: Date.now(),
      },
      {
        id: 'duel_2',
        challengerFid: 'user_123',
        opponentFid: 'user_789',
        habitDescription: 'Read for 15 minutes',
        startDate: Date.now() - 5 * 24 * 60 * 60 * 1000,
        challengerStreak: 5,
        opponentStreak: 5,
        status: 'active',
        createdAt: Date.now(),
      },
    ]);

    // Mock daily missions
    setDailyMissions({
      id: 'mission_today',
      userFid: 'user_123',
      date: new Date().toISOString().split('T')[0],
      missions: [
        { id: 'm1', description: 'Complete 3 daily habits', completed: true, reward: 50 },
        { id: 'm2', description: 'Send a duel invite', completed: false, reward: 30 },
        { id: 'm3', description: 'Equip a new cosmetic', completed: false, reward: 20 },
      ],
      completedCount: 1,
      rewardClaimed: false,
    });
  }, []);

  const handleCompleteHabit = () => {
    if (energyCount > 0) {
      setEnergyCount(energyCount - 1);
      setCosmeticPoints(cosmeticPoints + 10);
      // In real app, update duel streak in database
    }
  };

  const handleRefillEnergy = () => {
    // In real app, trigger MiniKit payment flow
    setEnergyCount(3);
  };

  const handleClaimMissions = () => {
    if (dailyMissions) {
      const totalReward = dailyMissions.missions.reduce((sum, m) => sum + m.reward, 0);
      setCosmeticPoints(cosmeticPoints + totalReward);
      setDailyMissions({ ...dailyMissions, rewardClaimed: true });
    }
  };

  return (
    <div className="min-h-screen pb-20">
      <Header energyCount={energyCount} cosmeticPoints={cosmeticPoints} />
      
      <main className="max-w-2xl mx-auto px-4 pt-20 pb-8">
        {/* Hero Section */}
        <div className="glass-card p-8 mb-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 animate-pulse-glow"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-black mb-3 text-glow">
              Turn Habits Into <span className="text-accent">Epic Battles</span>
            </h2>
            <p className="text-text-muted mb-6">
              Challenge friends, build streaks, and unlock legendary cosmetics
            </p>
            <button className="cyber-button">
              <span className="flex items-center justify-center gap-2">
                <Swords className="w-5 h-5" />
                Start Your First Duel
              </span>
            </button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="stat-card text-center">
            <Swords className="w-6 h-6 text-accent mx-auto mb-2" />
            <p className="text-2xl font-black text-accent">{activeDuels.length}</p>
            <p className="text-xs text-text-muted">Active Duels</p>
          </div>
          <div className="stat-card text-center">
            <TrendingUp className="w-6 h-6 text-success mx-auto mb-2" />
            <p className="text-2xl font-black text-success">5</p>
            <p className="text-xs text-text-muted">Best Streak</p>
          </div>
          <div className="stat-card text-center">
            <Users className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-2xl font-black text-primary">12</p>
            <p className="text-xs text-text-muted">Friends</p>
          </div>
        </div>

        {/* Energy Indicator */}
        <div className="mb-8">
          <EnergyIndicator
            current={energyCount}
            max={3}
            lastRefill={Date.now() - 2 * 60 * 60 * 1000}
            onRefill={handleRefillEnergy}
          />
        </div>

        {/* Daily Missions */}
        {dailyMissions && (
          <div className="mb-8">
            <MissionBoard missions={dailyMissions} onClaim={handleClaimMissions} />
          </div>
        )}

        {/* Active Duels */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-fg mb-4 flex items-center gap-2">
            <Swords className="w-5 h-5 text-accent" />
            Active Duels
          </h3>
          <div className="space-y-4">
            {activeDuels.map((duel) => (
              <DuelCard
                key={duel.id}
                duel={duel}
                currentUserFid="user_123"
                onComplete={handleCompleteHabit}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="glass-card p-6 text-center">
          <h3 className="text-lg font-bold text-fg mb-2">Ready for More?</h3>
          <p className="text-sm text-text-muted mb-4">
            Challenge friends and climb the leaderboard
          </p>
          <button className="cyber-button-secondary">
            View Leaderboard
          </button>
        </div>
      </main>

      <Navigation />
    </div>
  );
}
