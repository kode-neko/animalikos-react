import { faGlobe, faMoon, faPlusCircle, faShareNodes, faSun } from '@fortawesome/free-solid-svg-icons';
import { AkButton, AkSwitch } from '../../../../components';
import styles from './styles.module.less';
import { useTranslation } from 'react-i18next';
import { AkIconButton } from '../../../../components/icon-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialList } from '../../../../globals';
import { Social } from '../../../../models';

type AkMainBarProps = {
  onClickCreate: () => void,
  onClickSocial: (social: string) => void,
  onClickTheme: (isRight: boolean) => void,
  onClickLang: (isRight: boolean) => void,
}

const AkMainBar: React.FunctionComponent<AkMainBarProps> = ({
  onClickCreate,
  onClickSocial,
  onClickTheme,
  onClickLang,
}: AkMainBarProps) => {
  const {t} = useTranslation();
  return (
    <div className={styles.cont}>
      <div className={styles.title}>
        {t('mainTitle')}
      </div>
      <div className={styles.options}>
        <AkButton
          title={t('labels.create')}
          icon={faPlusCircle}
          size='m'
          type='reverse'
          onClick={onClickCreate}
        />
        <div className={styles.social}>
          <div className={styles.btn}>
            <AkIconButton
              icon={faShareNodes}
              onClick={() => {}}
            />
          </div>
          <div className={styles.menu}>
            <ul>
              {socialList.map((social: Social) => 
                <li 
                  key={social.name}
                  className={styles.opt}
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
          </div>
        </div>
        <AkSwitch    
          icon={faSun}
          iconRight={faMoon}
          isRight={true}
          onClick={onClickTheme}
        />
        <AkSwitch
          type='square'
          icon={faGlobe}
          labels={['en', 'es']}
          isRight={true}
          onClick={onClickLang}
        />
      </div>
    </div>
  );
};

export default AkMainBar;