import { Message } from "./message";

export interface User {
  id?: number;
  nom: string;
  messages: Message[];
}
