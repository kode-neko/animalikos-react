import {useState, useEffect} from 'react';
import { Animal } from '../../models';
import { AkSearch } from './components';
import styles from './styles.module.less';
import { animalServiceMng } from '../../service';

const AkHome: React.FunctionComponent = () => {

  const [animalList, setAnimalList] = useState<Animal[]>([]);

  useEffect(() => {
    animalServiceMng().getBySearch({limit: 10, offset: 0})
      .then(setAnimalList);
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
        {animalList.map((a: Animal) => <div key={a._id}>{a.name}</div>)}
      </div>
    </div>
  );
};

export default AkHome;