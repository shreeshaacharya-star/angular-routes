import { UserName, UserEmail, AuthUserId, UserAge } from './auth-brand.type';

export type User = {
  id: AuthUserId;
  name: UserName;
  email: UserEmail;
  age: UserAge;
};

export type GuestUser = Omit<User, 'id'>;
export type EmailUser = Omit<User, 'age'>;
export type SocialUser = User;

export type LoggedInUser =
  | {
      loginType: 'guest';
      user: GuestUser;
    }
  | {
      loginType: 'email';
      user: EmailUser;
    }
  | {
      loginType: 'social';
      user: SocialUser;
    };
