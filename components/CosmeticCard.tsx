'use client';

import { ShoppingCart, Check } from 'lucide-react';
import type { CosmeticItem } from '@/lib/types';
import { getRarityColor } from '@/lib/utils';

interface CosmeticCardProps {
  item: CosmeticItem;
  owned?: boolean;
  onPurchase?: () => void;
}

export function CosmeticCard({ item, owned = false, onPurchase }: CosmeticCardProps) {
  return (
    <div className="glass-card p-4 hover:border-accent/50 transition-all duration-200 relative">
      {/* Rarity Badge */}
      <div className="absolute top-2 right-2">
        <span className={`px-2 py-1 text-xs font-bold rounded ${getRarityColor(item.rarity)} bg-bg/80`}>
          {item.rarity.toUpperCase()}
        </span>
      </div>

      {/* Owned Badge */}
      {owned && (
        <div className="absolute top-2 left-2">
          <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center">
            <Check className="w-4 h-4 text-bg" />
          </div>
        </div>
      )}

      {/* Item Preview */}
      <div className="aspect-square bg-surface rounded-lg mb-3 flex items-center justify-center border border-primary/30">
        <span className="text-6xl">{getItemEmoji(item.type)}</span>
      </div>

      {/* Item Info */}
      <h3 className="font-bold text-fg mb-1">{item.name}</h3>
      <p className="text-xs text-text-muted mb-3 capitalize">{item.type}</p>

      {/* Pricing */}
      {!owned && (
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-muted">Points:</span>
            <span className="font-bold text-primary">{item.pointCost} 💎</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-muted">USDC:</span>
            <span className="font-bold text-accent">${item.usdcCost}</span>
          </div>

          <button
            onClick={onPurchase}
            className="cyber-button-secondary w-full !py-2 text-sm"
          >
            <span className="flex items-center justify-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              Purchase
            </span>
          </button>
        </div>
      )}

      {owned && (
        <div className="p-2 bg-success/10 rounded border border-success/30 text-center">
          <span className="text-sm font-bold text-success">Owned</span>
        </div>
      )}
    </div>
  );
}

function getItemEmoji(type: string): string {
  switch (type) {
    case 'skin': return '🎭';
    case 'color': return '🎨';
    case 'effect': return '✨';
    case 'emote': return '🎉';
    default: return '❓';
  }
}
