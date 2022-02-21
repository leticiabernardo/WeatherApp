/* eslint-disable @typescript-eslint/no-floating-promises */
import { Box, Button } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (lang: string) => {
    if (lang === i18n.language) {
      return;
    }
    i18n.changeLanguage(lang);
  };

  return (
    <Box as="span" padding="0 4px 4px" color="#a9a9a9">
      <Button
        variant="link"
        color={i18n.language === 'en_US' ? 'white' : '#999'}
        _hover={{ color: '#ccc' }}
        _focus={{ outline: 'none' }}
        onClick={() => handleChangeLanguage('en_US')}
      >
        EN
      </Button>
      |
      <Button
        variant="link"
        color={i18n.language === 'pt_BR' ? 'white' : '#999'}
        _hover={{ color: '#ccc' }}
        _focus={{ outline: 'none' }}
        onClick={() => handleChangeLanguage('pt_BR')}
      >
        PT
      </Button>
    </Box>
  );
};

export default LanguageSwitcher;
