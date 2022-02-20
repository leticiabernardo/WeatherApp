import { Box, Text } from '@chakra-ui/react';
import { useAppContext } from '@/context/Context';
import { convertFloatToIntWithRounding } from '@/helpers/number-converter';
import { getWeatherName } from '@/helpers/weather';
import AsyncSvgIcon from '@/components/AsyncSvgIcon';

const WeatherTodayDetails = (): JSX.Element => {
  const { currentWeather } = useAppContext();

  return (
    <Box
      margin={{ base: '60px auto', sm: '10px auto', lg: '60px auto' }}
      display="grid"
      gridTemplateColumns={{
        base: '1fr 1fr 1fr',
        sm: '1fr',
        lg: '1fr 1fr 1fr',
      }}
      width="100%"
      alignItems="center"
    >
      {currentWeather?.temperature && (
        <Box
          fontSize={{ base: '8xl', sm: '5xl', md: '7xl', lg: '8xl' }}
          color="white"
          fontFamily="Open Sans"
          lineHeight="90px"
          textAlign="center"
          textShadow="1px 1px 5px rgba(0,0,0,0.3)"
        >
          {convertFloatToIntWithRounding(currentWeather.temperature)} °C
        </Box>
      )}
      <Box textAlign="center" margin="0 auto">
        {currentWeather && (
          <AsyncSvgIcon
            svg={`weather-${currentWeather.weather.toLocaleLowerCase()}`}
            options={{ fill: 'white', width: '70px', height: '70px' }}
          />
        )}
        <Text
          color="white"
          fontSize="sm"
          fontWeight="bold"
          fontFamily="Montserrat"
          padding="10px 0"
        >
          {currentWeather && getWeatherName(currentWeather.weather)}
        </Text>
      </Box>
      <Box color="white" textAlign={{ base: 'left', sm: 'center', lg: 'left' }}>
        {currentWeather?.wind_speed && (
          <Text textShadow="1px 1px 5px rgba(0,0,0,0.3)">
            <Text fontWeight="bold" as="span">
              Vento:
            </Text>
            {` No ${currentWeather.wind_speed}km/h`}
          </Text>
        )}
        {currentWeather?.humidity && (
          <Text textShadow="1px 1px 5px rgba(0,0,0,0.3)">
            <Text fontWeight="bold" as="span">
              Humidade:
            </Text>
            {` ${currentWeather.humidity}%`}
          </Text>
        )}
        {currentWeather?.pressure && (
          <Text textShadow="1px 1px 5px rgba(0,0,0,0.3)">
            <Text fontWeight="bold" as="span">
              Pressão:
            </Text>
            {` ${currentWeather.pressure}hPA`}
          </Text>
        )}
      </Box>
    </Box>
  );
};

export default WeatherTodayDetails;
