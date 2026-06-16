import { UserEmail, StrongPassword, UserName, UserAge } from './auth-brand.type';

export type GuestLoginCredentials = {
  name: UserName;
  email: UserEmail;
  age: UserAge;
};

export type EmailLoginCredentials = {
  email: UserEmail;
  password: StrongPassword;
};
