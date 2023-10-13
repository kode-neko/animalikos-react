import { Outlet } from 'react-router-dom';
import { AkMainBar } from './components/main-bar';
import { AkMainBarMobile } from './components/main-bar-mobile';
import styles from './styles.module.less';
import { AkFooter } from './components/footer';

export const MenuFrame: React.FunctionComponent = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.mainBar}>
        <AkMainBar
          onClickCreate={()=>{}}
          onClickSocial={()=>{}}
          onClickTheme={()=>{}}
          onClickLang={()=>{}}
        />
      </div>
      <div className={styles.mainBarMobile}>
        <AkMainBarMobile
          onClickCreate={()=>{}}
          onClickSocial={()=>{}}
          onClickTheme={()=>{}}
          onClickLang={()=>{}}
        />
      </div>
      <div className={styles.cont}>
        <Outlet />
      </div>
      <div className={styles.footer}>
        <AkFooter />
      </div>
    </div>
  );
};

export default MenuFrame;