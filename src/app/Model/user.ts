export interface User {
  userId?: string; //handled by backend
  email: string;
  username: string;
  token: string;
}

export interface AuthState {
  username: string;
  accessToken: string;
}
