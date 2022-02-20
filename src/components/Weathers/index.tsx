import WeatherToday from '@/components/Weathers/weatherToday';
import WeatherNextDays from '@/components/Weathers/weatherNextDays';
import { Box } from '@chakra-ui/react';

const Weathers = (): JSX.Element => {
  return (
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
  );
};

export default Weathers;
