import { useTranslation } from "react-i18next";
import { AkFormAnimal, AkHeaderPage } from "../../components";
import styles from './styles.module.less';
import { Animal, EnumSex, EnumSpecies } from "../../models";
import dayjs from 'dayjs';

const AkEdit: React.FunctionComponent = () => {
  const {t} = useTranslation();
  const animal: Animal = {
    name: '',
    species: EnumSpecies.Cat,
    sex: EnumSex.Female,
    breed: '',
    bday: dayjs().toISOString(),
    enter: dayjs().toISOString(),
    desc: '',
  };
  const handleSave: (edited: Animal) => void = (edited: Animal) => {
    console.log(edited);
  };

  return (
    <div className={styles.cont}>
      <AkHeaderPage
        title={t('title.edit')}
      />
      <AkFormAnimal 
        animal={animal}
        onSave={handleSave}
      />
    </div>
  );
};

export default AkEdit;