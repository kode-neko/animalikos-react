import { useTranslation } from "react-i18next";
import styles from './styles.module.less';

const AkFooter: React.FunctionComponent = () => {
  const {t} = useTranslation();
  return (
    <div className={styles.cont}>
      <span className={styles.text}>
        {t('credits')}
      </span>
    </div>
  );
};

export default AkFooter;