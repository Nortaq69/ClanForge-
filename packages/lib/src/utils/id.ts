import { v4 as uuidv4, v5 as uuidv5, validate as uuidValidate } from 'uuid';

/**
 * Generates a new UUID v4
 */
export const generateUuid = (): string => {
  return uuidv4();
};

/**
 * Generates a UUID v5 based on a namespace and name
 */
export const generateNamespacedUuid = (namespace: string, name: string): string => {
  return uuidv5(name, namespace);
};

/**
 * Validates if a string is a valid UUID
 */
export const isValidUuid = (uuid: string): boolean => {
  return uuidValidate(uuid);
};

/**
 * Generates a short ID (8 characters)
 */
export const generateShortId = (): string => {
  return Math.random().toString(36).substring(2, 10);
};

/**
 * Generates a numeric ID
 */
export const generateNumericId = (): number => {
  return Date.now() + Math.floor(Math.random() * 1000);
};

/**
 * Generates a team tag (2-6 characters, alphanumeric)
 */
export const generateTeamTag = (length: number = 4): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

/**
 * Generates a username (3-12 characters, alphanumeric + underscore)
 */
export const generateUsername = (length: number = 8): string => {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789_';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

/**
 * Generates a random string with specified length and character set
 */
export const generateRandomString = (
  length: number = 16,
  charset: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
): string => {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return result;
};

/**
 * Generates a secure random token (32 characters)
 */
export const generateSecureToken = (): string => {
  return generateRandomString(32, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789');
};

/**
 * Generates a hex color code
 */
export const generateHexColor = (): string => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
};

/**
 * Generates a Discord-style snowflake ID
 */
export const generateSnowflake = (): string => {
  const timestamp = BigInt(Date.now());
  const workerId = BigInt(Math.floor(Math.random() * 32));
  const processId = BigInt(Math.floor(Math.random() * 32));
  const increment = BigInt(Math.floor(Math.random() * 4096));
  
  return ((timestamp << 22n) | (workerId << 17n) | (processId << 12n) | increment).toString();
};

/**
 * Generates a Steam-style Steam ID
 */
export const generateSteamId = (): string => {
  const accountId = Math.floor(Math.random() * 1000000000);
  return `STEAM_0:${accountId % 2}:${Math.floor(accountId / 2)}`;
};

/**
 * Generates a Riot-style Riot ID
 */
export const generateRiotId = (): string => {
  const username = generateUsername(3 + Math.floor(Math.random() * 10));
  const tag = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  return `${username}#${tag}`;
};

/**
 * Generates a unique filename with timestamp
 */
export const generateUniqueFilename = (originalName: string, extension?: string): string => {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000);
  const ext = extension || originalName.split('.').pop() || '';
  const name = originalName.split('.')[0] || 'file';
  
  return `${name}_${timestamp}_${random}.${ext}`;
};

/**
 * Generates a match lobby code (6 characters)
 */
export const generateLobbyCode = (): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

/**
 * Generates a tournament code (8 characters)
 */
export const generateTournamentCode = (): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};
