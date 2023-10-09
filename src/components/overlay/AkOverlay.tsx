import classNames from 'classnames';
import styles from './styles.module.less';

type AkOverlayProps = {
  isVisible: boolean;
}

const AkOverlay: React.FunctionComponent<AkOverlayProps> = ({isVisible}: AkOverlayProps) => {
  return (
    <div
      className={classNames(styles.cont, isVisible && styles.visible)}
    />
  );
};

export default AkOverlay;