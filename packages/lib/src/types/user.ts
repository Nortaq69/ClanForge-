import { z } from 'zod';

export enum UserRole {
  PLAYER = 'player',
  COACH = 'coach',
  MANAGER = 'manager',
  ADMIN = 'admin',
  OWNER = 'owner'
}

export enum UserStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  SUSPENDED = 'suspended',
  BANNED = 'banned'
}

export interface UserProfile {
  id: string
  username: string
  email: string
  firstName?: string
  lastName?: string
  avatar?: string
  bio?: string
  dateOfBirth?: Date
  country?: string
  timezone?: string
  socialLinks?: {
    discord?: string
    twitter?: string
    twitch?: string
    youtube?: string
    instagram?: string
  }
}

export interface UserStats {
  totalMatches: number
  wins: number
  losses: number
  winRate: number
  totalPlayTime: number
  averageScore: number
  rank?: number
  tier?: string
}

export interface User {
  id: string
  profile: UserProfile
  role: UserRole
  status: UserStatus
  stats: UserStats
  teams: string[] // Team IDs
  organizations: string[] // Organization IDs
  createdAt: Date
  updatedAt: Date
  lastLoginAt?: Date
  emailVerified: boolean
  twoFactorEnabled: boolean
}

export interface CreateUserDto {
  username: string
  email: string
  password: string
  firstName?: string
  lastName?: string
  role?: UserRole
}

export interface UpdateUserDto {
  firstName?: string
  lastName?: string
  bio?: string
  avatar?: string
  socialLinks?: UserProfile['socialLinks']
  timezone?: string
}

export interface UserCredentials {
  email: string
  password: string
}

export interface AuthResponse {
  user: User
  accessToken: string
  refreshToken: string
  expiresIn: number
}
