import { useTranslation } from 'react-i18next';
import { Box, Text } from '@chakra-ui/react';
import { getFullTemperature } from '@/helpers/temperature';
import { getWeekday } from '@/helpers/weekday';
import AsyncSvgIcon from '@/components/AsyncSvgIcon';

const WeatherNextDays = (props: {
  weathers: app.DailyWeathers[];
  temperatureMeasurementUnit: string;
}) => {
  const { t, i18n } = useTranslation();
  const { weathers, temperatureMeasurementUnit } = props;

  const mountTemperatures = (temperatures: app.Temperature): JSX.Element => {
    return (
      <Text
        textShadow="1px 1px 5px rgba(0,0,0,0.3)"
        fontSize="sm"
        textAlign="center"
      >
        <Text>
          {t('Max: {{max}}', {
            max: getFullTemperature(
              temperatures.max,
              temperatureMeasurementUnit
            ),
            interpolation: { escapeValue: false },
          })}
        </Text>
        <Text>
          {t('Min: {{min}}', {
            min: getFullTemperature(
              temperatures.min,
              temperatureMeasurementUnit
            ),
            interpolation: { escapeValue: false },
          })}
        </Text>
      </Text>
    );
  };

  const mountWeatherDay = (weather: app.DailyWeathers): JSX.Element => {
    return (
      <Box
        margin="5px 0"
        padding="0 25px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        key={weather.date}
      >
        <Text
          fontWeight="bold"
          textShadow="1px 1px 5px rgba(0,0,0,0.3)"
          textTransform="capitalize"
        >
          {weather.date ? getWeekday(weather.date * 1000, i18n.language) : ''}
        </Text>

        <Box
          margin="15px 0"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <AsyncSvgIcon
            svg={`weather-${weather.weather.toLocaleLowerCase()}`}
          />
          <Text marginTop="8px" textShadow="1px 1px 5px rgba(0,0,0,0.3)">
            {weather && t(weather.weather)}
          </Text>
        </Box>
        {mountTemperatures(weather.temp)}
      </Box>
    );
  };

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
      {weathers.map(weatherDay => {
        return mountWeatherDay(weatherDay);
      })}
    </Box>
  );
};

export default WeatherNextDays;
