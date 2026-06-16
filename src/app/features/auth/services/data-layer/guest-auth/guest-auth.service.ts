import { Service } from '@angular/core';
import { httpResource, HttpResourceRef } from '@angular/common/http';
import { GuestAuth } from '@auth/interfaces/auth-base.interface';
import { GuestLoginCredentials } from '@auth/types/login-credentials.type';
import { GuestUser } from '@auth/types/user.type';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core/primitives/di';

@Service()
export class GuestAuthService implements GuestAuth {
  readonly #httpClient = inject(httpResource);

  login(credentials: GuestLoginCredentials): HttpResourceRef<GuestUser> {
    return this.#httpClient.post<GuestUser>(`/guest-auth/login`, credentials);
  }

  logout(): HttpResourceRef<void> {
    return this.#httpClient.post<void>(`/guest-auth/logout`);
  }
}
