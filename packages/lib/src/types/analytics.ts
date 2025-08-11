import { z } from 'zod';

export const MetricTypeSchema = z.enum([
  'KDA',
  'ADR',
  'HEADSHOT_PERCENTAGE',
  'UTILITY_EFFECTIVENESS',
  'ROUND_WIN_PERCENTAGE',
  'CLUTCH_RATE',
  'FIRST_BLOOD_RATE',
  'ECONOMY_EFFICIENCY',
  'TEAMWORK_SCORE',
  'COMMUNICATION_SCORE',
]);

export const TimeRangeSchema = z.enum([
  'LAST_7_DAYS',
  'LAST_30_DAYS',
  'LAST_90_DAYS',
  'LAST_6_MONTHS',
  'LAST_YEAR',
  'ALL_TIME',
  'CUSTOM',
]);

export const PlayerMetricsSchema = z.object({
  id: z.string().uuid(),
  playerId: z.string().uuid(),
  teamId: z.string().uuid(),
  matchId: z.string().uuid().optional(),
  
  // Core stats
  matchesPlayed: z.number().default(0),
  wins: z.number().default(0),
  losses: z.number().default(0),
  draws: z.number().default(0),
  winRate: z.number().min(0).max(100).default(0),
  
  // FPS-specific metrics
  kills: z.number().default(0),
  deaths: z.number().default(0),
  assists: z.number().default(0),
  kda: z.number().default(0),
  adr: z.number().default(0), // Average Damage per Round
  headshotPercentage: z.number().min(0).max(100).default(0),
  
  // Role-specific metrics
  utilityThrown: z.number().default(0),
  utilityEffectiveness: z.number().min(0).max(100).default(0),
  entryFrags: z.number().default(0),
  clutchWins: z.number().default(0),
  clutchLosses: z.number().default(0),
  clutchRate: z.number().min(0).max(100).default(0),
  
  // Team metrics
  teamplayScore: z.number().min(0).max(100).default(0),
  communicationScore: z.number().min(0).max(100).default(0),
  
  // Map performance
  mapPerformance: z.record(z.string(), z.object({
    matches: z.number().default(0),
    wins: z.number().default(0),
    winRate: z.number().min(0).max(100).default(0),
    avgKda: z.number().default(0),
    avgAdr: z.number().default(0),
  })),
  
  // Time series data
  performanceTrend: z.array(z.object({
    date: z.date(),
    kda: z.number(),
    adr: z.number(),
    winRate: z.number(),
  })),
  
  calculatedAt: z.date(),
});

export const TeamMetricsSchema = z.object({
  id: z.string().uuid(),
  teamId: z.string().uuid(),
  
  // Overall performance
  totalMatches: z.number().default(0),
  totalWins: z.number().default(0),
  totalLosses: z.number().default(0),
  winRate: z.number().min(0).max(100).default(0),
  
  // Team stats
  avgKda: z.number().default(0),
  avgAdr: z.number().default(0),
  avgHeadshotPercentage: z.number().min(0).max(100).default(0),
  
  // Map performance
  mapStats: z.record(z.string(), z.object({
    matches: z.number().default(0),
    wins: z.number().default(0),
    winRate: z.number().min(0).max(100).default(0),
    avgRounds: z.number().default(0),
    avgDuration: z.number().default(0),
  })),
  
  // Side performance (T/CT for CS2/Valorant)
  sidePerformance: z.object({
    terrorist: z.object({
      matches: z.number().default(0),
      wins: z.number().default(0),
      winRate: z.number().min(0).max(100).default(0),
    }),
    counterTerrorist: z.object({
      matches: z.number().default(0),
      wins: z.number().default(0),
      winRate: z.number().min(0).max(100).default(0),
    }),
  }),
  
  // Round analysis
  roundStats: z.object({
    avgRoundsPerMatch: z.number().default(0),
    firstBloodRate: z.number().min(0).max(100).default(0),
    clutchRate: z.number().min(0).max(100).default(0),
    economyEfficiency: z.number().min(0).max(100).default(0),
  }),
  
  // Recent form
  recentForm: z.array(z.object({
    date: z.date(),
    result: z.enum(['WIN', 'LOSS', 'DRAW']),
    opponent: z.string().optional(),
    score: z.string().optional(),
  })),
  
  calculatedAt: z.date(),
});

export const AnalyticsDashboardSchema = z.object({
  id: z.string().uuid(),
  organizationId: z.string().uuid(),
  name: z.string().min(1).max(100),
  description: z.string().max(500).optional(),
  
  // Dashboard configuration
  timeRange: TimeRangeSchema.default('LAST_30_DAYS'),
  refreshInterval: z.number().default(300), // seconds
  
  // Widgets
  widgets: z.array(z.object({
    id: z.string().uuid(),
    type: z.enum([
      'METRIC_CARD',
      'LINE_CHART',
      'BAR_CHART',
      'PIE_CHART',
      'TABLE',
      'HEATMAP',
    ]),
    title: z.string(),
    config: z.record(z.any()),
    position: z.object({
      x: z.number(),
      y: z.number(),
      width: z.number(),
      height: z.number(),
    }),
  })),
  
  // Access control
  isPublic: z.boolean().default(false),
  sharedWith: z.array(z.string().uuid()).default([]), // userIds
  
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const MetricType = z.infer<typeof MetricTypeSchema>;
export const TimeRange = z.infer<typeof TimeRangeSchema>;
export const PlayerMetrics = z.infer<typeof PlayerMetricsSchema>;
export const TeamMetrics = z.infer<typeof TeamMetricsSchema>;
export const AnalyticsDashboard = z.infer<typeof AnalyticsDashboardSchema>;
