import { AkNoti, AkNotiListener } from "./types";
import { v4 as uuidv4 } from 'uuid';

class AkNotiHub {
  private static _instance: AkNotiHub;
  private subscribers: AkNotiListener[];
  private messages: AkNoti[];

  private constructor() {
    this.subscribers = [];
    this.messages = [];
  }

  public static getInstance() {
    if(!AkNotiHub._instance) {
      AkNotiHub._instance = new AkNotiHub();
    }
    return AkNotiHub._instance;
  }

  sendMessage(msg: AkNoti) {
    const id: string = uuidv4();
    this.messages = [...this.messages, {...msg, id}];
    this.subscribers.map((s: AkNotiListener) => s.callback(this.messages));
    setTimeout(() => {
      const list: AkNoti[] = this.messages.filter((n: AkNoti) => n.id === id);
      this.messages = list;
      this.subscribers.map((s: AkNotiListener) => s.callback(this.messages));
    }, 3000);
  }

  subscribe(callback: (list: AkNoti[]) => void): string {
    const id: string = `${(new Date()).getMilliseconds()}`;
    this.subscribers.push({id, callback});
    return id;
  }

  unsubscribe(id: string): void {
    this.subscribers = this.subscribers.filter((s: AkNotiListener) => s.id !== id);
  }
}

export default AkNotiHub;