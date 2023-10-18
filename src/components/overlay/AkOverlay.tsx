import classNames from 'classnames';
import styles from './styles.module.less';

type AkOverlayProps = {
  isVisible: boolean;
  color?: 'main' | 'black';
}

const AkOverlay: React.FunctionComponent<AkOverlayProps> = ({isVisible, color='main'}: AkOverlayProps) => {
  return (
    <div
      className={classNames(styles.cont, isVisible && styles.visible, styles[color])}
    />
  );
};

export default AkOverlay;