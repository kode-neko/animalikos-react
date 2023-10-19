import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AkFormAnimal, AkHeaderPage } from "../../components";
import { Animal } from "../../models";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { animalServiceMng } from "../../service";

const AkEdit: React.FunctionComponent = () => {
  const {t} = useTranslation();
  const navigate: NavigateFunction = useNavigate();

  const {id} = useParams();
  const [animal, setAnimal] = useState<Animal>();

  const handleSave: (edited: Animal) => void = (edited: Animal) => {
    animalServiceMng().edit({...edited, _id: id})
      .then(() => { 
        console.log('edited'); 
        navigate('/');
      })
      .catch(() => console.log('error'));
  };

  useEffect(() => {
    animalServiceMng().getbyId(id as string)
      .then((animal: (Animal|undefined)) => setAnimal(animal as Animal));
  }, []);

  return (
    <AkHeaderPage
      title={t('title.edit')}
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

export default AkEdit;