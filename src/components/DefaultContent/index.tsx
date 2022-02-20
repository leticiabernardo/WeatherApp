import { Text, Box } from '@chakra-ui/react';
import LocationGif from '@/assets/images/location.gif';

const DefaultContent = () => {
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
        <img src={LocationGif} width="140" alt="" />
      </Box>
      <Text color="#fff" fontSize="1xl" marginTop="30px" fontFamily="Open Sans">
        Faça uma busca para iniciar...
      </Text>
    </Box>
  );
};

export default DefaultContent;
