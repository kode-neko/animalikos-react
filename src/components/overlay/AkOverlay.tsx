import styles from './styles.module.less';

type AkOverlayProps = {
  isVisible: boolean;
}

const AkOverlay: React.FunctionComponent<AkOverlayProps> = ({isVisible}: AkOverlayProps) => {
  return (
    <div
      style={{display: isVisible ? 'block' : 'none'}}
      className={styles.cont}
    />
  );
};

export default AkOverlay;