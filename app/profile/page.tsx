'use client';

import { Header } from '@/components/Header';
import { Navigation } from '@/components/Navigation';
import { User, Flame, Trophy, Target, Settings2 } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="min-h-screen pb-20">
      <Header energyCount={3} cosmeticPoints={250} />
      
      <main className="max-w-2xl mx-auto px-4 pt-20 pb-8">
        {/* Profile Header */}
        <div className="glass-card p-6 mb-6 text-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center text-5xl neon-border">
            👤
          </div>
          <h1 className="text-2xl font-black text-fg mb-1">Your Username</h1>
          <p className="text-sm text-text-muted">@username</p>
          
          <div className="flex items-center justify-center gap-4 mt-6">
            <button className="cyber-button-secondary !px-4 !py-2 text-sm">
              Edit Profile
            </button>
            <button className="cyber-button-secondary !px-4 !py-2 text-sm">
              <Settings2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="stat-card text-center">
            <Flame className="w-8 h-8 text-streak-fire mx-auto mb-2" />
            <p className="text-3xl font-black text-streak-fire">14</p>
            <p className="text-sm text-text-muted">Longest Streak</p>
          </div>
          <div className="stat-card text-center">
            <Trophy className="w-8 h-8 text-accent mx-auto mb-2" />
            <p className="text-3xl font-black text-accent">10</p>
            <p className="text-sm text-text-muted">Duels Won</p>
          </div>
          <div className="stat-card text-center">
            <Target className="w-8 h-8 text-success mx-auto mb-2" />
            <p className="text-3xl font-black text-success">85%</p>
            <p className="text-sm text-text-muted">Completion Rate</p>
          </div>
          <div className="stat-card text-center">
            <User className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-3xl font-black text-primary">12</p>
            <p className="text-sm text-text-muted">Friends</p>
          </div>
        </div>

        {/* Achievements */}
        <div className="glass-card p-6 mb-6">
          <h2 className="text-xl font-bold text-fg mb-4">Achievements</h2>
          <div className="grid grid-cols-3 gap-4">
            {[
              { emoji: '🔥', name: 'Fire Starter', desc: '7-day streak' },
              { emoji: '⚔️', name: 'Duel Master', desc: '10 wins' },
              { emoji: '💎', name: 'Collector', desc: '5 cosmetics' },
            ].map((achievement) => (
              <div key={achievement.name} className="text-center">
                <div className="w-16 h-16 rounded-full bg-surface border-2 border-accent mx-auto mb-2 flex items-center justify-center text-3xl">
                  {achievement.emoji}
                </div>
                <p className="text-xs font-bold text-fg">{achievement.name}</p>
                <p className="text-xs text-text-muted">{achievement.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="glass-card p-6">
          <h2 className="text-xl font-bold text-fg mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {[
              { action: 'Completed daily habit', time: '2 hours ago', icon: '✅' },
              { action: 'Won duel vs CyberNinja', time: '1 day ago', icon: '🏆' },
              { action: 'Unlocked new cosmetic', time: '2 days ago', icon: '💎' },
            ].map((activity, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-surface rounded-lg">
                <span className="text-2xl">{activity.icon}</span>
                <div className="flex-1">
                  <p className="text-sm font-medium text-fg">{activity.action}</p>
                  <p className="text-xs text-text-muted">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Navigation />
    </div>
  );
}
