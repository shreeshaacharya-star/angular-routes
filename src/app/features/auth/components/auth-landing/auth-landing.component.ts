import { Component, inject } from '@angular/core';
import { AuthService } from '@auth/services/bussiness-layer/auth.service';
import {
  EmailLoginCredentials,
  GuestLoginCredentials,
  LoginCredentials,
} from '@auth/types/login-credentials.type';
import type { Email, StrongPassword, UserAge, UserName } from '@auth/types/auth-brand.type';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-auth-landing',
  imports: [JsonPipe],
  templateUrl: './auth-landing.component.html',
  styleUrl: './auth-landing.component.css',
})
export default class AuthLandingComponent {
  readonly #authService = inject(AuthService);
  protected readonly userResource = this.#authService.userResource;

  credentialsEmail: EmailLoginCredentials = {
    email: 'emilys' as Email,
    password: 'emilyspass' as StrongPassword,
  };

  credentialsGuest: GuestLoginCredentials = {
    username: 'Shreesha' as UserName,
    email: 'shreesha@example.com' as Email,
    age: 22 as UserAge,
  };

  loginCredentials1: LoginCredentials = {
    type: 'guest',
    credentials: this.credentialsGuest,
  };

  loginCredentials2: LoginCredentials = {
    type: 'email',
    credentials: this.credentialsEmail,
  };

  login(credentials: LoginCredentials) {
    this.#authService.login(credentials);
  }

  logout() {
    this.#authService.logout();
  }
}
