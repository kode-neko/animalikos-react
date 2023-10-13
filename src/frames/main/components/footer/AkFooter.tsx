import styles from './styles.module.less';
import { main } from "../../../../globals";

const AkFooter: React.FunctionComponent = () => {
  return (
    <div className={styles.cont}>
      <span className={styles.text}>
        {main.credits}
      </span>
    </div>
  );
};

export default AkFooter;