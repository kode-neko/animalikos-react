import { useEffect, useState } from 'react';
import AkNotiHub from './AkNotiHub';
import styles from './styles.module.less';
import { AkNoti } from './types';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const notiHub: AkNotiHub = AkNotiHub.getInstance();

type AkNotiTagProps = {
  noti: AkNoti;
}

const AkNotiTag: React.FunctionComponent<AkNotiTagProps> = ({noti}: AkNotiTagProps) => {
  return (
    <div className={styles.tag}>
      {noti.icon && <div className={styles.icon}><FontAwesomeIcon icon={noti.icon} /></div>}
      <div className={styles.msg}>{noti.msg}</div>
    </div>
  );
};

const AkNotiStack: React.FunctionComponent = () => {
  const [idSub, setIdSub] = useState<string>("");
  const [notiList, setNotiList] = useState<AkNoti[]>([]);

  const callbackHub: (noti: AkNoti) => void = (noti: AkNoti) => {
    const id: string = uuidv4();
    setNotiList([...notiList, {...noti, id}]);
    setTimeout(() => {
      setNotiList(notiList.filter((n: AkNoti) => n.id === id));
    }, 3000);
  };

  useEffect(() => {
    const id: string = notiHub.subscribe(callbackHub);
    setIdSub(id);
    return () => notiHub.unsubscribe(idSub);
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