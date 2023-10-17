import { useTranslation } from "react-i18next";
import { AkField, AkRadioButton, AkSelect, AkTextArea } from "../form-compos";
import { AkInput } from "../form-compos/input";
import { Animal, EnumSex, EnumSpecies } from "../../models";
import { useFormik } from "formik";
import * as yup from "yup";
import dayjs from 'dayjs';
import styles from './styles.module.less';
import { AkButton } from "../button";

const AkFormAnimal: React.FunctionComponent = () => {
  const {t} = useTranslation();
  // eslint-disable-next-line @typescript-eslint/typedef
  const schema = yup.object<Animal>({
    name: yup.string().max(30, t('error.maxStr', '30')).required(),
    species: yup.mixed<EnumSpecies>().oneOf(Object.values(EnumSpecies)).required(),
    sex: yup.mixed<EnumSex>().oneOf(Object.values(EnumSex)).required(),
    breed: yup.string().max(50, t('error.maxStr', '50')).required(),
    bday: yup.string(),
    enter: yup.string(),
    desc: yup.string().max(150, t('error.maxStr', '150')).required(),
  });
  // eslint-disable-next-line @typescript-eslint/typedef
  const formik = useFormik({
    validationSchema: schema,
    initialValues: {
      name: '',
      species: EnumSpecies.Cat,
      sex: EnumSex.Female,
      breed: '',
      bday: dayjs().toISOString(),
      enter: dayjs().toISOString(),
      desc: '',
    },
    onSubmit: (a: Animal) => console.log(a)
  });
  // eslint-disable-next-line @typescript-eslint/typedef
  const injectFormik = (field: keyof Animal) => ({
    name: field,
    value: formik.values[field] as string,
    onChange: formik.handleChange,
    onBlur: formik.handleBlur
  });

  return (
    <div className={styles.cont} >
      <form 
        className={styles.form} 
        onSubmit={formik.handleSubmit}
      >
        <div className={styles.name}>
          <AkField
            title={t('labels.name')}
            hint={t('hint.name')}
          >
            <AkInput
              placeholder={t('placeH.name')}
              {...injectFormik('name')}
            />
          </AkField>
        </div>
        <div className={styles.species}>
          <AkField
            title={t('labels.species')}
            hint={t('hint.species')}
          >
            <AkSelect
              values={Object.values(EnumSpecies).map((s: string) => ({label: t(`labels.${s}`), value: s}))}
              selected={EnumSpecies.Cat}
              {...injectFormik('species')}
            />
          </AkField>
        </div>
        <div className={styles.sex}>
          <AkField
            title={t('labels.sex')}
            hint={t('hint.sex')}
          >
            <AkRadioButton
              label={t(`labels.${EnumSex.Female}`)}
              checked={formik.values.sex === EnumSex.Female}
              {...injectFormik('sex')}
            />
            <AkRadioButton
              label={t(`labels.${EnumSex.Male}`)}
              checked={formik.values.sex === EnumSex.Male}
              {...injectFormik('sex')}
            />
          </AkField>
        </div>
        <div className={styles.breed}>
          <AkField
            title={t('labels.breed')}
            hint={t('hint.breed')}
          >
            <AkInput
              placeholder={t('placeH.breed')}
              {...injectFormik('breed')}
            />
          </AkField>
        </div>
        <div className={styles.bday}>
          <AkField
            title={t('labels.bday')}
            hint={t('hint.bday')}
          >
            <AkInput
              placeholder={t('placeH.bday')}
              {...injectFormik('bday')}
            />
          </AkField>
        </div>
        <div className={styles.enter}>
          <AkField
            title={t('labels.enter')}
            hint={t('hint.enter')}
          >
            <AkInput
              placeholder={t('placeH.enter')}
              {...injectFormik('enter')}
            />
          </AkField>
        </div>
        <div className={styles.desc}>
          <AkField
            title={t('labels.desc')}
            hint={t('hint.desc')}
          >
            <AkTextArea
              placeholder={t('placeH.desc')}
              {...injectFormik('desc')}
            />
          </AkField>
        </div>
      </form>
      <div className={styles.actions} >
        <AkButton
          title={t('labels.save')}
          btnType="submit"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default AkFormAnimal;
