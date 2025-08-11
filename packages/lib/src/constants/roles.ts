export const USER_ROLES = {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ORG_ADMIN: 'ORG_ADMIN',
  TEAM_MANAGER: 'TEAM_MANAGER',
  COACH: 'COACH',
  ANALYST: 'ANALYST',
  PLAYER: 'PLAYER',
  CONTENT_CREATOR: 'CONTENT_CREATOR',
  SCOUT: 'SCOUT',
  MODERATOR: 'MODERATOR',
} as const;

export const PLAYER_ROLES = {
  IGL: 'IGL', // In-Game Leader
  ENTRY_FRAGGER: 'ENTRY_FRAGGER',
  SUPPORT: 'SUPPORT',
  AWPER: 'AWPER',
  LURKER: 'LURKER',
  FLEX: 'FLEX',
  CAPTAIN: 'CAPTAIN',
  COACH: 'COACH',
  ANALYST: 'ANALYST',
  SUBSTITUTE: 'SUBSTITUTE',
} as const;

export const PERMISSIONS = {
  // Organization management
  ORG_CREATE: 'org:create',
  ORG_READ: 'org:read',
  ORG_UPDATE: 'org:update',
  ORG_DELETE: 'org:delete',
  
  // Team management
  TEAM_CREATE: 'team:create',
  TEAM_READ: 'team:read',
  TEAM_UPDATE: 'team:update',
  TEAM_DELETE: 'team:delete',
  
  // Roster management
  ROSTER_READ: 'roster:read',
  ROSTER_CREATE: 'roster:create',
  ROSTER_UPDATE: 'roster:update',
  ROSTER_DELETE: 'roster:delete',
  
  // Match management
  MATCH_CREATE: 'match:create',
  MATCH_READ: 'match:read',
  MATCH_UPDATE: 'match:update',
  MATCH_DELETE: 'match:delete',
  MATCH_SCORE: 'match:score',
  
  // VOD management
  VOD_UPLOAD: 'vod:upload',
  VOD_READ: 'vod:read',
  VOD_UPDATE: 'vod:update',
  VOD_DELETE: 'vod:delete',
  VOD_ANALYZE: 'vod:analyze',
  
  // Analytics
  ANALYTICS_READ: 'analytics:read',
  ANALYTICS_EXPORT: 'analytics:export',
  ANALYTICS_CREATE: 'analytics:create',
  
  // User management
  USER_INVITE: 'user:invite',
  USER_READ: 'user:read',
  USER_UPDATE: 'user:update',
  USER_DELETE: 'user:delete',
  
  // Financial
  FINANCE_READ: 'finance:read',
  FINANCE_CREATE: 'finance:create',
  FINANCE_UPDATE: 'finance:update',
  
  // Content
  CONTENT_CREATE: 'content:create',
  CONTENT_READ: 'content:read',
  CONTENT_UPDATE: 'content:update',
  CONTENT_DELETE: 'content:delete',
  CONTENT_PUBLISH: 'content:publish',
  
  // Moderation
  MODERATE_USERS: 'moderate:users',
  MODERATE_CONTENT: 'moderate:content',
  MODERATE_MATCHES: 'moderate:matches',
  
  // Integrations
  INTEGRATION_MANAGE: 'integration:manage',
  WEBHOOK_MANAGE: 'webhook:manage',
} as const;

