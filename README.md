# HabitDuel - Base Mini App

Turn your daily habits into epic battles with friends! HabitDuel is a social habit-tracking mini game built on Base where users duel friends by building streaks, unlocking cosmetics, and competing in daily challenges.

## Features

- **Streak Duel System**: Challenge friends to habit duels and build daily streaks
- **Cosmetic Avatar Shop**: Unlock skins, colors, effects, and emotes
- **Viral Challenge Invites**: Share duel invites via Farcaster Frames
- **Energy & Time-Skip Boosts**: Manage energy and purchase refills with USDC
- **Daily Mission Board**: Complete missions for bonus cosmetic points
- **Leaderboard**: Compete with friends and globally

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (via OnchainKit)
- **Authentication**: MiniKit SDK
- **Styling**: Tailwind CSS with cyberpunk gaming theme
- **Database**: Upstash Redis (for production)
- **Payments**: MiniKit Payments API (USDC)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables in `.env.local`:
```
NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_api_key
UPSTASH_REDIS_REST_URL=your_upstash_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_token
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── page.tsx              # Home page with active duels
├── duels/page.tsx        # Duels management
├── shop/page.tsx         # Cosmetic shop
├── leaderboard/page.tsx  # Friend & global leaderboards
├── profile/page.tsx      # User profile & stats
components/
├── Navigation.tsx        # Bottom navigation
├── Header.tsx           # Top header with wallet
├── DuelCard.tsx         # Duel display component
├── CosmeticCard.tsx     # Shop item component
├── EnergyIndicator.tsx  # Energy management
├── MissionBoard.tsx     # Daily missions
└── LeaderboardEntry.tsx # Leaderboard item
lib/
├── types.ts             # TypeScript interfaces
├── constants.ts         # App constants
└── utils.ts             # Utility functions
```

## Design System

### Colors
- Background: `#1a0b2e` (dark purple)
- Accent: `#00ff41` (neon green)
- Primary: `#7c3aed` (purple)
- Surface: `#2d1b4e` (dark purple surface)

### Components
- Cyber buttons with angular clip-path
- Glass cards with backdrop blur
- Neon borders with glow effects
- Animated streak counters

## Deployment

Deploy to Vercel:

```bash
npm run build
vercel deploy
```

## License

MIT
