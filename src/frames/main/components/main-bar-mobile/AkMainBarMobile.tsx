import {useState} from 'react';
import { faBars, faGlobe, faMoon, faPlusCircle, faSun } from '@fortawesome/free-solid-svg-icons';
import { AkButton, AkSwitch } from '../../../../components';
import styles from './styles.module.less';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialList } from '../../../../globals';
import { Social } from '../../../../models';
import { AkIconButton } from '../../../../components/icon-button';

type AkMainBarMobileProps = {
  onClickCreate: () => void,
  onClickSocial: (social: string) => void,
  onClickTheme: (isRight: boolean) => void,
  onClickLang: (isRight: boolean) => void,
}

const AkMainBarMobile: React.FunctionComponent<AkMainBarMobileProps> = ({
  onClickCreate,
  onClickSocial,
  onClickTheme,
  onClickLang,
}: AkMainBarMobileProps) => {
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
        style={{display: isSideMenu ? 'block' : 'none'}} 
        className={styles.sideMenu}
      >
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
              className={styles.opt}
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
              isRight={true}
              onClick={onClickTheme}
            />
          </li>
          <li>
            <AkSwitch
              type='square'
              icon={faGlobe}
              labels={['en', 'es']}
              isRight={true}
              onClick={onClickLang}
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default AkMainBarMobile;