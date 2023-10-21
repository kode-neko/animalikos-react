/* eslint-disable @typescript-eslint/typedef */
import AkNotiHub from "./AkNotiHub";
import { AkNoti } from "./types";

const notiHub: AkNotiHub = AkNotiHub.getInstance();

const useAkNoti = () => {
  return { msgFunc: (msg: AkNoti) => notiHub.sendMessage(msg) };
};

export default useAkNoti;