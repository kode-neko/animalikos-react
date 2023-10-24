import dayjs from "dayjs";
import { Animal, EnumSex, EnumSpecies } from "../../models";
import { useTranslation } from "react-i18next";
import { AkFormAnimal, AkHeaderPage } from "../../components";
import { animalServiceMng } from "../../service";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useAkNoti } from "../../components/notification";
import { faFaceDizzy, faSmile } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { Dispatch } from "react";
import { AnyAction } from '@reduxjs/toolkit';
import { changeLoading } from "../../store";

const AkCreate: React.FunctionComponent = () => {
  const {t} = useTranslation();
  const dispatch: Dispatch<AnyAction> = useDispatch();
  const navigate: NavigateFunction = useNavigate();
  const {msgFunc} = useAkNoti();
  
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
    dispatch(changeLoading(true));
    animalServiceMng().save(created)
      .then(() => { 
        msgFunc({msg: t('desc.success'), icon: faSmile});
        navigate('/');
      })
      .catch(() => msgFunc({msg: t('desc.errorServer'), icon: faFaceDizzy}))
      .finally(() => dispatch(changeLoading(false)));
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