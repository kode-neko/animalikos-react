import styles from './styles.module.less';

type AkFieldProps = {
  title: string;
  hint: string;
};

const AkField: React.FunctionComponent<React.PropsWithChildren<AkFieldProps>> = ({title, hint, children}: React.PropsWithChildren<AkFieldProps>) => {
  return (
    <div className={styles.cont}>
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.body}>
        {children}
      </div>
      <div className={styles.hint}>
        {hint}
      </div>
    </div>
  );
};

export default AkField;