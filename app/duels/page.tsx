'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Navigation } from '@/components/Navigation';
import { DuelCard } from '@/components/DuelCard';
import { Swords, Plus, Filter } from 'lucide-react';
import type { Duel } from '@/lib/types';

export default function DuelsPage() {
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
  const [duels] = useState<Duel[]>([
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
    {
      id: 'duel_3',
      challengerFid: 'user_123',
      opponentFid: 'user_101',
      habitDescription: 'Exercise for 20 minutes',
      startDate: Date.now() - 10 * 24 * 60 * 60 * 1000,
      challengerStreak: 7,
      opponentStreak: 5,
      status: 'completed',
      winnerId: 'user_123',
      createdAt: Date.now(),
    },
  ]);

  const filteredDuels = duels.filter((duel) => {
    if (filter === 'all') return true;
    return duel.status === filter;
  });

  return (
    <div className="min-h-screen pb-20">
      <Header energyCount={3} cosmeticPoints={250} />
      
      <main className="max-w-2xl mx-auto px-4 pt-20 pb-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-black text-fg flex items-center gap-3">
            <Swords className="w-8 h-8 text-accent" />
            My Duels
          </h1>
          <button className="cyber-button !px-4 !py-2">
            <span className="flex items-center gap-2">
              <Plus className="w-4 h-4" />
              New Duel
            </span>
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 mb-6 p-1 bg-surface rounded-lg">
          {(['all', 'active', 'completed'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`flex-1 px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                filter === tab
                  ? 'bg-accent text-bg'
                  : 'text-text-muted hover:text-fg'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Duels List */}
        <div className="space-y-4">
          {filteredDuels.length === 0 ? (
            <div className="glass-card p-12 text-center">
              <Swords className="w-16 h-16 text-text-muted mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-bold text-fg mb-2">No duels found</h3>
              <p className="text-sm text-text-muted mb-6">
                Start your first duel and challenge a friend!
              </p>
              <button className="cyber-button">
                <span className="flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Create Duel
                </span>
              </button>
            </div>
          ) : (
            filteredDuels.map((duel) => (
              <DuelCard
                key={duel.id}
                duel={duel}
                currentUserFid="user_123"
              />
            ))
          )}
        </div>
      </main>

      <Navigation />
    </div>
  );
}
