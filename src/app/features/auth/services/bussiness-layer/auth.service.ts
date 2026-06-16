import { HttpResourceRef } from '@angular/common/http';
import { Service, signal, inject } from '@angular/core';
import { LoggedInUser, User } from '@auth/types/user.type';
import { GuestAuthService } from '@auth/services/data-layer/guest-auth/guest-auth.service';
import { EmailAuthService } from '@auth/services/data-layer/email-auth/email-auth.service';
import { SocialAuthService } from '@auth/services/data-layer/social-auth/social-auth.service';
import assert from 'node:assert';

@Service()
export class AuthService {
  readonly #guestAuthSerice = inject(GuestAuthService);
  readonly #emailAuthService = inject(EmailAuthService);
  readonly #socialAuthService = inject(SocialAuthService);

  readonly #loggedInUser = signal<LoggedInUser | undefined>(undefined);
  public readonly loggedInUser = this.#loggedInUser.asReadonly();

  readonly #loginType = signal<LoggedInUser['loginType'] | undefined>(undefined);

  #resource: HttpResourceRef<LoggedInUser['user']> | undefined;

  private setLoggedInUser(user: LoggedInUser | undefined): void {
    this.#loggedInUser.set(user);
  }

  setLoginType(loginType: LoggedInUser['loginType']): void {
    this.#loginType.set(loginType);
  }

  login(credentials: void) {
    const loginType = this.#loginType();
    if (!loginType) {
      assert(false, 'Login type should be set before logging in');
      return;
    }

    switch (loginType) {
      case 'guest':
        this.#resource = this.#guestAuthSerice.login(credentials);
        this.#loggedInUser.set(
          this.#resource?.hasValue()
            ? { loginType: 'guest', user: this.#resource.value }
            : undefined,
        );
        break;
      case 'email':
        this.#resource = this.#emailAuthService.login(credentials);
        break;
      case 'social':
        this.#resource = this.#socialAuthService.login(credentials);
        break;
      default:
        assert(false, `Invalid login type ${loginType satisfies never}`);
        return;
    }
  }

  logout(): void {}
}
