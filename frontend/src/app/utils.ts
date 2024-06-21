/**
 * Formats a date string into a more readable format.
 * @param date - The date string to format.
 * @param locale - The locale string to use for formatting.
 * @returns A formatted date string.
 */
export function formatDate(date: string, locale: string = 'en-US'): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Date(date).toLocaleDateString(locale, options);
  }
  
  /**
   * Generates a unique identifier.
   * @returns A unique identifier string.
   */
  export function generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
  
  /**
   * Debounces a function to limit the rate at which it can be invoked.
   * @param func - The function to debounce.
   * @param wait - The number of milliseconds to delay.
   * @returns A debounced version of the function.
   */
  export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): T {
    let timeout: ReturnType<typeof setTimeout>;
    return function (...args: Parameters<T>): void {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    } as T;
  }
  
  /**
   * Throttles a function to limit the rate at which it can be invoked.
   * @param func - The function to throttle.
   * @param limit - The number of milliseconds to wait before allowing the function to be called again.
   * @returns A throttled version of the function.
   */
  export function throttle<T extends (...args: any[]) => any>(func: T, limit: number): T {
    let inThrottle: boolean;
    return function (...args: Parameters<T>): void {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    } as T;
  }
  
  /**
   * Checks if an object is empty.
   * @param obj - The object to check.
   * @returns True if the object is empty, false otherwise.
   */
  export function isEmptyObject(obj: Record<string, any>): boolean {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  }
  
  /**
   * Parses a JSON string safely.
   * @param str - The JSON string to parse.
   * @param fallback - The fallback value if parsing fails.
   * @returns The parsed JSON object or the fallback value.
   */
  export function safeJsonParse<T>(str: string, fallback: T): T {
    try {
      return JSON.parse(str) as T;
    } catch (error) {
      return fallback;
    }
  }
  
  /**
   * Clamps a number within the specified range.
   * @param num - The number to clamp.
   * @param min - The minimum value.
   * @param max - The maximum value.
   * @returns The clamped number.
   */
  export function clamp(num: number, min: number, max: number): number {
    return Math.min(Math.max(num, min), max);
  }
  