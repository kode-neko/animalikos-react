import { useTranslation } from "react-i18next";
import { AkButton } from '../../../../components';
import { AkInput } from '../../../../components/form-compos/input';
import { useState } from "react";
import styles from './styles.module.less';

type AkSearchProps = {
  placeholder?: string;
  searchStr?: string;
  onSearch: (str: string) => void;
  onAll: () => void;
}

const AkSearch: React.FunctionComponent<AkSearchProps> = ({
  placeholder = '',
  searchStr = '',
  onSearch,
  onAll
}: AkSearchProps) => {
  const {t} = useTranslation();
  const [searchHere, setSearchHere] = useState<string>(searchStr);
  return (
    <div className={styles.cont}>
      <div className={styles.search}>
        <AkInput
          value={searchHere}
          placeholder={placeholder}
          size='s'
          onChange={(e) => setSearchHere(e.target.value)}
        />
      </div>
      <AkButton
        title={t('labels.search')}
        size='m'
        type='second'
        onClick={() => onSearch(searchHere)}
      />
      <AkButton
        title={t('labels.all')}
        size='m'
        type='main'
        onClick={onAll}
      />
    </div>
  );
};

export default AkSearch;