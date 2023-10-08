import styles from './styles.module.less';

type AkTextAreaProps = {
  value: string,
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const AkTextArea: React.FunctionComponent<AkTextAreaProps> = ({value, placeholder, onChange}: AkTextAreaProps) => {
  return (
    <textarea 
      className={styles.textArea}
      placeholder={placeholder}
      onChange={onChange}
    >
      {value}
    </textarea>
  );
}

export default AkTextArea;