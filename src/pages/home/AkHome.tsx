import {useState, useEffect} from 'react';
import { Animal } from '../../models';
import { AkSearch } from './components';
import styles from './styles.module.less';
import { animalServiceMng } from '../../service';
import { AkCard } from '../../components';
import { useTranslation } from 'react-i18next';

const AkHome: React.FunctionComponent = () => {
  const {t} = useTranslation();
  const [animalList, setAnimalList] = useState<Animal[]>([]);
  const [searchStr, setSearchStr] = useState<string>('');

  const handleSearch: (search: string)=> void = (search: string): void => {
    animalServiceMng().getBySearch({limit: 10, offset: 0, str: search})
      .then(setAnimalList);
  };
  const handleAll: () => void = (): void => {
    setSearchStr('');
    animalServiceMng().getBySearch({limit: 10, offset: 0})
      .then(setAnimalList);
  };

  useEffect(() => {
    animalServiceMng().getBySearch({limit: 10, offset: 0})
      .then(setAnimalList);
  }, []);

  return (
    <div className={styles.cont}>
      <div className={styles.search}>
        <AkSearch
          placeholder={t('placeH.search')}
          searchStr={searchStr}
          onSearch={handleSearch}
          onAll={handleAll}
        />
      </div>
      <div className={styles.list}>
        {animalList.map((a: Animal) => 
          <div key={a._id} className={styles.card}>
            <AkCard animal={a} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AkHome;