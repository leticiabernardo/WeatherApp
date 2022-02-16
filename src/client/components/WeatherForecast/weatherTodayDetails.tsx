import { Box, Text } from '@chakra-ui/react';
import { useAppContext } from '@/client/Context';
import { convertFloatToIntWithRounding } from '@/helpers/number-converter';
import { getWeatherName } from '@/helpers/weather';
import AsyncSvgIcon from '@/client/components/AsyncSvgIcon';

const WeatherTodayDetails = (): JSX.Element => {
  const { currWeatherForecast } = useAppContext();

  return (
    <Box
      margin={{ base: '90px auto', sm: '10px auto', lg: '90px auto' }}
      display="grid"
      gridTemplateColumns={{
        base: '1fr 1fr 1fr',
        sm: '1fr',
        lg: '1fr 1fr 1fr',
      }}
      width="100%"
      alignItems="center"
    >
      <Box
        fontSize={{ base: '8xl', sm: '5xl', md: '7xl', lg: '8xl' }}
        color="white"
        fontFamily="Open Sans"
        lineHeight="90px"
        textAlign="center"
        textShadow="1px 1px 5px rgba(0,0,0,0.3)"
      >
        {currWeatherForecast &&
          convertFloatToIntWithRounding(currWeatherForecast.temp)}{' '}
        °C
      </Box>
      <Box textAlign="center" margin="0 auto">
        {currWeatherForecast && (
          <AsyncSvgIcon
            svg={`weather-${currWeatherForecast.weather[0].main.toLocaleLowerCase()}`}
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
          {currWeatherForecast &&
            getWeatherName(currWeatherForecast.weather[0].main)}
        </Text>
      </Box>
      <Box color="white" textAlign={{ base: 'left', sm: 'center', lg: 'left' }}>
        <Text textShadow="1px 1px 5px rgba(0,0,0,0.3)">
          <Text fontWeight="bold" as="span">
            Vento:
          </Text>
          {currWeatherForecast && ` No ${currWeatherForecast.wind_speed}km/h`}
        </Text>
        <Text textShadow="1px 1px 5px rgba(0,0,0,0.3)">
          <Text fontWeight="bold" as="span">
            Humidade:
          </Text>
          {currWeatherForecast && ` ${currWeatherForecast.humidity}%`}
        </Text>
        <Text textShadow="1px 1px 5px rgba(0,0,0,0.3)">
          <Text fontWeight="bold" as="span">
            Pressão:
          </Text>
          {currWeatherForecast && ` ${currWeatherForecast.pressure}hPA`}
        </Text>
      </Box>
    </Box>
  );
};

export default WeatherTodayDetails;
