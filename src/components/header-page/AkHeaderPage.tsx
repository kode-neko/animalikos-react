import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './styles.module.less';
import { useTranslation } from "react-i18next";
import { NavigateFunction, useNavigate } from "react-router-dom";

type AkHeaderPageProps = {
  title: string
};

const AkHeaderPage: React.FunctionComponent<AkHeaderPageProps> = ({title}: AkHeaderPageProps) => {
  const {t} = useTranslation();
  const navigate: NavigateFunction = useNavigate();
  return (
    <div className={styles.cont}>
      <div className={styles.left}>
        <div className={styles.back} onClick={() => navigate(-1)}>
          <FontAwesomeIcon 
            className={styles.arrow} 
            icon={faAnglesLeft} 
          />
          <div className={styles.label}>
            {t('labels.back')}
          </div>
        </div>
      </div>
      <div className={styles.right}>
        {title}
      </div>
    </div>
  );
};

export default AkHeaderPage;