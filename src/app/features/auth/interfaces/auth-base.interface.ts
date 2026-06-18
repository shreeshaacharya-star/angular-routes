import { Resource } from '@angular/core';
import {
  GuestLoginCredentials,
  EmailLoginCredentials,
  SocialLoginCredentials,
} from '@auth/types/login-credentials.type';
import { EmailUser, GuestUser, SocialUser, User } from '@auth/types/user.type';

export interface AuthBase<TCredentials, TUser extends User> {
  readonly userResource: Resource<TUser | undefined>;
  login(credentials: TCredentials): void;
  logout(): void;
}

export interface GuestAuth extends AuthBase<GuestLoginCredentials, GuestUser> {}
export interface EmailAuth extends AuthBase<EmailLoginCredentials, EmailUser> {}
export interface SocialAuth extends AuthBase<SocialLoginCredentials, SocialUser> {}
