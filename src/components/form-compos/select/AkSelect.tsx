import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.less';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

type AkSelectProps = {
  values: {label: string, value: string}[],
  selected: string;
  name: string,
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
  onBlur: (event: React.FocusEvent<HTMLSelectElement>) => void
}

const AkSelect: React.FunctionComponent<AkSelectProps> = ({values, selected, ...props}: AkSelectProps) => {
  return (
    <div className={styles.cont}>
      <div className={styles.arrow}>
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
      <select 
        className={styles.dropdown}
        value={selected}
        {...props}
      >
        {values.map((opt: {label: string, value: string}) => 
          <option
            className={styles.option}
            key={opt.value} 
          >
            {opt.label}
          </option>
        )}
      </select>
    </div>
  );
};

export default AkSelect;