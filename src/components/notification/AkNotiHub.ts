import { AkNoti, AkNotiListener } from "./types";

class AkNotiHub {
  private static _instance: AkNotiHub;
  private subscribers: AkNotiListener[];

  private constructor() {
    this.subscribers = [];
  }

  public static getInstance() {
    if(!AkNotiHub._instance) {
      AkNotiHub._instance = new AkNotiHub();
    }
    return AkNotiHub._instance;
  }

  sendMessage(msg: AkNoti) {
    this.subscribers.map((s: AkNotiListener) => s.callback(msg));
  }

  subscribe(callback: (n: AkNoti) => void): string {
    const id: string = `${(new Date()).getMilliseconds()}`;
    this.subscribers.push({id, callback});
    return id;
  }

  unsubscribe(id: string): void {
    this.subscribers = this.subscribers.filter((s: AkNotiListener) => s.id !== id);
  }
}

export default AkNotiHub;