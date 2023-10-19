import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './styles.module.less';
import { useTranslation } from "react-i18next";
import { NavigateFunction, useNavigate } from "react-router-dom";

type AkHeaderPageProps = {
  title: string
};

const AkHeaderPage: React.FunctionComponent<React.PropsWithChildren<AkHeaderPageProps>> = ({title, children}: React.PropsWithChildren<AkHeaderPageProps>) => {
  const {t} = useTranslation();
  const navigate: NavigateFunction = useNavigate();
  return (
    <>
      <div className={styles.header}>
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
      <div className={styles.cont}>
        {children}
      </div>
    </>
  );
};

export default AkHeaderPage;