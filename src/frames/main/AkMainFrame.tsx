import { NavigateFunction, Outlet, useNavigate } from 'react-router-dom';
import { AkMainBar } from './main-bar';
import { AkMainBarMobile } from './main-bar-mobile';
import styles from './styles.module.less';
import { AkFooter } from './footer';
import { useTranslation } from 'react-i18next';
import { typeLang } from './types';
import { AkNotiStack } from '../../components/notification';

export const MenuFrame: React.FunctionComponent = () => {
  const {i18n} = useTranslation();
  const navigate: NavigateFunction = useNavigate();
  const handleLang: (lang: string) => void = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <div className={styles.frame}>
        <div className={styles.mainBar}>
          <AkMainBar
            theme='dark'
            lang={i18n.language as typeLang}
            onClickHome={() => navigate('/')}
            onClickCreate={()=> navigate('/create')}
            onClickSocial={()=>{}}
            onClickTheme={()=>{}}
            onClickLang={handleLang}
          />
        </div>
        <div className={styles.mainBarMobile}>
          <AkMainBarMobile
            theme='dark'
            lang={i18n.language as typeLang}
            onClickCreate={()=> navigate('/create')}
            onClickSocial={()=>{}}
            onClickTheme={()=>{}}
            onClickLang={handleLang}
          />
        </div>
        <div className={styles.cont}>
          <Outlet />
        </div>
        <div className={styles.footer}>
          <AkFooter />
        </div>
      </div>
      <AkNotiStack />
    </>
  );
};

export default MenuFrame;