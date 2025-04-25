export interface User {
  _id?: string; //handled by backend
  email: string;
  username: string;
  password: string;
  accessToken: string;
}

export interface AuthState {
  username: string;
  accessToken: string;
}
