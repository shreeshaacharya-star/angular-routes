/**
 * This registry makes sure that the same brand names are not being used in different contexts.
 * Same brand names should never be used in different contexts.
 */
const BRAND_REGISTRY = {
  userName: 'user-name',
  userEmail: 'user-email',
  strongPassword: 'strong-password',
  authUserId: 'auth-user-id',
} as const;

type RegisteredBrand = (typeof BRAND_REGISTRY)[keyof typeof BRAND_REGISTRY];

/**
 * Used to create branded types
 */
export type Brand<T, U extends RegisteredBrand> = T & { __brand: U };
