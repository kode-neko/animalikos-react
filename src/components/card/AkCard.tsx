import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.less';
import { faPaw, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Animal } from '../../models';
import { useTranslation } from "react-i18next";
import { AkButton } from '../button';

type AkCardProps = {
  animal: Animal,
  onClickEdit: (animal: Animal) => void,
  onClickDel: (_id: string) => void,
}

type AkInfoCardProps = {
  field: string;
  value: string;
}

const AkInfoCard: React.FunctionComponent<AkInfoCardProps> = ({field, value}: AkInfoCardProps) => {
  return (
    <div className={styles.contDesc}>
      <div className={styles.field}>
        {field}
      </div>
      <div className={styles.value}>
        {value}
      </div>
    </div>
  );
};

const AkCard: React.FunctionComponent<AkCardProps> = ({animal, onClickEdit, onClickDel}: AkCardProps) => {
  const {t} = useTranslation();
  return (
    <div className={styles.cont}>
      <div className={styles.header}>
        <FontAwesomeIcon className={styles.icon} icon={faPaw} />
        <h2 className={styles.title}>{animal.name}</h2>
      </div>
      <div className={styles.divider} />
      <div className={styles.subHeader}>
        <AkInfoCard
          field={t(`labels.age`)}
          value={animal.bday}
        />
        <AkInfoCard
          field={t(`labels.sex`)}
          value={animal.sex}
        />
        <AkInfoCard
          field={t(`labels.enter`)}
          value={animal.enter}
        />
      </div>
      <div className={styles.divider} />
      <div className={styles.desc}>
        {animal.desc}
      </div>
      <div className={styles.actions}>
        <AkButton
          title={t(`labels.delete`)}
          icon={faTrash}
          size='m'
          type='main'
          onClick={() => onClickDel(animal._id as string)}
        />
        <AkButton
          title={t(`labels.edit`)}
          icon={faPen}
          size='m'
          type='second'
          onClick={() => onClickEdit(animal)}
        />
      </div>
    </div>
  );
};

export default AkCard;