import { Dispatch, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AkFormAnimal, AkHeaderPage } from "../../components";
import { Animal } from "../../models";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { animalServiceMng } from "../../service";
import { useAkNoti } from "../../components/notification";
import { faFaceDizzy, faSmile } from "@fortawesome/free-solid-svg-icons";
import { AnyAction } from '@reduxjs/toolkit';
import { useDispatch } from "react-redux";
import { changeLoading } from "../../store";

const AkEdit: React.FunctionComponent = () => {
  const {t} = useTranslation();
  const dispatch: Dispatch<AnyAction> = useDispatch();
  const navigate: NavigateFunction = useNavigate();
  const {id} = useParams();
  const [animal, setAnimal] = useState<Animal>();
  const {msgFunc} = useAkNoti();

  const handleSave: (edited: Animal) => void = (edited: Animal) => {
    dispatch(changeLoading(true));
    animalServiceMng().edit({...edited, _id: id})
      .then(() => { 
        msgFunc({msg: t('desc.success'), icon: faSmile});
        navigate('/');
      })
      .catch(() => msgFunc({msg: t('desc.errorServer'), icon: faFaceDizzy}))
      .finally(() => dispatch(changeLoading(false)));
  };

  useEffect(() => {
    dispatch(changeLoading(true));
    animalServiceMng().getbyId(id as string)
      .then((animal: (Animal|undefined)) => setAnimal(animal as Animal))
      .finally(() => dispatch(changeLoading(false)));
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