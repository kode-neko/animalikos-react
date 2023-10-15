import styles from './styles.module.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type AkMsgPageProps = {
  icon: IconProp;
  title: string;
  msg: string;
}

const AkMsgPage: React.FunctionComponent<AkMsgPageProps> = ({icon, title, msg}: AkMsgPageProps) => {
  return (
    <div className={styles.cont}>
      <div className={styles.face}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{msg}</p>
    </div>
  );
};

export default AkMsgPage;