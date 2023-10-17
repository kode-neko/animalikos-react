import dayjs from "dayjs";
import { Animal, EnumSex, EnumSpecies } from "../../models";
import { useTranslation } from "react-i18next";
import styles from './styles.module.less';
import { AkFormAnimal, AkHeaderPage } from "../../components";

const AkCreate: React.FunctionComponent = () => {
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

  const handleSave: (created: Animal) => void = (created: Animal) => {
    console.log(created);
  };
  
  return (
    <div className={styles.cont}>
      <AkHeaderPage
        title={t('title.create')}
      />
      {
        animal &&
        <AkFormAnimal 
          animal={animal}
          onSave={handleSave}
        /> 
      }
    </div>
  );
};

export default AkCreate;