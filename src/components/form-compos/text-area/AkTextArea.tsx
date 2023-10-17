import styles from './styles.module.less';

type AkTextAreaProps = {
  placeholder?: string,
  value: string,
  name: string,
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
  onBlur: (event: React.FocusEvent<HTMLTextAreaElement>) => void
}

const AkTextArea: React.FunctionComponent<AkTextAreaProps> = (props: AkTextAreaProps) => {
  return (
    <textarea 
      className={styles.textArea}
      {...props}
    />
  );
};

export default AkTextArea;