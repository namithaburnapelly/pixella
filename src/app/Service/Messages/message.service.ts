import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environment/environment.prod';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import {
  ChatInfo,
  Message,
  MessageInChatResponse,
  NewMessageResponse,
} from '../../Model/message';

@Injectable({
  providedIn: 'root',
})

/** message here refers to messages that are from user or pixella
 *  chats refer to the complete chat, those are comverstaions  **/
export class MessageService {
  private message_url = environment.messageUrl;
  private chat_url = environment.chatsUrl;
  private http = inject(HttpClient);

  currentChatId: string | null = null;
  private chats = new Map<
    string,
    Message[]
  >(); /* chatId -> messages[] , this also works as in-memory cache*/

  /* It always has current value, if new subscriber subscribes, it immediately gives latest value */
  private messageSubject = new BehaviorSubject<Message[]>([]);
  messages$ = this.messageSubject.asObservable();

  private ChatInfo$: Observable<ChatInfo[]> | null = null;

  constructor() {}

  setCurrentChatId(chatId: string) {
    this.currentChatId = chatId;

    if (this.chats.has(chatId)) {
      // If the messages are in cache retrieve them
      this.messageSubject.next(this.chats.get(chatId)!);
      console.log(this.chats.get(chatId), 'from chache');
    } else {
      // fetch from backend
      this.http
        .get<Message[]>(`${this.chat_url}/${chatId}`)
        .subscribe((response) => {
          console.log(response, 'fetched');
          this.chats.set(chatId, response);
          this.messageSubject.next(this.chats.get(chatId)!);
        });
    }
  }

  getCurrentChatId(): string | null {
    return this.currentChatId;
  }

  // TODO : ERROR HANDLING AND LOADING AND  CHECK CONSOLE.LOGS FOR THE CHATS MAP ARRAY

  // Temporary storage of user message, to make it lookk responsive
  private addTempUserMessge(
    userPrompt: string,
    chatId: string | null
  ): Message {
    const tempId = 'temp-' + Date.now();
    const userMessage: Message = {
      id: tempId,
      role: 'user',
      content: [userPrompt],
      chatId: chatId ?? '',
    };

    if (chatId) {
      const currentMessage = this.chats.get(chatId) ?? [];
      const updatedMessages = [...currentMessage, userMessage];
      this.chats.set(chatId, updatedMessages);
      this.messageSubject.next(updatedMessages);
    }

    this.messageSubject.next([userMessage]);

    return userMessage;
  }

  // Start a new chat
  startChat(userPrompt: string): Observable<NewMessageResponse> {
    this.addTempUserMessge(userPrompt, null);

    return this.http
      .post<NewMessageResponse>(this.message_url, { userPrompt })
      .pipe(
        tap((response) => {
          // console.log(response, 'from new chat');
          this.currentChatId = response.chat.id;
          this.chats.set(this.currentChatId, response.messages);
          this.messageSubject.next(response.messages);
        })
      );
  }

  // Send message in current chat
  sendMessage(
    userPrompt: string
  ): Observable<MessageInChatResponse | NewMessageResponse> {
    if (!this.currentChatId) {
      return this.startChat(userPrompt);
    }
    const tempMessge = this.addTempUserMessge(userPrompt, this.currentChatId);

    return this.http
      .post<MessageInChatResponse>(
        `${this.message_url}/${this.currentChatId}`,
        { userPrompt }
      )
      .pipe(
        tap((response) => {
          // console.log(response, 'from send message function ');
          if (this.currentChatId) {
            // remove the temp message if it exists
            let updatedMessages = (
              this.chats.get(this.currentChatId) ?? []
            ).filter((m) => m.id !== tempMessge.id);

            const finalMessages = [...updatedMessages, ...response.messages];
            this.chats.set(this.currentChatId, finalMessages);
            this.messageSubject.next(finalMessages);
            // console.log(this.chats);
          }
        })
      );
  }

  getAllChatInfos(): Observable<ChatInfo[]> | null {
    if (!this.ChatInfo$) {
      this.ChatInfo$ = this.http.get<ChatInfo[]>(this.chat_url);
    }
    return this.ChatInfo$;
  }
}
