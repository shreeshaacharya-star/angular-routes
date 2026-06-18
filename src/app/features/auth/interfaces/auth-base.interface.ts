import { Resource, Signal } from '@angular/core';
import {
  GuestLoginCredentials,
  EmailLoginCredentials,
  SocialLoginCredentials,
} from '@auth/types/login-credentials.type';
import { EmailUser, GuestUser, SocialUser, User, LoginType } from '@auth/types/user.type';

export interface AuthBase<TCredentials, TUser extends User, TType extends LoginType> {
  readonly type: TType;
  readonly userResource: Resource<TUser | undefined>;
  login(credentials: TCredentials): void;
  logout(): void;
}

export interface GuestAuth extends AuthBase<GuestLoginCredentials, GuestUser, 'guest'> {}
export interface EmailAuth extends AuthBase<EmailLoginCredentials, EmailUser, 'email'> {}
export interface SocialAuth extends AuthBase<SocialLoginCredentials, SocialUser, 'social'> {}
