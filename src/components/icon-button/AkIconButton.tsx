import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.less';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type AkIconButtonProps = {
  icon: IconProp;
  onClick: () => void;
}

const AkIconButton: React.FunctionComponent<AkIconButtonProps> = ({icon, onClick}: AkIconButtonProps) => {
  return (
    <div 
      className={styles.cont} 
      onClick={onClick}
    >
      <FontAwesomeIcon className={styles.icon} icon={icon} />
    </div>
  );
};

export default AkIconButton;