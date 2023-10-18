type typeTheme = 'light' | 'dark';
type typeLang = 'en' | 'es' 

type AkMainBarProps = {
  theme: typeTheme;
  lang: typeLang;
  onClickHome?: () => void;
  onClickCreate: () => void,
  onClickSocial: (social: string) => void,
  onClickTheme: (isRight: boolean) => void,
  onClickLang: (lang: string) => void,
}

export type { typeTheme, typeLang, AkMainBarProps };
