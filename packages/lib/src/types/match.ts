import { z } from 'zod';

export const MatchTypeSchema = z.enum([
  'SCRIM',
  'TOURNAMENT',
  'LEAGUE',
  'SHOWMATCH',
  'FRIENDLY',
  'QUALIFIER',
]);

export const MatchStatusSchema = z.enum([
  'SCHEDULED',
  'LOBBY_OPEN',
  'IN_PROGRESS',
  'PAUSED',
  'COMPLETED',
  'CANCELLED',
  'POSTPONED',
]);

export const MatchFormatSchema = z.enum([
  'BO1',
  'BO3',
  'BO5',
  'ROUND_ROBIN',
  'SINGLE_ELIMINATION',
  'DOUBLE_ELIMINATION',
  'SWISS',
]);

export const MatchResultSchema = z.object({
  winner: z.string().uuid().optional(), // teamId
  score: z.object({
    teamA: z.number(),
    teamB: z.number(),
  }),
  rounds: z.array(z.object({
    roundNumber: z.number(),
    winner: z.string().uuid().optional(),
    duration: z.number(), // seconds
    map: z.string().optional(),
  })),
  duration: z.number(), // total match duration in seconds
  completedAt: z.date().optional(),
});

export const MatchSchema = z.object({
  id: z.string().uuid(),
  organizationId: z.string().uuid(),
  type: MatchTypeSchema,
  status: MatchStatusSchema.default('SCHEDULED'),
  title: z.string().min(1).max(200),
  description: z.string().max(1000).optional(),
  
  // Teams
  teamA: z.object({
    teamId: z.string().uuid(),
    lineup: z.array(z.string().uuid()), // userIds
    score: z.number().default(0),
  }),
  teamB: z.object({
    teamId: z.string().uuid().optional(), // Optional for scrim finder
    lineup: z.array(z.string().uuid()).optional(),
    score: z.number().default(0),
  }),
  
  // Match details
  format: MatchFormatSchema.default('BO1'),
  mapPool: z.array(z.string()),
  veto: z.object({
    rounds: z.array(z.object({
      round: z.number(),
      teamId: z.string().uuid(),
      action: z.enum(['BAN', 'PICK']),
      map: z.string(),
    })),
    completed: z.boolean().default(false),
  }).optional(),
  
  // Scheduling
  scheduledAt: z.date(),
  estimatedDuration: z.number().default(1800), // 30 minutes default
  lobbyCode: z.string().optional(),
  streamUrl: z.string().url().optional(),
  eventUrl: z.string().url().optional(),
  
  // Results
  result: MatchResultSchema.optional(),
  
  // Media
  vods: z.array(z.string().uuid()).default([]), // VOD IDs
  
  // Metadata
  tags: z.array(z.string()).default([]),
  notes: z.string().optional(),
  isPublic: z.boolean().default(false),
  
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const MatchCreateSchema = MatchSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const MatchUpdateSchema = MatchCreateSchema.partial();

export const ScrimSlotSchema = z.object({
  id: z.string().uuid(),
  organizationId: z.string().uuid(),
  teamId: z.string().uuid(),
  title: z.string().min(1).max(200),
  description: z.string().max(1000).optional(),
  game: z.string(),
  format: MatchFormatSchema,
  mapPool: z.array(z.string()),
  scheduledAt: z.date(),
  duration: z.number().default(1800),
  requirements: z.object({
    minRank: z.string().optional(),
    maxRank: z.string().optional(),
    region: z.string().optional(),
    age: z.object({
      min: z.number().optional(),
      max: z.number().optional(),
    }).optional(),
  }).optional(),
  isActive: z.boolean().default(true),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type MatchType = z.infer<typeof MatchTypeSchema>;
export type MatchStatus = z.infer<typeof MatchStatusSchema>;
export type MatchFormat = z.infer<typeof MatchFormatSchema>;
export type MatchResult = z.infer<typeof MatchResultSchema>;
export type Match = z.infer<typeof MatchSchema>;
export type MatchCreate = z.infer<typeof MatchCreateSchema>;
export type MatchUpdate = z.infer<typeof MatchUpdateSchema>;
export type ScrimSlot = z.infer<typeof ScrimSlotSchema>;
