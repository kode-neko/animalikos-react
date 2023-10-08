import styles from './styles.module.less';

type AkRadioButtonProps = {
  label: string,
  value: string,
  checked: boolean,
  onChange: () => void
};

const AkRadioButton: React.FunctionComponent<AkRadioButtonProps> = ({label, value, checked, onChange}) => {
  return (
    <div className={styles.cont}>
      <input
        className={styles.radio}
        type="radio"
        id={value} 
        value={value} 
        checked={checked} 
        onChange={onChange}
      />
      <div className={styles.dotChecked} />
      <div className={styles.dot} />
      <label
        className={styles.label}
        htmlFor={value}
      >
        {label}
      </label>
    </div>
  );
};

export default AkRadioButton;