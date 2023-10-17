import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AkFormAnimal, AkHeaderPage } from "../../components";
import styles from './styles.module.less';
import { Animal } from "../../models";
import { useParams } from "react-router-dom";
import { animalServiceMng } from "../../service";

const AkEdit: React.FunctionComponent = () => {
  const {t} = useTranslation();
  const {id} = useParams();
  const [animal, setAnimal] = useState<Animal>();

  const handleSave: (edited: Animal) => void = (edited: Animal) => {
    console.log(edited);
  };

  useEffect(() => {
    animalServiceMng().getbyId(id as string)
      .then((animal: (Animal|undefined)) => setAnimal(animal as Animal));
  }, []);

  return (
    <div className={styles.cont}>
      <AkHeaderPage
        title={t('title.edit')}
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

export default AkEdit;