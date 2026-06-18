import { DOCUMENT, Service, inject, resource, signal } from '@angular/core';
import { GuestAuth } from '@auth/interfaces/auth-base.interface';
import { GuestLoginCredentials } from '@auth/types/login-credentials.type';
import { GuestUser } from '@auth/types/user.type';

@Service()
export class GuestAuthService implements GuestAuth {
  readonly type = 'guest';
  readonly #document = inject(DOCUMENT);

  readonly #credentials = signal<GuestLoginCredentials | undefined>(undefined);
  readonly #userResource = resource({
    params: () => ({ credentials: this.#credentials() }),
    loader: async ({ params }) => {
      const credentials = params.credentials;

      if (!credentials) {
        this.#document.cookie = `guest-user=; path=/; Max-Age=0`;
        return credentials;
      }

      const cookieValue = `${JSON.stringify(credentials)}`;
      this.#document.cookie = `guest-user=${cookieValue}; path=/`;
      return credentials satisfies GuestUser as GuestUser;
    },
  });

  public userResource = this.#userResource.asReadonly();

  login(credentials: GuestLoginCredentials): void {
    this.#credentials.set(credentials);
  }

  logout(): void {
    this.#credentials.set(undefined);
  }
}
