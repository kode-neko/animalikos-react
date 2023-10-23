import classNames from 'classnames';
import styles from './styles.module.less';

type AkInputProps = {
  placeholder?: string,
  size?: 's' | 'm',
  value: string,
  name: string,
  date?: boolean,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void,
}

const AkInput: React.FunctionComponent<AkInputProps> = ({placeholder = '', size = 'm', date = false, ...props}: AkInputProps) => {
  return (
    <input 
      className={classNames(styles.input, styles[size])}
      placeholder={placeholder}
      type={date ? 'date' : 'text'}
      {...props}
    />
  );
};

export default AkInput;