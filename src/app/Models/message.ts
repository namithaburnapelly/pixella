export interface Message {
  role: 'user' | 'pixella';
  content: string;
  timestamp?: string; //optional
}
