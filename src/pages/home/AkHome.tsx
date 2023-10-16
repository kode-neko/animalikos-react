import {useState, useEffect} from 'react';
import { Animal, Search } from '../../models';
import styles from './styles.module.less';
import { animalServiceMng } from '../../service';
import { AkButton, AkCard, AkMsgPage } from '../../components';
import { useTranslation } from 'react-i18next';
import { faFrown, faTrash } from '@fortawesome/free-solid-svg-icons';
import { AkSearch } from './components';
import { AkAlert } from '../../components/alert';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { AkAlertAction } from '../../components/alert/AkAlert';

type VisibleAlert = {
  isVisible: boolean,
  animal?: Animal
}

const AkHome: React.FunctionComponent = () => {
  const {t} = useTranslation();
  const navigate: NavigateFunction = useNavigate();
  const [animalList, setAnimalList] = useState<Animal[]>([]);
  const [searchStr, setSearchStr] = useState<Search>({limit: 10, offset: 0, str: ''});
  const [isLoadMore, setIsLoadMore] = useState<boolean>(true);
  const [alertDel, setAlertDel] = useState<VisibleAlert>({isVisible: false});

  const handleSearch: (search: string)=> void = (search: string): void => {
    const newSearch: Search = {limit: 10, offset: 0, str: search};
    getAnimalList(newSearch, []);
  };
  const handleAll: () => void = (): void => {
    const newSearch: Search = {limit: 10, offset: 0, str: ''};
    getAnimalList(newSearch, []);
  };
  const hanldeLoadMore: () => void = (): void => {
    const {offset, limit} = searchStr;
    const newSearch: Search = {...searchStr, offset: offset + limit};
    getAnimalList(newSearch, animalList);
  };
  const handleClose: () => void = (): void => 
    setAlertDel({isVisible: false, animal: undefined});
  const hanldeClickEdit: (animal: Animal) => void = (animal: Animal): void =>
    navigate(`/edit/${animal._id}`);
  const hanldeClickDelete: (_id: string) => void = (_id: string): void => {
    handleClose();
    animalServiceMng().delete(_id as string)
      .then((ok: boolean) => {
        if(ok) {
          console.log('deleted');
          getAnimalList({limit: 10, offset: 0}, []);
        } else
          console.log('fail');
      });
  };
  const getActions: (animal: Animal) => AkAlertAction[] = (animal: Animal): AkAlertAction[] => [
    {
      label: t('labels.cancel'),
      type: 'main',
      onClick: handleClose
    },
    {
      label: t('labels.accept'),
      type: 'second',
      onClick: () => hanldeClickDelete(animal._id as string)
    }
  ];

  useEffect(() => {
    getAnimalList({limit: 10, offset: 0}, []);
  }, []);

  const getAnimalList: (search: Search, list: Animal[]) => void = (search: Search, list: Animal[]): void => {
    setSearchStr(search);
    animalServiceMng().getBySearch(search)
      .then((res: Animal[]) => {
        if(res.length === 0)
          setIsLoadMore(false);
        else
          setAnimalList([...list, ...res]);
      });
  };

  return (
    <>
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
              {animalList.map((animal: Animal) => 
                <div key={animal._id} className={styles.card}>
                  <AkCard 
                    animal={animal}
                    onClickEdit={hanldeClickEdit}
                    onClickDel={() => setAlertDel({animal, isVisible: true})}
                  />
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
      <AkAlert 
        isVisible={alertDel.isVisible} 
        title={t('title.delete')}
        icon={faTrash}
        msg={t('msg.delete')}
        onClose={handleClose}
        actions={getActions(alertDel.animal as Animal)}
      />
    </>
  );
};

export default AkHome;