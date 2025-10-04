'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Navigation } from '@/components/Navigation';
import { CosmeticCard } from '@/components/CosmeticCard';
import { ShoppingBag, Filter } from 'lucide-react';
import { COSMETIC_ITEMS } from '@/lib/constants';

export default function ShopPage() {
  const [filter, setFilter] = useState<'all' | 'skin' | 'color' | 'effect' | 'emote'>('all');
  const [ownedItems] = useState<string[]>(['color-toxic-green']);

  const filteredItems = COSMETIC_ITEMS.filter((item) => {
    if (filter === 'all') return true;
    return item.type === filter;
  });

  return (
    <div className="min-h-screen pb-20">
      <Header energyCount={3} cosmeticPoints={250} />
      
      <main className="max-w-2xl mx-auto px-4 pt-20 pb-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-black text-fg flex items-center gap-3">
            <ShoppingBag className="w-8 h-8 text-accent" />
            Cosmetic Shop
          </h1>
        </div>

        {/* Info Banner */}
        <div className="glass-card p-4 mb-6 border-l-4 border-l-accent">
          <p className="text-sm text-text-muted">
            Customize your avatar with exclusive cosmetics. Earn points through duels or purchase with USDC.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 mb-6 overflow-x-auto p-1 bg-surface rounded-lg">
          {(['all', 'skin', 'color', 'effect', 'emote'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-2 rounded-md font-medium whitespace-nowrap transition-all duration-200 ${
                filter === tab
                  ? 'bg-accent text-bg'
                  : 'text-text-muted hover:text-fg'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Cosmetics Grid */}
        <div className="grid grid-cols-2 gap-4">
          {filteredItems.map((item) => (
            <CosmeticCard
              key={item.id}
              item={item}
              owned={ownedItems.includes(item.id)}
              onPurchase={() => {
                // In real app, trigger MiniKit payment flow
                console.log('Purchase:', item.id);
              }}
            />
          ))}
        </div>
      </main>

      <Navigation />
    </div>
  );
}
