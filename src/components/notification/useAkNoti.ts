import AkNotiHub from "./AkNotiHub";
import { AkNoti } from "./types";

const notiHub: AkNotiHub = AkNotiHub.getInstance();

const useAkNoti: () => (msg: AkNoti) => void = () => {
  return notiHub.sendMessage;
};

export default useAkNoti;