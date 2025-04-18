import { Message } from './message';

export interface Chat {
  _id?: string; //chat id - handled by backend
  userId: string;
  title: string;
  message?: Message[]; // can be optional as messages may not be always sent
  createdAt?: string; //handled by backend
  modifiedAt?: string; //handled by backend
}
