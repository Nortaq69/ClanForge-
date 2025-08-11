import { z } from 'zod';

export const GameTypeSchema = z.enum([
  'CS2',
  'VALORANT',
  'LEAGUE_OF_LEGENDS',
  'DOTA2',
  'ROCKET_LEAGUE',
  'FORTNITE',
  'APEX_LEGENDS',
  'OVERWATCH2',
  'RAINBOW_SIX_SIEGE',
  'OTHER',
]);

export const PlayerRoleSchema = z.enum([
  'IGL', // In-Game Leader
  'ENTRY_FRAGGER',
  'SUPPORT',
  'AWPER',
  'LURKER',
  'FLEX',
  'CAPTAIN',
  'COACH',
  'ANALYST',
  'SUBSTITUTE',
]);

export const PlayerStatusSchema = z.enum([
  'ACTIVE',
  'BENCH',
  'TRIAL',
  'RETIRED',
  'SUSPENDED',
  'INJURED',
]);

export const TeamSchema = z.object({
  id: z.string().uuid(),
  organizationId: z.string().uuid(),
  name: z.string().min(1).max(100),
  tag: z.string().min(2).max(10).regex(/^[A-Z0-9]+$/),
  game: GameTypeSchema,
  description: z.string().max(500).optional(),
  logo: z.string().url().optional(),
  banner: z.string().url().optional(),
  founded: z.date().optional(),
  region: z.string().min(2).max(3).optional(),
  tier: z.enum(['AMATEUR', 'SEMI_PRO', 'PRO', 'TIER1', 'TIER2', 'TIER3']).default('AMATEUR'),
  achievements: z.array(z.object({
    title: z.string(),
    date: z.date(),
    description: z.string().optional(),
    image: z.string().url().optional(),
  })),
  socialLinks: z.object({
    twitter: z.string().optional(),
    instagram: z.string().optional(),
    youtube: z.string().optional(),
    twitch: z.string().optional(),
  }),
  isActive: z.boolean().default(true),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const RosterEntrySchema = z.object({
  id: z.string().uuid(),
  teamId: z.string().uuid(),
  userId: z.string().uuid(),
  role: PlayerRoleSchema,
  status: PlayerStatusSchema.default('ACTIVE'),
  joinDate: z.date(),
  leaveDate: z.date().optional(),
  contract: z.object({
    startDate: z.date(),
    endDate: z.date().optional(),
    salary: z.number().optional(),
    currency: z.string().default('USD'),
    terms: z.string().optional(),
  }).optional(),
  stats: z.object({
    matchesPlayed: z.number().default(0),
    wins: z.number().default(0),
    losses: z.number().default(0),
    draws: z.number().default(0),
    kda: z.number().default(0),
    adr: z.number().default(0),
    headshotPercentage: z.number().default(0),
  }).default({}),
  isActive: z.boolean().default(true),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const TeamCreateSchema = TeamSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const TeamUpdateSchema = TeamCreateSchema.partial();

export const RosterEntryCreateSchema = RosterEntrySchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const RosterEntryUpdateSchema = RosterEntryCreateSchema.partial();

export enum TeamStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  DISBANDED = 'disbanded',
  SUSPENDED = 'suspended'
}

export enum TeamTier {
  AMATEUR = 'amateur',
  SEMI_PRO = 'semi_pro',
  PROFESSIONAL = 'professional',
  ELITE = 'elite'
}

export interface TeamMember {
  userId: string
  role: string
  joinedAt: Date
  isActive: boolean
  permissions: string[]
}

export interface TeamStats {
  totalMatches: number
  wins: number
  losses: number
  winRate: number
  totalTournaments: number
  tournamentWins: number
  averageRank: number
  totalPrizeMoney: number
}

export interface Team {
  id: string
  name: string
  tag: string
  description?: string
  logo?: string
  banner?: string
  status: TeamStatus
  tier: TeamTier
  organizationId: string
  members: TeamMember[]
  stats: TeamStats
  games: string[] // Game IDs
  socialLinks?: {
    website?: string
    twitter?: string
    discord?: string
    twitch?: string
    youtube?: string
  }
  createdAt: Date
  updatedAt: Date
  foundedAt?: Date
}

export interface CreateTeamDto {
  name: string
  tag: string
  description?: string
  organizationId: string
  games: string[]
  logo?: string
  banner?: string
}

export interface UpdateTeamDto {
  name?: string
  tag?: string
  description?: string
  logo?: string
  banner?: string
  status?: TeamStatus
  tier?: TeamTier
  socialLinks?: Team['socialLinks']
}

export interface AddTeamMemberDto {
  userId: string
  role: string
  permissions: string[]
}

export interface RemoveTeamMemberDto {
  userId: string
}

export type GameType = z.infer<typeof GameTypeSchema>;
export type PlayerRole = z.infer<typeof PlayerRoleSchema>;
export type PlayerStatus = z.infer<typeof PlayerStatusSchema>;
export type Team = z.infer<typeof TeamSchema>;
export type TeamCreate = z.infer<typeof TeamCreateSchema>;
export type TeamUpdate = z.infer<typeof TeamUpdateSchema>;
export type RosterEntry = z.infer<typeof RosterEntrySchema>;
export type RosterEntryCreate = z.infer<typeof RosterEntryCreateSchema>;
export type RosterEntryUpdate = z.infer<typeof RosterEntryUpdateSchema>;
