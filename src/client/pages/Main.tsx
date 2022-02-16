import { Container, Text, Box } from '@chakra-ui/react';
import WeatherToday from '@/client/components/WeatherForecast/weatherToday';
import WeatherNextDays from '@/client/components/WeatherForecast/weatherNextDays';
import Header from '@/client/components/Header';
import { useAppContext } from '@/client/Context';

const Main = () => {
  const { currWeatherForecast } = useAppContext();

  return (
    <Container maxW="1100px" mx="auto" width="100%" height="100%">
      <Header />
      {currWeatherForecast ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          height="80%"
          width="100%"
        >
          <WeatherToday />
          <WeatherNextDays />
        </Box>
      ) : (
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
            <img src="/src/assets/images/location.gif" width="140" alt="" />
          </Box>
          <Text
            color="#fff"
            fontSize="1xl"
            marginTop="30px"
            fontFamily="Open Sans"
          >
            Faça uma busca para iniciar...
          </Text>
        </Box>
      )}
    </Container>
  );
};

export default Main;
