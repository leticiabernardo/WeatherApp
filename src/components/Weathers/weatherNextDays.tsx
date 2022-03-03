import { useTranslation } from 'react-i18next';
import { Box, Text, Skeleton, SkeletonText } from '@chakra-ui/react';
import { getFullTemperature } from '@/helpers/temperature';
import { getWeekday } from '@/helpers/weekday';
import AsyncSvgIcon from '@/components/AsyncSvgIcon';

type WeatherNextDaysProps = {
  weathers: app.DailyWeathers[];
  temperatureMeasurementUnit: string;
  isLoading: boolean;
};

const WeatherNextDays = ({
  weathers,
  temperatureMeasurementUnit,
  isLoading,
}: WeatherNextDaysProps) => {
  const { t, i18n } = useTranslation();

  const mountTemperatures = (temperatures: app.Temperature): JSX.Element => {
    return (
      <Box
        textShadow="1px 1px 5px rgba(0,0,0,0.3)"
        fontSize="sm"
        textAlign="center"
        minWidth="80%"
      >
        <SkeletonText
          isLoaded={!isLoading}
          mt="1"
          noOfLines={1}
          spacing="4"
          skeletonHeight="21px"
          minWidth="80%"
        >
          <Text>
            {temperatures.max &&
              t('Max: {{max}}', {
                max: getFullTemperature(
                  temperatures.max,
                  temperatureMeasurementUnit
                ),
                interpolation: { escapeValue: false },
              })}
          </Text>
        </SkeletonText>
        <SkeletonText
          isLoaded={!isLoading}
          mt="1"
          noOfLines={1}
          spacing="4"
          skeletonHeight="21px"
          minWidth="80%"
        >
          <Text>
            {temperatures.min &&
              t('Min: {{min}}', {
                min: getFullTemperature(
                  temperatures.min,
                  temperatureMeasurementUnit
                ),
                interpolation: { escapeValue: false },
              })}
          </Text>
        </SkeletonText>
      </Box>
    );
  };

  const mountWeatherDay = (weather: app.DailyWeathers): JSX.Element => {
    return (
      <Box
        marginTop={{ base: '25px', lg: '5px' }}
        padding="0 25px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        key={weather?.key}
      >
        <SkeletonText
          isLoaded={!isLoading}
          noOfLines={1}
          spacing="4"
          skeletonHeight="24px"
          minWidth="100%"
        >
          {weather?.date && (
            <Text
              fontWeight="bold"
              textShadow="1px 1px 5px rgba(0,0,0,0.3)"
              textTransform="capitalize"
            >
              {getWeekday(weather.date * 1000, i18n.language)}
            </Text>
          )}
        </SkeletonText>
        <Box
          margin="15px 0"
          display="flex"
          flexDirection="column"
          alignItems="center"
          width="100%"
        >
          <Skeleton isLoaded={!isLoading} height="40px" width="40px">
            {weather?.weather && (
              <AsyncSvgIcon
                svg={`weather-${weather.weather.toLocaleLowerCase()}`}
              />
            )}
          </Skeleton>
          <SkeletonText
            isLoaded={!isLoading}
            noOfLines={1}
            spacing="2"
            skeletonHeight="24px"
            minWidth="50%"
          >
            <Text marginTop="8px" textShadow="1px 1px 5px rgba(0,0,0,0.3)">
              {weather && t(weather.weather)}
            </Text>
          </SkeletonText>
        </Box>
        {mountTemperatures(weather.temp)}
      </Box>
    );
  };

  return (
    <Box
      display="grid"
      gridTemplateColumns={{
        base: '1fr 1fr 1fr',
        md: '1fr 1fr 1fr 1fr',
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
