import classNames from 'classnames';
import styles from './styles.module.less';

type AkInputProps = {
  placeholder?: string,
  size?: 's' | 'm',
  value: string,
  name: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void,
}

const AkInput: React.FunctionComponent<AkInputProps> = ({placeholder = '', size = 'm', ...props}: AkInputProps) => {
  return (
    <input 
      className={classNames(styles.input, styles[size])}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default AkInput;