export const ROLE_PERMISSIONS: Record<string, string[]> = {
  [USER_ROLES.SUPER_ADMIN]: Object.values(PERMISSIONS),
  
  [USER_ROLES.ORG_ADMIN]: [
    PERMISSIONS.ORG_READ,
    PERMISSIONS.ORG_UPDATE,
    PERMISSIONS.TEAM_CREATE,
    PERMISSIONS.TEAM_READ,
    PERMISSIONS.TEAM_UPDATE,
    PERMISSIONS.TEAM_DELETE,
    PERMISSIONS.ROSTER_READ,
    PERMISSIONS.ROSTER_CREATE,
    PERMISSIONS.ROSTER_UPDATE,
    PERMISSIONS.ROSTER_DELETE,
    PERMISSIONS.MATCH_CREATE,
    PERMISSIONS.MATCH_READ,
    PERMISSIONS.MATCH_UPDATE,
    PERMISSIONS.MATCH_DELETE,
    PERMISSIONS.VOD_UPLOAD,
    PERMISSIONS.VOD_READ,
    PERMISSIONS.VOD_UPDATE,
    PERMISSIONS.VOD_DELETE,
    PERMISSIONS.ANALYTICS_READ,
    PERMISSIONS.ANALYTICS_EXPORT,
    PERMISSIONS.USER_INVITE,
    PERMISSIONS.USER_READ,
    PERMISSIONS.USER_UPDATE,
    PERMISSIONS.FINANCE_READ,
    PERMISSIONS.FINANCE_CREATE,
    PERMISSIONS.FINANCE_UPDATE,
    PERMISSIONS.CONTENT_CREATE,
    PERMISSIONS.CONTENT_READ,
    PERMISSIONS.CONTENT_UPDATE,
    PERMISSIONS.CONTENT_DELETE,
    PERMISSIONS.CONTENT_PUBLISH,
    PERMISSIONS.MODERATE_USERS,
    PERMISSIONS.MODERATE_CONTENT,
    PERMISSIONS.MODERATE_MATCHES,
    PERMISSIONS.INTEGRATION_MANAGE,
    PERMISSIONS.WEBHOOK_MANAGE,
  ],
  
  [USER_ROLES.TEAM_MANAGER]: [
    PERMISSIONS.TEAM_READ,
    PERMISSIONS.TEAM_UPDATE,
    PERMISSIONS.ROSTER_READ,
    PERMISSIONS.ROSTER_CREATE,
    PERMISSIONS.ROSTER_UPDATE,
    PERMISSIONS.ROSTER_DELETE,
    PERMISSIONS.MATCH_CREATE,
    PERMISSIONS.MATCH_READ,
    PERMISSIONS.MATCH_UPDATE,
    PERMISSIONS.MATCH_SCORE,
    PERMISSIONS.VOD_READ,
    PERMISSIONS.ANALYTICS_READ,
    PERMISSIONS.USER_INVITE,
    PERMISSIONS.USER_READ,
    PERMISSIONS.CONTENT_CREATE,
    PERMISSIONS.CONTENT_READ,
    PERMISSIONS.CONTENT_UPDATE,
  ],
  
  [USER_ROLES.COACH]: [
    PERMISSIONS.TEAM_READ,
    PERMISSIONS.ROSTER_READ,
    PERMISSIONS.MATCH_READ,
    PERMISSIONS.MATCH_UPDATE,
    PERMISSIONS.VOD_UPLOAD,
    PERMISSIONS.VOD_READ,
    PERMISSIONS.VOD_ANALYZE,
    PERMISSIONS.ANALYTICS_READ,
    PERMISSIONS.ANALYTICS_EXPORT,
    PERMISSIONS.CONTENT_CREATE,
    PERMISSIONS.CONTENT_READ,
  ],
  
  [USER_ROLES.ANALYST]: [
    PERMISSIONS.TEAM_READ,
    PERMISSIONS.ROSTER_READ,
    PERMISSIONS.MATCH_READ,
    PERMISSIONS.VOD_READ,
    PERMISSIONS.VOD_ANALYZE,
    PERMISSIONS.ANALYTICS_READ,
    PERMISSIONS.ANALYTICS_EXPORT,
    PERMISSIONS.CONTENT_READ,
  ],
  
  [USER_ROLES.PLAYER]: [
    PERMISSIONS.TEAM_READ,
    PERMISSIONS.ROSTER_READ,
    PERMISSIONS.MATCH_READ,
    PERMISSIONS.VOD_READ,
    PERMISSIONS.ANALYTICS_READ,
    PERMISSIONS.CONTENT_READ,
  ],
  
  [USER_ROLES.CONTENT_CREATOR]: [
    PERMISSIONS.TEAM_READ,
    PERMISSIONS.MATCH_READ,
    PERMISSIONS.VOD_READ,
    PERMISSIONS.CONTENT_CREATE,
    PERMISSIONS.CONTENT_READ,
    PERMISSIONS.CONTENT_UPDATE,
    PERMISSIONS.CONTENT_PUBLISH,
  ],
  
  [USER_ROLES.SCOUT]: [
    PERMISSIONS.TEAM_READ,
    PERMISSIONS.ROSTER_READ,
    PERMISSIONS.MATCH_READ,
    PERMISSIONS.VOD_READ,
    PERMISSIONS.ANALYTICS_READ,
    PERMISSIONS.CONTENT_READ,
  ],
  
  [USER_ROLES.MODERATOR]: [
    PERMISSIONS.TEAM_READ,
    PERMISSIONS.MATCH_READ,
    PERMISSIONS.VOD_READ,
    PERMISSIONS.CONTENT_READ,
    PERMISSIONS.MODERATE_USERS,
    PERMISSIONS.MODERATE_CONTENT,
    PERMISSIONS.MODERATE_MATCHES,
  ],
};

export const ROLE_DESCRIPTIONS: Record<string, string> = {
  [USER_ROLES.SUPER_ADMIN]: 'Full system access and control over all organizations',
  [USER_ROLES.ORG_ADMIN]: 'Full control over organization, teams, and members',
  [USER_ROLES.TEAM_MANAGER]: 'Manages team roster, matches, and player coordination',
  [USER_ROLES.COACH]: 'Analyzes performance, creates training plans, and coaches players',
  [USER_ROLES.ANALYST]: 'Analyzes data, creates reports, and provides insights',
  [USER_ROLES.PLAYER]: 'Team member with access to schedules and performance data',
  [USER_ROLES.CONTENT_CREATOR]: 'Creates and manages content, streams, and social media',
  [USER_ROLES.SCOUT]: 'Evaluates potential players and creates scouting reports',
  [USER_ROLES.MODERATOR]: 'Moderates community content and enforces rules',
};

export const PLAYER_ROLE_DESCRIPTIONS: Record<string, string> = {
  [PLAYER_ROLES.IGL]: 'In-Game Leader - Makes strategic decisions and calls',
  [PLAYER_ROLES.ENTRY_FRAGGER]: 'First player to enter sites and secure kills',
  [PLAYER_ROLES.SUPPORT]: 'Provides utility and support to teammates',
  [PLAYER_ROLES.AWPER]: 'Primary sniper and long-range specialist',
  [PLAYER_ROLES.LURKER]: 'Flanks and creates pressure from unexpected angles',
  [PLAYER_ROLES.FLEX]: 'Adaptable player who can fill multiple roles',
  [PLAYER_ROLES.CAPTAIN]: 'Team captain and leader',
  [PLAYER_ROLES.COACH]: 'Team coach and strategist',
  [PLAYER_ROLES.ANALYST]: 'Performance analyst and data specialist',
  [PLAYER_ROLES.SUBSTITUTE]: 'Backup player available when needed',
};
