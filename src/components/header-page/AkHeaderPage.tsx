import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './styles.module.less';
import { useTranslation } from "react-i18next";
import { NavigateFunction, useNavigate } from "react-router-dom";
import {motion} from 'framer-motion';

type AkHeaderPageProps = {
  title: string
};

const AkHeaderPage: React.FunctionComponent<React.PropsWithChildren<AkHeaderPageProps>> = ({title, children}: React.PropsWithChildren<AkHeaderPageProps>) => {
  const {t} = useTranslation();
  const navigate: NavigateFunction = useNavigate();
  return (
    <>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{duration: 0.5, delay: 0.3}}
      >
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
      </motion.div>
      <motion.div 
        className={styles.cont}
        initial={{ opacity: 0, y: '70px' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{duration: 0.5, delay: 0.3}}
      >
        {children}
      </motion.div>
    </>
  );
};

export default AkHeaderPage;