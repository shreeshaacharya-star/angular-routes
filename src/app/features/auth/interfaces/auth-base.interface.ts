import { GuestLoginCredentials } from '@auth/types/guest-login.type';
import { User } from '@auth/types/user.type';
import { Observable } from 'rxjs';

interface AuthBase<TCredentials, TUser> {
  login(credentials: TCredentials): Observable<TUser>;
  logout(): Observable<void>;
}

export interface GuestAuth extends AuthBase<GuestLoginCredentials, User> {}
