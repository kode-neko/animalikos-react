import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.less';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type AkButtonProps = {
  title: string;
  icon: IconProp;
  size?: 's' | 'm';
  type?: 'main' | 'second' | 'reverse';
  onClick: () => void;
}

const AkHeaderPage: React.FunctionComponent<AkButtonProps> = ({title, icon, size = 'm', type = 'main', onClick}: AkButtonProps) => {
  const classFinal: Record<string, boolean> = {
    [styles.btn]: true,
    [styles.icon]: !!icon,
    [styles.s]: size === 's',
    [styles.m]: size === 'm',
    [styles[type]]: true
  };
  return (
    <button 
      className={classnames(classFinal)} 
      onClick={onClick}
    >
      {icon && <FontAwesomeIcon className={styles.icon} icon={icon} />}
      <div className={styles.label}>{title}</div>
    </button>
  );
};

export default AkHeaderPage;