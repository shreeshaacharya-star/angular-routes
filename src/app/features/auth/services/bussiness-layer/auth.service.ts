import { Service, inject, Resource, computed } from '@angular/core';
import { GuestAuthService } from '@auth/services/data-layer/guest-auth/guest-auth.service';
import { EmailAuthService } from '@auth/services/data-layer/email-auth/email-auth.service';
import assert from 'node:assert';
import { LoginCredentials } from '@auth/types/login-credentials.type';
import { LoginType, User } from '@auth/types/user.type';

@Service()
export class AuthService {
  readonly #guestAuthSerice = inject(GuestAuthService);
  readonly #emailAuthService = inject(EmailAuthService);

  #loginType: LoginType | undefined = undefined;

  public userResource: Resource<User | undefined> | undefined = undefined;
  public isLoggedIn = computed(() => this.userResource?.hasValue());

  get loginType(): LoginType | undefined {
    return this.#loginType;
  }

  login(credentials: LoginCredentials): void {
    this.#loginType = credentials.type;

    switch (credentials.type) {
      case 'guest':
        this.userResource = this.#guestAuthSerice.userResource;
        this.#guestAuthSerice.login(credentials.credentials);
        break;
      case 'email':
        this.userResource = this.#emailAuthService.userResource;
        this.#emailAuthService.login(credentials.credentials);
        break;
      default:
        assert(false, `Invalid login type ${credentials.type}`);
    }
  }

  logout(): void {
    switch (this.#loginType) {
      case 'guest':
        this.#guestAuthSerice.logout();
        break;
      case 'email':
        this.#emailAuthService.logout();
        break;
      default:
        assert(false, `Invalid login type ${this.#loginType}`);
    }
    this.userResource = undefined;
    this.#loginType = undefined;
  }
}
