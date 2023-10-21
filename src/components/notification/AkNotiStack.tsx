import { useEffect, useState } from 'react';
import AkNotiHub from './AkNotiHub';
import styles from './styles.module.less';
import { AkNoti } from './types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from "framer-motion";

const notiHub: AkNotiHub = AkNotiHub.getInstance();

type AkNotiTagProps = {
  noti: AkNoti;
}

const AkNotiTag: React.FunctionComponent<AkNotiTagProps> = ({noti}: AkNotiTagProps) => {
  return (
    <motion.div 
      className={styles.tag}
      initial={{ x: "360px" }}
      animate={{ x: "0" }}
      exit={{ x: "360px" }}
    >
      {noti.icon && <div className={styles.icon}><FontAwesomeIcon icon={noti.icon} /></div>}
      <div className={styles.msg}>{noti.msg}</div>
    </motion.div>
  );
};

const AkNotiStack: React.FunctionComponent = () => {
  const [idSub, setIdSub] = useState<string>();
  const [notiList, setNotiList] = useState<AkNoti[]>([]);

  // eslint-disable-next-line @typescript-eslint/typedef
  const callbackHub = (list: AkNoti[]) => {
    setNotiList(list);
  };

  useEffect(() => {
    if(!idSub) {
      const id: string = notiHub.subscribe(callbackHub);
      setIdSub(id);
    }
    return () => notiHub.unsubscribe(idSub as string);
  }, []);

  return (
    <div className={styles.stack}>
      {notiList.map((n: AkNoti) => <AkNotiTag key={n.id} noti={n}/>)}
    </div>
  );
};

export default AkNotiStack;
export {
  AkNotiTag
};