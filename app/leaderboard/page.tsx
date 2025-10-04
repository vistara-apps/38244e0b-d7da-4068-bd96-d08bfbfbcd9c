'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Navigation } from '@/components/Navigation';
import { LeaderboardEntry } from '@/components/LeaderboardEntry';
import { Trophy, Users, Globe } from 'lucide-react';
import type { LeaderboardEntry as LeaderboardEntryType } from '@/lib/types';

export default function LeaderboardPage() {
  const [tab, setTab] = useState<'friends' | 'global'>('friends');
  
  const mockLeaderboard: LeaderboardEntryType[] = [
    {
      rank: 1,
      fid: 'user_456',
      username: 'CyberNinja',
      avatar: '🥷',
      longestStreak: 21,
      totalDuelsWon: 15,
      cosmeticPoints: 1250,
    },
    {
      rank: 2,
      fid: 'user_123',
      username: 'You',
      avatar: '👤',
      longestStreak: 14,
      totalDuelsWon: 10,
      cosmeticPoints: 850,
    },
    {
      rank: 3,
      fid: 'user_789',
      username: 'StreakMaster',
      avatar: '🔥',
      longestStreak: 12,
      totalDuelsWon: 8,
      cosmeticPoints: 720,
    },
    {
      rank: 4,
      fid: 'user_101',
      username: 'HabitHero',
      avatar: '🦸',
      longestStreak: 10,
      totalDuelsWon: 7,
      cosmeticPoints: 650,
    },
    {
      rank: 5,
      fid: 'user_202',
      username: 'DuelChamp',
      avatar: '🏆',
      longestStreak: 9,
      totalDuelsWon: 6,
      cosmeticPoints: 580,
    },
  ];

  return (
    <div className="min-h-screen pb-20">
      <Header energyCount={3} cosmeticPoints={250} />
      
      <main className="max-w-2xl mx-auto px-4 pt-20 pb-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-black text-fg flex items-center gap-3">
            <Trophy className="w-8 h-8 text-accent" />
            Leaderboard
          </h1>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center gap-2 mb-6 p-1 bg-surface rounded-lg">
          <button
            onClick={() => setTab('friends')}
            className={`flex-1 px-4 py-3 rounded-md font-medium transition-all duration-200 ${
              tab === 'friends'
                ? 'bg-accent text-bg'
                : 'text-text-muted hover:text-fg'
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              <Users className="w-4 h-4" />
              Friends
            </span>
          </button>
          <button
            onClick={() => setTab('global')}
            className={`flex-1 px-4 py-3 rounded-md font-medium transition-all duration-200 ${
              tab === 'global'
                ? 'bg-accent text-bg'
                : 'text-text-muted hover:text-fg'
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              <Globe className="w-4 h-4" />
              Global
            </span>
          </button>
        </div>

        {/* Top 3 Podium */}
        <div className="glass-card p-6 mb-6">
          <div className="flex items-end justify-center gap-4 mb-4">
            {/* 2nd Place */}
            {mockLeaderboard[1] && (
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-3xl mb-2">
                  {mockLeaderboard[1].avatar}
                </div>
                <div className="w-20 h-16 bg-gray-300/20 rounded-t-lg flex items-center justify-center">
                  <span className="text-2xl font-black text-gray-300">2</span>
                </div>
                <p className="text-sm font-bold text-fg mt-2">{mockLeaderboard[1].username}</p>
              </div>
            )}

            {/* 1st Place */}
            {mockLeaderboard[0] && (
              <div className="flex flex-col items-center">
                <Trophy className="w-6 h-6 text-accent mb-2 animate-pulse-glow" />
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-4xl mb-2 neon-border">
                  {mockLeaderboard[0].avatar}
                </div>
                <div className="w-24 h-24 bg-accent/20 rounded-t-lg flex items-center justify-center">
                  <span className="text-3xl font-black text-accent">1</span>
                </div>
                <p className="text-sm font-bold text-fg mt-2">{mockLeaderboard[0].username}</p>
              </div>
            )}

            {/* 3rd Place */}
            {mockLeaderboard[2] && (
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-warning to-yellow-600 flex items-center justify-center text-3xl mb-2">
                  {mockLeaderboard[2].avatar}
                </div>
                <div className="w-20 h-12 bg-warning/20 rounded-t-lg flex items-center justify-center">
                  <span className="text-2xl font-black text-warning">3</span>
                </div>
                <p className="text-sm font-bold text-fg mt-2">{mockLeaderboard[2].username}</p>
              </div>
            )}
          </div>
        </div>

        {/* Full Leaderboard */}
        <div className="space-y-3">
          {mockLeaderboard.map((entry) => (
            <LeaderboardEntry
              key={entry.fid}
              entry={entry}
              isCurrentUser={entry.fid === 'user_123'}
            />
          ))}
        </div>
      </main>

      <Navigation />
    </div>
  );
}
