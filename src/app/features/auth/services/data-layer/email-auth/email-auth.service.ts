import { httpResource } from '@angular/common/http';
import { Service, signal } from '@angular/core';
import { EmailAuth } from '@auth/interfaces/auth-base.interface';
import { EmailLoginCredentials } from '@auth/types/login-credentials.type';
import { EmailUser } from '@auth/types/user.type';

@Service()
export class EmailAuthService implements EmailAuth {
  readonly #credentials = signal<EmailLoginCredentials | undefined>(undefined);
  readonly #userResource = httpResource<EmailUser>(() => {
    const credentials = this.#credentials();

    if (!credentials) {
      return undefined; // don't make request
    }

    return {
      url: 'https://dummyjson.com/auth/login',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        username: credentials.email,
        password: credentials.password,
        expiresInMins: 30,
      },
      withCredentials: true,
    };
  });

  public readonly userResource = this.#userResource.asReadonly();

  login(credentials: EmailLoginCredentials) {
    this.#credentials.set({ ...credentials });
  }

  logout() {
    this.#credentials.set(undefined);
  }
}
