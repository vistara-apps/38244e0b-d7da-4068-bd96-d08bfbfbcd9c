import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(timestamp: number): string {
  return new Date(timestamp).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export function getTimeUntilRefill(lastRefill: number): string {
  const now = Date.now();
  const refillTime = lastRefill + (8 * 60 * 60 * 1000); // 8 hours
  const diff = refillTime - now;
  
  if (diff <= 0) return 'Ready!';
  
  const hours = Math.floor(diff / (60 * 60 * 1000));
  const minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
  
  return `${hours}h ${minutes}m`;
}

export function calculateStreak(entries: { date: string; completed: boolean }[]): number {
  if (entries.length === 0) return 0;
  
  const sortedEntries = entries.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  let streak = 0;
  const today = new Date().toISOString().split('T')[0];
  
  for (const entry of sortedEntries) {
    if (!entry.completed) break;
    
    const entryDate = new Date(entry.date).toISOString().split('T')[0];
    const expectedDate = new Date(Date.now() - streak * 24 * 60 * 60 * 1000)
      .toISOString()
      .split('T')[0];
    
    if (entryDate === expectedDate) {
      streak++;
    } else {
      break;
    }
  }
  
  return streak;
}

export function getRarityColor(rarity: string): string {
  switch (rarity) {
    case 'common': return 'text-gray-400';
    case 'rare': return 'text-blue-400';
    case 'epic': return 'text-purple-400';
    case 'legendary': return 'text-accent';
    default: return 'text-gray-400';
  }
}

export function generateMissionId(): string {
  return `mission_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export function generateDuelId(): string {
  return `duel_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}
