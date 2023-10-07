import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.less';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

type AkSelectProps = {
  values: {[key: string]: string},
  selected: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const AkSelect: React.FunctionComponent<AkSelectProps> = ({values, selected, onChange}: AkSelectProps) => {
  return (
    <div className={styles.cont}>
      <div className={styles.arrow}>
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
      <select 
        className={styles.dropdown}
        onChange={onChange}
      >
        {Object.keys(values).map((key: string) => 
          <option
            className={styles.option}
            selected={selected === key}
            key={key} 
            value={key}
          >
            {values[key]}
          </option>
        )}
      </select>
    </div>
  );
}

export default AkSelect;