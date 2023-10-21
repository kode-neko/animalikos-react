import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AkFormAnimal, AkHeaderPage } from "../../components";
import { Animal } from "../../models";
import { useParams } from "react-router-dom";
import { animalServiceMng } from "../../service";
import { useAkNoti } from "../../components/notification";
import { faFaceDizzy, faSmile } from "@fortawesome/free-solid-svg-icons";

const AkEdit: React.FunctionComponent = () => {
  const {t} = useTranslation();
  const {id} = useParams();
  const [animal, setAnimal] = useState<Animal>();
  const {msgFunc} = useAkNoti();

  const handleSave: (edited: Animal) => void = (edited: Animal) => {
    animalServiceMng().edit({...edited, _id: id})
      .then(() => { 
        msgFunc({msg: t('desc.success'), icon: faSmile});
      })
      .catch(() => msgFunc({msg: t('desc.errorServer'), icon: faFaceDizzy}));
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