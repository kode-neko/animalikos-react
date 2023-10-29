import {useState, useEffect, Dispatch} from 'react';
import { Animal, Search } from '../../models';
import styles from './styles.module.less';
import { animalServiceMng } from '../../service';
import { AkButton, AkCard, AkMsgPage } from '../../components';
import { useTranslation } from 'react-i18next';
import { faFaceDizzy, faFrown, faSmile, faTrash } from '@fortawesome/free-solid-svg-icons';
import { AkSearch } from './components';
import { AkAlert } from '../../components/alert';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { AkAlertAction } from '../../components/alert/AkAlert';
import { useAkNoti } from '../../components/notification';
import { useDispatch } from 'react-redux';
import { changeLoading } from '../../store';
import { AnyAction } from '@reduxjs/toolkit';
import { motion } from "framer-motion";

type VisibleAlert = {
  isVisible: boolean,
  animal?: Animal
}

const AkHome: React.FunctionComponent = () => {
  const {t} = useTranslation();
  const dispatch: Dispatch<AnyAction> = useDispatch();
  const navigate: NavigateFunction = useNavigate();
  const [animalList, setAnimalList] = useState<Animal[]>([]);
  const [searchStr, setSearchStr] = useState<Search>({limit: 10, offset: 0, str: ''});
  const [isLoadMore, setIsLoadMore] = useState<boolean>(false);
  const [alertDel, setAlertDel] = useState<VisibleAlert>({isVisible: false});
  const [emptySearch, setEmptySearch] = useState<boolean>(false);
  const {msgFunc} = useAkNoti();

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
    dispatch(changeLoading(true));
    handleClose();
    animalServiceMng().delete(_id as string)
      .then((ok: boolean) => {
        if(ok) {
          msgFunc({msg: t('desc.success'), icon: faSmile});
          getAnimalList({limit: 10, offset: 0}, []);
        } else
          msgFunc({msg: t('desc.notDeleted'), icon: faFaceDizzy});
      })
      .catch(() => msgFunc({msg: t('desc.errorServer'), icon: faFaceDizzy}))
      .finally(() => dispatch(changeLoading(false)));
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
    dispatch(changeLoading(true));
    setSearchStr(search);
    animalServiceMng().getBySearch(search)
      .then((res: Animal[]) => {
        const newList: Animal[] = [...list, ...res];
        setAnimalList(newList);
        setEmptySearch(newList.length === 0);
        setIsLoadMore(res.length !== 0);
      })
      .catch(() => msgFunc({msg: t('desc.errorServer'), icon: faFaceDizzy}))
      .finally(() => dispatch(changeLoading(false)));
  };

  return (
    <>
      <div className={styles.cont}>
        <motion.div 
          className={styles.search}
          initial={{ opacity: 0, x: '70px' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{duration: 0.5, delay: 0.3}}
        >
          <AkSearch
            placeholder={t('placeH.search')}
            searchStr={searchStr.str}
            onSearch={handleSearch}
            onAll={handleAll}
          />
        </motion.div>
        {emptySearch ? 
          <div className={styles.empty}>
            <AkMsgPage
              icon={faFrown}
              title={t('title.empty')}
              msg={t('desc.empty')}
            />
          </div>
          :
          <div className={styles.list}>
            {animalList.map((animal: Animal, index: number) => 
              <motion.div 
                key={animal._id} 
                className={styles.card}
                initial={{ opacity: 0, x: index%2 === 0 ? '-70px' : '70px' }}
                animate={{ opacity: 1, x: 0 }}
                transition={{duration: 0.5, delay: 0.3}}
              >
                <AkCard 
                  animal={animal}
                  onClickEdit={hanldeClickEdit}
                  onClickDel={() => setAlertDel({animal, isVisible: true})}
                />
              </motion.div>
            )}
          </div>
        }
        {isLoadMore &&
          <motion.div 
            className={styles.loadMore}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{duration: 0.5, delay: 0.3}}
          >
            <AkButton 
              onClick={hanldeLoadMore}
              title={t('labels.loadMore')}
            />
          </motion.div>
        }
        
      </div>
      <AkAlert 
        isVisible={alertDel.isVisible} 
        title={t('title.delete')}
        icon={faTrash}
        msg={t('desc.delete')}
        onClose={handleClose}
        actions={getActions(alertDel.animal as Animal)}
      />
    </>
  );
};

export default AkHome;