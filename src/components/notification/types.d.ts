import { IconProp } from "@fortawesome/fontawesome-svg-core";

type AkNoti = {
  id?: string;
  msg: string;
  icon?: IconProp;
}

type AkNotiListener = {
  id?: string;
  callback: (list: AkNoti[]) => void
}

export {
  AkNoti,
  AkNotiListener
};