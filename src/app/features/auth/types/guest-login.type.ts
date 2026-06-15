import { Email, StrongPassword, UserName } from './auth-brand.type';

export type GuestLoginCredentials = {
  name: UserName;
  email: Email;
  password: StrongPassword;
};
