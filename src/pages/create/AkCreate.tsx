import dayjs from "dayjs";
import { Animal, EnumSex, EnumSpecies } from "../../models";
import { useTranslation } from "react-i18next";
import { AkFormAnimal, AkHeaderPage } from "../../components";
import { animalServiceMng } from "../../service";
import { NavigateFunction, useNavigate } from "react-router-dom";

const AkCreate: React.FunctionComponent = () => {
  const {t} = useTranslation();
  const navigate: NavigateFunction = useNavigate();
  
  const animal: Animal = {
    name: '',
    species: EnumSpecies.CAT,
    sex: EnumSex.FEMALE,
    breed: '',
    bday: dayjs().toISOString(),
    enter: dayjs().toISOString(),
    desc: '',
  };

  const handleSave: (created: Animal) => void = (created: Animal) => {
    animalServiceMng().save(created)
      .then((a: Animal) => { 
        console.log('NOTI created: ', a);
        navigate('/');
      })
      .catch(() => console.log('NOTI error'));
  };
  
  return (
    <AkHeaderPage
      title={t('title.create')}
    >
      {
        animal &&
        <AkFormAnimal 
          animal={animal}
          onSave={handleSave}
        /> 
      }
    </AkHeaderPage>
  );
};

export default AkCreate;