import { Brand } from '@core/app.brand';

export type AuthUserId = Brand<number, 'auth-user-id'>;
export type UserName = Brand<string, 'user-name'>;
export type Email = Brand<string, 'email'>;
export type UserFirstName = Brand<string, 'user-first-name'>;
export type UserLastName = Brand<string, 'user-last-name'>;
export type Gender = Brand<string, 'gender'>;
export type UserImage = Brand<string, 'user-image'>;
export type AccessToken = Brand<string, 'access-token'>;
export type RefreshToken = Brand<string, 'refresh-token'>;
export type UserAge = Brand<number, 'user-age'>;
export type StrongPassword = Brand<string, 'strong-password'>;
