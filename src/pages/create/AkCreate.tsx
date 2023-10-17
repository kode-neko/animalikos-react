import dayjs from "dayjs";
import { Animal, EnumSex, EnumSpecies } from "../../models";
import { useTranslation } from "react-i18next";
import styles from './styles.module.less';
import { AkFormAnimal, AkHeaderPage } from "../../components";
import { animalServiceMng } from "../../service";
import { NavigateFunction, useNavigate } from "react-router-dom";

const AkCreate: React.FunctionComponent = () => {
  const {t} = useTranslation();
  const navigate: NavigateFunction = useNavigate();
  
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
    animalServiceMng().save(created)
      .then((a: Animal) => { 
        console.log('created: ', a);
        navigate('/');
      })
      .catch(() => console.log('error'));
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