import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './styles.module.less';

type AkHeaderPageProps = {
  back: string;
  title: string
};

const AkHeaderPage: React.FunctionComponent<AkHeaderPageProps> = ({back, title}: AkHeaderPageProps) => {
  return (
    <div className={styles.cont}>
      <div className={styles.left}>
        <FontAwesomeIcon 
          className={styles.arrow} 
          icon={faAnglesLeft} 
        />
        <div className={styles.back}>
          {back}
        </div>
      </div>
      <div className={styles.right}>
        {title}
      </div>
    </div>
  );
};

export default AkHeaderPage;