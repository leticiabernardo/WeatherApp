import { Text, Box } from '@chakra-ui/react';
import ErrorGif from '@/assets/images/error.gif';
import { useTranslation } from 'react-i18next';

const ErrorContent = () => {
  const { t } = useTranslation();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      height="80%"
      width="100%"
      margin="30px 0"
      background="#222"
      borderRadius="20px"
    >
      <Box>
        <img src={ErrorGif} width="140" height="140px" alt="" />
      </Box>
      <Text color="#fff" fontSize="1xl" marginTop="30px" fontFamily="Open Sans">
        {t('Your search could not be completed...')}
      </Text>
    </Box>
  );
};

export default ErrorContent;
