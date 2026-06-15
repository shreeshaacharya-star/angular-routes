import { Brand } from '@core/app.brand';

export type AuthUserId = Brand<number, 'auth-user-id'>;
export type UserName = Brand<string, 'user-name'>;
export type Email = Brand<string, 'user-email'>;
export type StrongPassword = Brand<string, 'strong-password'>;
