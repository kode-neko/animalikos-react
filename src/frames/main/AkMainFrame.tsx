import { NavigateFunction, Outlet, useNavigate } from 'react-router-dom';
import { AkMainBar } from './main-bar';
import { AkMainBarMobile } from './main-bar-mobile';
import styles from './styles.module.less';
import { AkFooter } from './footer';
import { useTranslation } from 'react-i18next';
import { typeLang } from './types';
import { AkNotiStack } from '../../components/notification';
import { AkOverlay } from '../../components';
import { useSelector } from 'react-redux';
import { MainStore } from '../../store';
import { motion } from 'framer-motion';

export const MenuFrame: React.FunctionComponent = () => {
  const {i18n} = useTranslation();
  const loading: boolean = useSelector((state: MainStore) => state.app.loading);
  const navigate: NavigateFunction = useNavigate();
  const handleLang: (lang: string) => void = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <motion.div 
        className={styles.frame}
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{duration: 0.5, delay: 0.2}}
      >
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
          <div className={styles.outlet}><Outlet /></div>
          <AkOverlay isVisible={loading} spinner={true} color='black' />
        </div>
        <div className={styles.footer}>
          <AkFooter />
        </div>
      </motion.div>
      <AkNotiStack />
    </>
  );
};

export default MenuFrame;