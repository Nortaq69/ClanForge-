import { format, formatDistance, formatRelative, isValid, parseISO, differenceInSeconds, addDays, subDays, startOfDay, endOfDay } from 'date-fns';

/**
 * Formats a date to a human-readable string
 */
export const formatDate = (date: Date | string, formatStr: string = 'MMM dd, yyyy'): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  
  if (!isValid(dateObj)) {
    return 'Invalid date';
  }
  
  return format(dateObj, formatStr);
};

/**
 * Formats a date to a relative time string (e.g., "2 hours ago")
 */
export const formatRelativeTime = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  
  if (!isValid(dateObj)) {
    return 'Invalid date';
  }
  
  return formatDistance(dateObj, new Date(), { addSuffix: true });
};

/**
 * Formats a date to a relative string (e.g., "Today at 2:30 PM")
 */
export const formatRelativeDate = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  
  if (!isValid(dateObj)) {
    return 'Invalid date';
  }
  
  return formatRelative(dateObj, new Date());
};

/**
 * Formats a duration in seconds to a human-readable string
 */
export const formatDuration = (seconds: number): string => {
  if (seconds < 60) {
    return `${seconds}s`;
  }
  
  if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  }
  
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  
  if (remainingSeconds === 0) {
    return `${hours}h ${minutes}m`;
  }
  
  return `${hours}h ${minutes}m ${remainingSeconds}s`;
};

/**
 * Gets the time difference between two dates in seconds
 */
export const getTimeDifference = (date1: Date | string, date2: Date | string): number => {
  const dateObj1 = typeof date1 === 'string' ? parseISO(date1) : date1;
  const dateObj2 = typeof date2 === 'string' ? parseISO(date2) : date2;
  
  if (!isValid(dateObj1) || !isValid(dateObj2)) {
    return 0;
  }
  
  return differenceInSeconds(dateObj1, dateObj2);
};

/**
 * Checks if a date is today
 */
export const isToday = (date: Date | string): boolean => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  
  if (!isValid(dateObj)) {
    return false;
  }
  
  const today = new Date();
  return format(dateObj, 'yyyy-MM-dd') === format(today, 'yyyy-MM-dd');
};

/**
 * Checks if a date is in the past
 */
export const isPast = (date: Date | string): boolean => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  
  if (!isValid(dateObj)) {
    return false;
  }
  
  return dateObj < new Date();
};

/**
 * Checks if a date is in the future
 */
export const isFuture = (date: Date | string): boolean => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  
  if (!isValid(dateObj)) {
    return false;
  }
  
  return dateObj > new Date();
};

/**
 * Gets the start of a day
 */
export const getStartOfDay = (date: Date | string): Date => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  
  if (!isValid(dateObj)) {
    return new Date();
  }
  
  return startOfDay(dateObj);
};

/**
 * Gets the end of a day
 */
export const getEndOfDay = (date: Date | string): Date => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  
  if (!isValid(dateObj)) {
    return new Date();
  }
  
  return endOfDay(dateObj);
};

/**
 * Adds days to a date
 */
export const addDaysToDate = (date: Date | string, days: number): Date => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  
  if (!isValid(dateObj)) {
    return new Date();
  }
  
  return addDays(dateObj, days);
};

/**
 * Subtracts days from a date
 */
export const subtractDaysFromDate = (date: Date | string, days: number): Date => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  
  if (!isValid(dateObj)) {
    return new Date();
  }
  
  return subDays(dateObj, days);
};

/**
 * Formats a date for display in different timezones
 */
export const formatDateInTimezone = (
  date: Date | string,
  timezone: string,
  formatStr: string = 'MMM dd, yyyy HH:mm:ss'
): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  
  if (!isValid(dateObj)) {
    return 'Invalid date';
  }
  
  try {
    // Note: This is a simplified implementation
    // In production, you'd want to use a proper timezone library like date-fns-tz
    return format(dateObj, formatStr);
  } catch (error) {
    return formatDate(dateObj, formatStr);
  }
};

/**
 * Gets the current timestamp in seconds
 */
export const getCurrentTimestamp = (): number => {
  return Math.floor(Date.now() / 1000);
};

/**
 * Converts a timestamp to a Date object
 */
export const timestampToDate = (timestamp: number): Date => {
  return new Date(timestamp * 1000);
};

/**
 * Converts a Date object to a timestamp
 */
export const dateToTimestamp = (date: Date): number => {
  return Math.floor(date.getTime() / 1000);
};
