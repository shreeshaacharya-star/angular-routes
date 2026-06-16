import { HttpResourceRef } from '@angular/common/http';
import { GuestLoginCredentials, EmailLoginCredentials } from '@auth/types/login-credentials.type';
import { EmailUser, GuestUser, User } from '@auth/types/user.type';

export interface AuthBase<TCredentials = void, TUser = User> {
  login(credentials: TCredentials): HttpResourceRef<TUser>;
  logout(): HttpResourceRef<void>;
}

export interface GuestAuth extends AuthBase<GuestLoginCredentials, GuestUser> {}
export interface EmailAuth extends AuthBase<EmailLoginCredentials, EmailUser> {}
export interface SocialAuth extends AuthBase {}
