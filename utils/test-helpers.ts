import { Locator } from "@playwright/test";

// --- TYPES & INTERFACES ---

export type Selector = string | Locator;

export interface User {
  username: string;
  password: string;
  age?: number;
}

export type TestStatus = 'passed' | 'failed' | 'skipped';

// Utility types
export type LoginCredentials = Pick<User, 'username' | 'password'>;
export type RegisterData = Omit<User, 'age'>;
export type UserUpdate = Partial<User>;
export type ValidationMessages = Record<string, string>;

// --- HELPER FUNCTIONS ---

/**
 * Gets the text of an element, accepting either a string selector or a Locator.
 */
export async function getElementText(element: Selector): Promise<string> {
  if (typeof element === 'string') {
    return `Text for selector: ${element}`; 
  } else {
    return await element.innerText();
  }
}

/**
 * Universal wrapper function using Generics.
 */
export function wrapResponse<T>(data: T): T {
  return data;
}