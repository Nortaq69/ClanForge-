import { z } from 'zod';

export const VODStatusSchema = z.enum([
  'UPLOADING',
  'PROCESSING',
  'READY',
  'FAILED',
  'DELETED',
]);

export const VODQualitySchema = z.enum([
  '144P',
  '240P',
  '360P',
  '480P',
  '720P',
  '1080P',
  '1440P',
  '4K',
]);

export const VODSourceSchema = z.enum([
  'UPLOAD',
  'YOUTUBE',
  'TWITCH',
  'RECORDING',
  'REPLAY_FILE',
]);

export const VODSchema = z.object({
  id: z.string().uuid(),
  organizationId: z.string().uuid(),
  title: z.string().min(1).max(200),
  description: z.string().max(1000).optional(),
  
  // Source information
  source: VODSourceSchema,
  sourceUrl: z.string().url().optional(),
  sourceId: z.string().optional(), // YouTube video ID, Twitch VOD ID, etc.
  
  // File information
  filePath: z.string().optional(),
  fileName: z.string().optional(),
  fileSize: z.number().optional(), // bytes
  duration: z.number().optional(), // seconds
  thumbnail: z.string().url().optional(),
  
  // Processing
  status: VODStatusSchema.default('UPLOADING'),
  qualities: z.array(VODQualitySchema).default(['720P']),
  processingProgress: z.number().min(0).max(100).default(0),
  processingError: z.string().optional(),
  
  // Metadata
  game: z.string().optional(),
  map: z.string().optional(),
  matchId: z.string().uuid().optional(),
  teamId: z.string().uuid().optional(),
  players: z.array(z.string().uuid()).default([]), // userIds
  tags: z.array(z.string()).default([]),
  
  // Privacy & access
  isPublic: z.boolean().default(false),
  accessControl: z.object({
    organizationOnly: z.boolean().default(true),
    teamOnly: z.boolean().default(false),
    publicAccess: z.boolean().default(false),
    password: z.string().optional(),
  }),
  
  // Analytics
  views: z.number().default(0),
  downloads: z.number().default(0),
  
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const ClipSchema = z.object({
  id: z.string().uuid(),
  vodId: z.string().uuid(),
  title: z.string().min(1).max(200),
  description: z.string().max(500).optional(),
  
  // Timing
  startTime: z.number(), // seconds from VOD start
  endTime: z.number(), // seconds from VOD start
  duration: z.number(), // calculated
  
  // Content
  thumbnail: z.string().url().optional(),
  highlights: z.array(z.object({
    timestamp: z.number(),
    type: z.enum(['KILL', 'DEATH', 'ASSIST', 'OBJECTIVE', 'HIGHLIGHT', 'OTHER']),
    description: z.string().optional(),
    playerId: z.string().uuid().optional(),
  })),
  
  // Annotations
  annotations: z.array(z.object({
    id: z.string().uuid(),
    timestamp: z.number(),
    x: z.number(), // relative position 0-1
    y: z.number(), // relative position 0-1
    type: z.enum(['ARROW', 'CIRCLE', 'TEXT', 'LINE', 'RECTANGLE']),
    content: z.string().optional(),
    color: z.string().regex(/^#[0-9A-F]{6}$/i).default('#FF0000'),
    playerId: z.string().uuid().optional(),
  })),
  
  // Export
  exportFormats: z.array(z.enum(['MP4', 'GIF', 'WEBM'])).default(['MP4']),
  exportedFiles: z.array(z.object({
    format: z.string(),
    url: z.string().url(),
    size: z.number(),
    createdAt: z.date(),
  })),
  
  // Sharing
  isPublic: z.boolean().default(false),
  shareUrl: z.string().url().optional(),
  socialShares: z.array(z.object({
    platform: z.enum(['TWITTER', 'YOUTUBE', 'TIKTOK', 'INSTAGRAM']),
    url: z.string().url(),
    sharedAt: z.date(),
  })),
  
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const VODCreateSchema = VODSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const VODUpdateSchema = VODCreateSchema.partial();

export const ClipCreateSchema = ClipSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const ClipUpdateSchema = ClipCreateSchema.partial();

export enum VODStatus {
  UPLOADING = 'uploading',
  PROCESSING = 'processing',
  READY = 'ready',
  FAILED = 'failed',
  DELETED = 'deleted'
}

export enum VODType {
  MATCH_REPLAY = 'match_replay',
  PRACTICE_SESSION = 'practice_session',
  TOURNAMENT_GAME = 'tournament_game',
  ANALYSIS = 'analysis',
  HIGHLIGHT = 'highlight'
}

export interface VODMetadata {
  duration: number // in seconds
  resolution: string
  frameRate: number
  bitrate: number
  codec: string
  fileSize: number // in bytes
}

export interface VODTimestamp {
  id: string
  time: number // in seconds
  title: string
  description?: string
  tags: string[]
  createdBy: string
  createdAt: Date
}

export interface VODAnnotation {
  id: string
  timestamp: number // in seconds
  type: 'drawing' | 'text' | 'arrow' | 'circle' | 'rectangle'
  data: any // Specific to annotation type
  createdBy: string
  createdAt: Date
}

export interface VODComment {
  id: string
  timestamp: number // in seconds
  content: string
  authorId: string
  authorName: string
  replies: VODComment[]
  createdAt: Date
  updatedAt: Date
}

export interface VOD {
  id: string
  title: string
  description?: string
  type: VODType
  status: VODStatus
  url: string
  thumbnailUrl?: string
  metadata: VODMetadata
  gameId: string
  teamId?: string
  tournamentId?: string
  matchId?: string
  uploadedBy: string
  uploadedAt: Date
  processedAt?: Date
  timestamps: VODTimestamp[]
  annotations: VODAnnotation[]
  comments: VODComment[]
  tags: string[]
  isPublic: boolean
  viewCount: number
  likeCount: number
  createdAt: Date
  updatedAt: Date
}

export interface CreateVODDto {
  title: string
  description?: string
  type: VODType
  gameId: string
  teamId?: string
  tournamentId?: string
  matchId?: string
  tags: string[]
  isPublic: boolean
}

export interface UpdateVODDto {
  title?: string
  description?: string
  tags?: string[]
  isPublic?: boolean
}

export interface AddVODTimestampDto {
  time: number
  title: string
  description?: string
  tags: string[]
}

export interface AddVODAnnotationDto {
  timestamp: number
  type: VODAnnotation['type']
  data: any
}

export interface AddVODCommentDto {
  timestamp: number
  content: string
}

export interface VODProcessingJob {
  vodId: string
  status: VODStatus
  progress: number
  error?: string
  startedAt: Date
  completedAt?: Date
}

export type VODStatus = z.infer<typeof VODStatusSchema>;
export type VODQuality = z.infer<typeof VODQualitySchema>;
export type VODSource = z.infer<typeof VODSourceSchema>;
export type VOD = z.infer<typeof VODSchema>;
export type VODCreate = z.infer<typeof VODCreateSchema>;
export type VODUpdate = z.infer<typeof VODUpdateSchema>;
export type Clip = z.infer<typeof ClipSchema>;
export type ClipCreate = z.infer<typeof ClipCreateSchema>;
export type ClipUpdate = z.infer<typeof ClipUpdateSchema>;
