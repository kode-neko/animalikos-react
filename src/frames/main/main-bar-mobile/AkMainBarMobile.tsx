import {useState} from 'react';
import { faBars, faGlobe, faMoon, faPlusCircle, faSun, faXmark } from '@fortawesome/free-solid-svg-icons';
import { AkButton, AkOverlay, AkSwitch } from '../../../components';
import styles from './styles.module.less';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialList } from '../../../globals';
import { Social } from '../../../models';
import { AkIconButton } from '../../../components/icon-button';
import classNames from 'classnames';
import { AkMainBarProps } from '../types';

const AkMainBarMobile: React.FunctionComponent<AkMainBarProps> = ({
  theme,
  lang,
  onClickCreate,
  onClickSocial,
  onClickTheme,
  onClickLang,
}: AkMainBarProps) => {
  const {t} = useTranslation();
  const [isSideMenu, setIsSideMenu] = useState<boolean>(false);
  return (
    <>
      <div className={styles.bar}>
        <AkIconButton
          icon={faBars}
          onClick={() => setIsSideMenu(!isSideMenu)}
        />
        <div className={styles.title}>
          {t('mainTitle')}
        </div>
      </div>
      <div 
        className={classNames(styles.sideMenu, isSideMenu && styles.visible)}
      >
        <div 
          className={styles.close}
          onClick={() => setIsSideMenu(false)}
        >
          <AkIconButton
            icon={faXmark}
          />
          <div>{t('labels.close')}</div>
        </div>
        <ul className={styles.block}>
          <li>
            <AkButton
              title={t('labels.create')}
              icon={faPlusCircle}
              size='m'
              type='reverse'
              onClick={onClickCreate}
            />
          </li>
        </ul>
        <ul className={styles.block}>
          {socialList.map((social: Social) => 
            <li 
              key={social.name}
              className={styles.social}
              onClick={() => onClickSocial(social.name)}
            >
              <FontAwesomeIcon 
                className={styles.icon} 
                icon={social.icon} 
              />
              <div 
                className={styles.icon}
              >
                {t(`social.${social.name}`)}
              </div>
            </li>
          )}
        </ul>
        <ul className={styles.block}>
          <li>
            <AkSwitch    
              icon={faSun}
              iconRight={faMoon}
              isRight={theme === 'light'}
              onClick={onClickTheme}
            />
          </li>
          <li>
            <AkSwitch
              type='square'
              icon={faGlobe}
              labels={['en', 'es']}
              isRight={lang === 'es'}
              onClick={(isRight: boolean) => onClickLang(isRight ? 'es' : 'en')}
            />
          </li>
        </ul>
      </div>
      <div onClick={() => setIsSideMenu(!isSideMenu)}>
        <AkOverlay
          isVisible={isSideMenu}
          color='black'
        />
      </div>
    </>
  );
};

export default AkMainBarMobile;