export interface User {
  _id?: string; //handled by backend
  email: string;
  username: string;
  password: string;
  token: string;
}
