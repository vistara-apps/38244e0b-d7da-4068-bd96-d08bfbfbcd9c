'use client';

import { Wallet, ConnectWallet } from '@coinbase/onchainkit/wallet';
import { Zap } from 'lucide-react';

interface HeaderProps {
  energyCount?: number;
  cosmeticPoints?: number;
}

export function Header({ energyCount = 3, cosmeticPoints = 0 }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-lg border-b border-primary/30">
      <div className="max-w-2xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-black text-glow">
              <span className="text-accent">Habit</span>
              <span className="text-primary">Duel</span>
            </h1>
          </div>

          <div className="flex items-center gap-4">
            {/* Energy Display */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-bg/50 rounded-lg border border-accent/30">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm font-bold text-accent">{energyCount}/3</span>
            </div>

            {/* Cosmetic Points */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-bg/50 rounded-lg border border-primary/30">
              <span className="text-lg">💎</span>
              <span className="text-sm font-bold text-primary">{cosmeticPoints}</span>
            </div>

            {/* Wallet Connection */}
            <Wallet>
              <ConnectWallet className="cyber-button-secondary !px-4 !py-2 text-sm">
                <span>Connect</span>
              </ConnectWallet>
            </Wallet>
          </div>
        </div>
      </div>
    </header>
  );
}
