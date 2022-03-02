import { useTranslation } from 'react-i18next';
import { Box, Text, Skeleton, SkeletonText } from '@chakra-ui/react';
import { getFullTemperature } from '@/helpers/temperature';
import AsyncSvgIcon from '@/components/AsyncSvgIcon';

const WeatherTodayDetails = (props: {
  weather: app.CurrentWeather | undefined;
  temperatureMeasurementUnit: app.MeasurementUnit;
  isLoading: boolean;
}): JSX.Element => {
  const { t } = useTranslation();
  const { weather, temperatureMeasurementUnit, isLoading } = props;

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
      <Box
        fontSize={{ base: '8xl', sm: '5xl', md: '7xl', lg: '8xl' }}
        color="white"
        fontFamily="Open Sans"
        lineHeight="90px"
        textAlign="center"
        textShadow="1px 1px 5px rgba(0,0,0,0.3)"
      >
        <SkeletonText isLoaded={!isLoading} noOfLines={1} skeletonHeight="90px">
          <Text>
            {weather?.temperature
              ? getFullTemperature(
                  weather.temperature,
                  temperatureMeasurementUnit
                )
              : ''}
          </Text>
        </SkeletonText>
      </Box>
      <Box textAlign="center" margin="0 auto">
        <Skeleton isLoaded={!isLoading} height="70px" minWidth="70px">
          {weather && (
            <AsyncSvgIcon
              svg={`weather-${weather.weather.toLocaleLowerCase()}`}
              options={{ fill: 'white', width: '70px', height: '70px' }}
            />
          )}
        </Skeleton>
        <SkeletonText
          isLoaded={!isLoading}
          mt={2}
          noOfLines={1}
          spacing="4"
          skeletonHeight="41px"
        >
          <Text
            color="white"
            fontSize="sm"
            fontWeight="bold"
            fontFamily="Montserrat"
            padding="10px 0"
          >
            {weather?.weather ? t(weather.weather) : ''}
          </Text>
        </SkeletonText>
      </Box>
      <Box color="white" textAlign={{ base: 'left', sm: 'center', lg: 'left' }}>
        <Box textShadow="1px 1px 5px rgba(0,0,0,0.3)">
          <SkeletonText
            isLoaded={!isLoading}
            mt="2"
            noOfLines={1}
            spacing="4"
            skeletonHeight="18px"
          >
            {weather?.wind_speed && (
              <>
                <Text fontWeight="bold" as="span">
                  {t('Wind speed: ')}
                </Text>
                {` No ${weather?.wind_speed && weather.wind_speed}km/h`}
              </>
            )}
          </SkeletonText>
        </Box>
        <Box textShadow="1px 1px 5px rgba(0,0,0,0.3)">
          <SkeletonText
            isLoaded={!isLoading}
            mt="2"
            noOfLines={1}
            spacing="4"
            skeletonHeight="18px"
          >
            {weather?.humidity && (
              <>
                <Text fontWeight="bold" as="span">
                  {t('Humidity: ')}
                </Text>
                {` ${weather.humidity}%`}
              </>
            )}
          </SkeletonText>
        </Box>

        <Box textShadow="1px 1px 5px rgba(0,0,0,0.3)">
          <SkeletonText
            isLoaded={!isLoading}
            mt="2"
            noOfLines={1}
            spacing="4"
            skeletonHeight="18px"
          >
            {weather?.pressure && (
              <>
                <Text fontWeight="bold" as="span">
                  {t('Pressure: ')}
                </Text>
                {` ${weather.pressure}hPA`}
              </>
            )}
          </SkeletonText>
        </Box>
      </Box>
    </Box>
  );
};

export default WeatherTodayDetails;
