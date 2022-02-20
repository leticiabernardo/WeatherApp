import { Box, Text } from '@chakra-ui/react';
import { getFullTemperature } from '@/helpers/temperature';
import { getWeekday } from '@/helpers/weekday';
import { getWeatherName } from '@/helpers/weather';
import { useAppContext } from '@/context/Context';
import AsyncSvgIcon from '@/components/AsyncSvgIcon';

const WeatherNextDays = () => {
  const { nextWeathers, temperatureMetric } = useAppContext();

  return (
    <Box
      display="grid"
      gridTemplateColumns={{
        base: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
        sm: '1fr 1fr 1fr 1fr',
        lg: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
      }}
      color="white"
      width="100%"
      padding="20px 0"
      margin="0"
      justifyContent="center"
      borderTop="1px solid white"
    >
      {nextWeathers.map(weatherDay => {
        return (
          <Box
            margin="5px 0"
            padding="0 25px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            key={weatherDay.dt}
          >
            <Text fontWeight="bold" textShadow="1px 1px 5px rgba(0,0,0,0.3)">
              {weatherDay.dt ? getWeekday(weatherDay.dt * 1000) : ''}
            </Text>

            <Box
              margin="15px 0"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <AsyncSvgIcon
                svg={`weather-${weatherDay.weather.toLocaleLowerCase()}`}
              />
              <Text marginTop="8px" textShadow="1px 1px 5px rgba(0,0,0,0.3)">
                {getWeatherName(weatherDay.weather)}
              </Text>
            </Box>

            <Text
              textShadow="1px 1px 5px rgba(0,0,0,0.3)"
              fontSize="sm"
              textAlign="center"
            >
              <Text>
                {`Max: ${getFullTemperature(
                  weatherDay.temp.max,
                  temperatureMetric
                )}`}
              </Text>
              <Text>
                {`Min: ${getFullTemperature(
                  weatherDay.temp.min,
                  temperatureMetric
                )}`}
              </Text>
            </Text>
          </Box>
        );
      })}
    </Box>
  );
};

export default WeatherNextDays;
