import {useState} from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import styles from './styles.module.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type AkSwitchProps = {
  type: 'round' | 'square';
  icon: IconProp;
  labels: [string, string];
  isRight: boolean;
  onClick: (isRight: boolean) => void;
}

const AkSwitch: React.FunctionComponent<AkSwitchProps> = ({
  type = 'round',
  icon,
  labels,
  isRight,
  onClick,
}: AkSwitchProps) => {
  const [isRightHere, setIsRightHere] = useState<boolean>(isRight);
  const handleClick: () => void = (): void => {
    setIsRightHere(!isRightHere);
    onClick(!isRightHere);
  };
  return (
    <div onClick={handleClick}>
      <div className={styles.iconCont}>
        <FontAwesomeIcon className={styles.icon} icon={icon} />
      </div>
      <div className={styles.sw}>
        <div className={type === 'square' ? styles.labelsCont : styles.labelsContNone}>
          <div className={styles.left}>{labels[0]}</div>
          <div className={styles.right}>{labels[1]}</div>
        </div>
        <div className={styles[type]}/> 
        <div className={styles[`back${type}`]}/>
      </div>
    </div>
  );
};

export default AkSwitch;