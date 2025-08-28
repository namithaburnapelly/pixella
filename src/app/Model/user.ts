export interface User {
  user: UserDetails;
  token: string;
}

export interface UserDetails {
  id?: string;
  email: string;
  username: string;
}

export interface AuthState {
  username: string;
  accessToken: string;
}
