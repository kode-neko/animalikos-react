import styles from './styles.module.less';

type AkRadioButtonProps = {
  label: string,
  checked: boolean,
  value: string,
  name: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void,
};

const AkRadioButton: React.FunctionComponent<AkRadioButtonProps> = ({label, value, ...props}: AkRadioButtonProps) => {
  return (
    <div className={styles.cont}>
      <input
        className={styles.radio}
        type="radio"
        value={value}
        {...props}
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