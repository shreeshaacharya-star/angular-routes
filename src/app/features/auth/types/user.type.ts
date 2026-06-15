import { UserName, Email, AuthUserId } from './auth-brand.type';

export type User = {
  id: AuthUserId;
  name: UserName;
  email: Email;
};
