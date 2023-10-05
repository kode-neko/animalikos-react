import {useState} from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import styles from './styles.module.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

type AkSwitchProps = {
  type: 'round' | 'square';
  icon: IconProp;
  iconRight: IconProp;
  labels: [string, string];
  isRight: boolean;
  onClick: (isRight: boolean) => void;
}

const AkSwitch: React.FunctionComponent<AkSwitchProps> = ({
  type = 'round',
  icon,
  iconRight,
  labels,
  isRight,
  onClick,
}: AkSwitchProps) => {
  const [isRightHere, setIsRightHere] = useState<boolean>(isRight);
  const handleClick: () => void = (): void => {
    setIsRightHere(!isRightHere);
    onClick(!isRightHere);
  };
  const isRightStyle = () => isRightHere ? styles.right : styles.left;
  const isLeftStyle = () => isRightHere ? styles.left : styles.right;
  return (
    <div 
      className={styles.cont}
      onClick={handleClick}
    >
      {icon && !iconRight && 
        <div className={styles.iconCont}>
          <FontAwesomeIcon className={styles.icon} icon={icon as IconProp} />
        </div>
      }
      {iconRight && 
        <div className={styles.iconCont}>
          <FontAwesomeIcon className={classNames(styles.icon, !isRightHere && styles.hide)} icon={icon} />
          <FontAwesomeIcon className={classNames(styles.icon, isRightHere && styles.hide)} icon={iconRight} />
        </div>
      }
      {
        type === 'round' ?
        <div className={styles.backRound}>
          <div className={classNames(styles.dot, isRightStyle())} />
        </div> 
        :
        <div className={styles.sw}>
          <div className={styles.backSquare}>
            <div className={classNames(styles.label, isRightStyle())}>{labels[0]}</div>
            <div className={classNames(styles.label, isLeftStyle())}>{labels[1]}</div>
            <div className={classNames(styles.swSquare, isRightStyle())}/>
          </div>
        </div>
      }
    </div>
  );
};

export default AkSwitch;