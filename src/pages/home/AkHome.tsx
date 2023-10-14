import {useState, useEffect} from 'react';
import { Animal } from '../../models';
import { AkSearch } from './components';
import styles from './styles.module.less';

const AkHome: React.FunctionComponent = () => {

  const [animalList, setAnimalList] = useState<Animal[]>([]);

  useEffect(() => {
    
  }, []);

  return (
    <div className={styles.cont}>
      <div className={styles.search}>
        <AkSearch
          placeholder={''}
          searchStr={''}
          onSearch={() => {}}
          onAll={() => {}}
        />
      </div>
      <div className={styles.list}>

      </div>
    </div>
  );
};

export default AkHome;