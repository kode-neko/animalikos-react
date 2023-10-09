import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { Social } from "../models";
import { faTwitter, faGithub,faCodepen, faFigma } from '@fortawesome/free-brands-svg-icons';

const socialList: Social[] = [
  {
    name: 'twitter',
    icon: faTwitter,
    url: 'https://twitter.com/KodenekoFront'
  },
  {
    name: 'github',
    icon: faGithub,
    url: 'https://github.com/kode-neko'
  },
  {
    name: 'codepen',
    icon: faCodepen,
    url: 'https://codepen.io/kodeneko'
  },
  {
    name: 'stackblitz',
    icon: faBolt,
    url: 'https://stackblitz.com/@kode-neko'
  },
  {
    name: 'figma',
    icon: faFigma,
    url: 'https://twitter.com/KodenekoFront'
  }
];

export default socialList;