import AkNotiHub from "./AkNotiHub";
import { AkNoti } from "./types";

const notiHub: AkNotiHub = AkNotiHub.getInstance();

const useAkNoti: (msg: AkNoti) => void = (msg: AkNoti) => {
  notiHub.sendMessage(msg);
};

export default useAkNoti;