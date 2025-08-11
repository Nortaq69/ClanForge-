export enum TournamentStatus {
  DRAFT = 'draft',
  REGISTRATION_OPEN = 'registration_open',
  REGISTRATION_CLOSED = 'registration_closed',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled'
}

export enum TournamentFormat {
  SINGLE_ELIMINATION = 'single_elimination',
  DOUBLE_ELIMINATION = 'double_elimination',
  ROUND_ROBIN = 'round_robin',
  SWISS = 'swiss',
  CUSTOM = 'custom'
}

export enum TournamentTier {
  LOCAL = 'local',
  REGIONAL = 'regional',
  NATIONAL = 'national',
  INTERNATIONAL = 'international',
  MAJOR = 'major'
}

export interface TournamentPrize {
  position: number
  amount: number
  currency: string
  description?: string
}

export interface TournamentRule {
  id: string
  title: string
  description: string
  category: string
  isRequired: boolean
}

export interface TournamentBracket {
  id: string
  name: string
  type: TournamentFormat
  rounds: TournamentRound[]
  participants: string[] // Team/Player IDs
}

export interface TournamentRound {
  id: string
  name: string
  matches: TournamentMatch[]
  isComplete: boolean
}

export interface TournamentMatch {
  id: string
  team1Id: string
  team2Id: string
  winnerId?: string
  score?: string
  scheduledTime?: Date
  isComplete: boolean
  roundId: string
}

export interface Tournament {
  id: string
  name: string
  description?: string
  gameId: string
  organizationId: string
  status: TournamentStatus
  format: TournamentFormat
  tier: TournamentTier
  startDate: Date
  endDate: Date
  registrationDeadline: Date
  maxParticipants: number
  currentParticipants: number
  entryFee?: number
  prizePool: TournamentPrize[]
  rules: TournamentRule[]
  brackets: TournamentBracket[]
  logo?: string
  banner?: string
  streamUrl?: string
  socialLinks?: {
    website?: string
    twitter?: string
    discord?: string
    twitch?: string
  }
  createdAt: Date
  updatedAt: Date
}

export interface CreateTournamentDto {
  name: string
  description?: string
  gameId: string
  organizationId: string
  format: TournamentFormat
  tier: TournamentTier
  startDate: Date
  endDate: Date
  registrationDeadline: Date
  maxParticipants: number
  entryFee?: number
  prizePool: TournamentPrize[]
  rules: TournamentRule[]
  logo?: string
  banner?: string
}

export interface UpdateTournamentDto {
  name?: string
  description?: string
  status?: TournamentStatus
  startDate?: Date
  endDate?: Date
  registrationDeadline?: Date
  maxParticipants?: number
  entryFee?: number
  prizePool?: TournamentPrize[]
  rules?: TournamentRule[]
  logo?: string
  banner?: string
  streamUrl?: string
  socialLinks?: Tournament['socialLinks']
}

export interface RegisterTeamDto {
  tournamentId: string
  teamId: string
  players: string[] // Player IDs
}

export interface UnregisterTeamDto {
  tournamentId: string
  teamId: string
}
