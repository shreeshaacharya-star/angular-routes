import { Email, StrongPassword, UserName, UserAge } from './auth-brand.type';

export type GuestLoginCredentials = {
  username: UserName;
  email: Email;
  age: UserAge;
};

export type EmailLoginCredentials = {
  email: Email;
  password: StrongPassword;
};

export type SocialLoginCredentials = {};

export type LoginCredentials =
  | { type: 'guest'; credentials: GuestLoginCredentials }
  | { type: 'email'; credentials: EmailLoginCredentials }
  | { type: 'social'; credentials: SocialLoginCredentials };
