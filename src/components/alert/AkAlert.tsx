import classNames from 'classnames';
import styles from './styles.module.less';
import { AkOverlay } from '../overlay';
import { AkButton } from '../button';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

type AkAlertAction = {
  label: string;
  type: 'main' | 'second'
  onClick: () => void
}

type AkAlertProps = {
  isVisible: boolean;
  title: string;
  icon: IconProp;
  msg: string;
  onClose: () => void;
  actions: AkAlertAction[]
}

const AkAlert: React.FunctionComponent<AkAlertProps> = ({
  isVisible=false, 
  title,
  icon,
  msg,
  onClose,
  actions
}: AkAlertProps) => {
  return (
    <>
      <div
        className={classNames(styles.cont, isVisible && styles.visible)}
      >
        <div className={styles.header}>
          <div className={styles.title}>{title}</div>
          <div className={styles.close} onClick={onClose}>
            <FontAwesomeIcon icon={faXmark}/>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={icon}/>
          </div>
          <div className={styles.msg}>
            {msg}
          </div>
        </div>
        <div className={styles.footer}>
          {actions.map((a: AkAlertAction, i: number) => 
            <AkButton
              key={i}
              size='s'
              title={a.label}
              type={a.type}
              onClick={a.onClick} 
            />  
          )}
        </div>
      </div>
      <AkOverlay isVisible={isVisible} />
    </>
  );
};

export default AkAlert;
export {
  AkAlert,
};
export type {
  AkAlertAction
};