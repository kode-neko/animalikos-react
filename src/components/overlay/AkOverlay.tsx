import classNames from 'classnames';
import styles from './styles.module.less';

type AkOverlayProps = {
  isVisible: boolean;
  color?: 'main' | 'black';
  spinner?: boolean
}

const AkOverlay: React.FunctionComponent<AkOverlayProps> = ({isVisible, color='main', spinner=false}: AkOverlayProps) => {
  return (
    <div
      className={classNames(styles.cont, isVisible && styles.visible, styles[color])}
    >
      {spinner && <div className={styles.spinner} />}
    </div>
  );
};

export default AkOverlay;