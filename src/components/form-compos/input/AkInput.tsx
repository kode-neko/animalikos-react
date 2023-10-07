import classNames from 'classnames';
import styles from './styles.module.less';

type AkInputProps = {
  value: string,
  placeholder: string;
  size: 's' | 'm',
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const AkInput: React.FunctionComponent<AkInputProps> = ({value, placeholder, size = 'm', onChange}: AkInputProps) => {
  return (
    <input 
      className={classNames(styles.input, styles[size])}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default AkInput;