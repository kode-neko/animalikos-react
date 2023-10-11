import { IconProp } from "@fortawesome/fontawesome-svg-core";

type AkNoti = {
  id?: string;
  msg: string;
  icon?: IconProp;
}

type AkNotiListener = {
  id?: string;
  callback: (n: AkNoti) => void
}

export {
  AkNoti,
  AkNotiListener
};