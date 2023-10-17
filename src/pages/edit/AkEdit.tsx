import { useTranslation } from "react-i18next";
import { AkFormAnimal, AkHeaderPage } from "../../components";
import styles from './styles.module.less';

const AkEdit: React.FunctionComponent = () => {
  const {t} = useTranslation();
  return (
    <div className={styles.cont}>
      <AkHeaderPage
        title={t('title.edit')}
      />
      <AkFormAnimal />
    </div>
  );
};

export default AkEdit;