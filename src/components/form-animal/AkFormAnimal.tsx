import { useTranslation } from "react-i18next";
import { AkField, AkRadioButton, AkSelect, AkTextArea } from "../form-compos";
import { AkInput } from "../form-compos/input";
import { Animal, EnumSex, EnumSpecies } from "../../models";
import { useFormik } from "formik";
import * as yup from "yup";
import styles from './styles.module.less';
import { AkButton } from "../button";

type AkFormAnimalProps = {
  animal: Animal,
  onSave: (animal: Animal) => void
}

const AkFormAnimal: React.FunctionComponent<AkFormAnimalProps> = ({animal, onSave}: AkFormAnimalProps) => {
  const {t} = useTranslation();
  // eslint-disable-next-line @typescript-eslint/typedef
  const schema = yup.object<Animal>({
    name: yup.string()
      .max(30, t('error.maxStr', {size: '30'}))
      .required(t('error.required')),
    species: yup.mixed<EnumSpecies>()
      .oneOf(Object.values(EnumSpecies))
      .required(t('error.required')),
    sex: yup.mixed<EnumSex>()
      .oneOf(Object.values(EnumSex))
      .required(t('error.required')),
    breed: yup.string()
      .max(50, t('error.maxStr', {size: '50'}))
      .required(t('error.required')),
    bday: yup.string()
      .required(t('error.required')),
    enter: yup.string()
      .required(t('error.required')),
    desc: yup.string()
      .max(150, t('error.maxStr', {size: '150'}))
      .required(t('error.required')),
  });
  // eslint-disable-next-line @typescript-eslint/typedef
  const formik = useFormik({
    validationSchema: schema,
    initialValues: animal,
    onSubmit: (a: Animal) => {
      onSave(a);
    }
  });
  // eslint-disable-next-line @typescript-eslint/typedef
  const injectFormik = (field: keyof Animal) => ({
    name: field,
    value: formik.values[field] as string,
    onChange: formik.handleChange,
    onBlur: formik.handleBlur
  });

  const msgFormik: (field: keyof Animal) => string = (field: keyof Animal): string => ((formik.touched[field] && formik.errors[field]) as string);

  return (
    <div className={styles.cont} >
      <form className={styles.form}>
        <div className={styles.name}>
          <AkField
            title={t('labels.name')}
            hint={msgFormik('name')}
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
            hint={msgFormik('species')}
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
            hint={msgFormik('sex')}
          >
            <div className={styles.ele}>
              <AkRadioButton
                label={t(`labels.${EnumSex.FEMALE}`)}
                checked={formik.values.sex === EnumSex.FEMALE}
                {...injectFormik('sex')}
              />
              <AkRadioButton
                label={t(`labels.${EnumSex.MALE}`)}
                checked={formik.values.sex === EnumSex.MALE}
                {...injectFormik('sex')}
              />
            </div>
          </AkField>
        </div>
        <div className={styles.breed}>
          <AkField
            title={t('labels.breed')}
            hint={msgFormik('breed')}
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
            hint={msgFormik('bday')}
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
            hint={msgFormik('enter')}
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
            hint={msgFormik('desc')}
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
          onClick={() => {
            console.log('save');
            formik.handleSubmit();          
          }}
        />
      </div>
    </div>
  );
};

export default AkFormAnimal;
