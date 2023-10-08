import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.less';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type AkListProps = {
  title: string;
  icon: IconProp;
  size?: 's' | 'm';
  type?: 'main' | 'second' | 'reverse';
  onClick: () => void;
}

const AkHeaderPage: React.FunctionComponent<AkListProps> = ({title, icon, size = 'm', type = 'main', onClick}: AkListProps) => {
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