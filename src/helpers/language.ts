export const mapLanguage = (lang: string | undefined): string => {
  const languages: { [key: string]: string } = {
    'pt-BR': 'pt_BR',
    'en-US': 'en_US',
  };
  return lang ? languages[lang] : 'es-US';
};
