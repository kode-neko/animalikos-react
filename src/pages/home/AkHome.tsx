import {useState, useEffect} from 'react';
import { Animal, Search } from '../../models';
import styles from './styles.module.less';
import { animalServiceMng } from '../../service';
import { AkButton, AkCard, AkMsgPage, AkOverlay } from '../../components';
import { useTranslation } from 'react-i18next';
import { faFrown } from '@fortawesome/free-solid-svg-icons';
import { AkSearch } from './components';

const AkHome: React.FunctionComponent = () => {
  const {t} = useTranslation();
  const [animalList, setAnimalList] = useState<Animal[]>([]);
  const [searchStr, setSearchStr] = useState<Search>({limit: 10, offset: 0, str: ''});
  const [isLoadMore, setIsLoadMore] = useState<boolean>(true);

  const handleSearch: (search: string)=> void = (search: string): void => {
    const newSearch: Search = {limit: 10, offset: 0, str: search};
    getAnimalList(newSearch);
  };
  const handleAll: () => void = (): void => {
    const newSearch: Search = {limit: 10, offset: 0, str: ''};
    getAnimalList(newSearch);
  };
  const hanldeLoadMore: () => void = (): void => {
    const {offset, limit} = searchStr;
    const newSearch: Search = {...searchStr, offset: offset + limit};
    getAnimalList(newSearch);
  };

  useEffect(() => {
    getAnimalList({limit: 10, offset: 0});
  }, []);

  const getAnimalList: (search: Search) => void = (search: Search): void => {
    setSearchStr(search);
    animalServiceMng().getBySearch(search)
      .then((list: Animal[]) => {
        if(list.length === 0) {
          setIsLoadMore(false);
        } else {
          setAnimalList([...animalList, ...list]);
        }
      });
  };

  return (
    <div className={styles.cont}>
      <div className={styles.search}>
        <AkSearch
          placeholder={t('placeH.search')}
          searchStr={searchStr.str}
          onSearch={handleSearch}
          onAll={handleAll}
        />
      </div>
      {
        animalList.length === 0 ? 
          <div className={styles.empty}>
            <AkMsgPage
              icon={faFrown}
              title={t('title.empty')}
              msg={t('desc.empty')}
            />
          </div>
          :
          <div className={styles.list}>
            {animalList.map((a: Animal) => 
              <div key={a._id} className={styles.card}>
                <AkCard animal={a} />
              </div>
            )}
          </div>
      }
      {isLoadMore && 
        <div className={styles.loadMore}>
          <AkButton 
            onClick={hanldeLoadMore}
            title={t('labels.loadMore')}
          />
        </div>
      }
    </div>
  );
};

export default AkHome;