import {
  UserName,
  Email,
  UserAge,
  AuthUserId,
  UserFirstName,
  UserLastName,
  Gender,
  UserImage,
  AccessToken,
  RefreshToken,
} from './auth-brand.type';

export type BaseUser = {
  id: AuthUserId;
  username: UserName;
  email: Email;
  firstName: UserFirstName;
  lastName: UserLastName;
  gender: Gender;
  image: UserImage;
  age: UserAge;
  accessToken: AccessToken;
  refreshToken: RefreshToken;
};

export type GuestUser = Omit<
  BaseUser,
  'id' | 'accessToken' | 'refreshToken' | 'firstName' | 'lastName' | 'gender' | 'image'
>;
export type EmailUser = Omit<BaseUser, 'age'>;
export type SocialUser = BaseUser;

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

export type LoginType = LoggedInUser['loginType'];
export type User = LoggedInUser['user'];
