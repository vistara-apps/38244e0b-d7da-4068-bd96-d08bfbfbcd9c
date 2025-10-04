'use client';

import { Zap } from 'lucide-react';
import { getTimeUntilRefill } from '@/lib/utils';

interface EnergyIndicatorProps {
  current: number;
  max: number;
  lastRefill: number;
  onRefill?: () => void;
}

export function EnergyIndicator({ current, max, lastRefill, onRefill }: EnergyIndicatorProps) {
  const timeUntilRefill = getTimeUntilRefill(lastRefill);
  const isFull = current === max;

  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-fg">Energy</h3>
        {!isFull && (
          <span className="text-sm text-text-muted">Refills in {timeUntilRefill}</span>
        )}
      </div>

      {/* Energy Orbs */}
      <div className="flex items-center justify-center gap-4 mb-6">
        {Array.from({ length: max }).map((_, i) => (
          <div
            key={i}
            className={`energy-orb ${i >= current ? 'empty' : ''}`}
          >
            {i < current && <Zap className="w-6 h-6" />}
          </div>
        ))}
      </div>

      {/* Refill Button */}
      {current < max && (
        <button
          onClick={onRefill}
          className="cyber-button w-full"
        >
          <span className="flex items-center justify-center gap-2">
            <Zap className="w-4 h-4" />
            Refill Now (0.5 USDC)
          </span>
        </button>
      )}

      {isFull && (
        <div className="p-3 bg-success/10 rounded-lg border border-success/30 text-center">
          <span className="text-sm font-bold text-success">Energy Full!</span>
        </div>
      )}
    </div>
  );
}
