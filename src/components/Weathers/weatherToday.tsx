import { Box, Text, Skeleton, SkeletonText } from '@chakra-ui/react';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { getDate } from '@/helpers/weekday';
import WeatherTodayDetails from './weatherTodayDetails';

const WeatherToday = (props: {
  weather: app.CurrentWeather | undefined;
  temperatureMeasurementUnit: app.MeasurementUnit;
  loading: app.Loader;
  currentLocation: string;
}): JSX.Element => {
  const { t, i18n } = useTranslation();
  const { weather, temperatureMeasurementUnit, loading, currentLocation } =
    props;

  return (
    <div>
      <Box width="100%">
        <Box
          width="100%"
          padding="20px 0 0"
          textAlign={{ base: 'left', sm: 'center', lg: 'left' }}
        >
          <Skeleton isLoaded={!loading.geocode} minHeight="90px">
            <Text
              fontSize="7xl"
              color="white"
              fontFamily="Open Sans"
              lineHeight="90px"
              textShadow="1px 1px 5px rgba(0,0,0,0.3)"
            >
              {currentLocation}
            </Text>
          </Skeleton>
          <SkeletonText
            isLoaded={!loading.all}
            mt="3"
            noOfLines={1}
            skeletonHeight="24px"
          >
            <Text
              fontSize="1xl"
              color="white"
              fontWeight="bold"
              fontFamily="Open Sans"
              textShadow="1px 1px 5px rgba(0,0,0,0.3)"
            >
              {format(new Date(), 'HH:mm')}
            </Text>
          </SkeletonText>
          <SkeletonText
            isLoaded={!loading.all}
            mt="3"
            noOfLines={1}
            spacing="4"
            skeletonHeight="24px"
          >
            <Text
              fontSize="sm"
              color="white"
              fontFamily="Open Sans"
              textShadow="1px 1px 5px rgba(0,0,0,0.3)"
            >
              {t('Today {{date}}', {
                date: getDate(new Date(), i18n.language),
                interpolation: { escapeValue: false },
              })}
            </Text>
          </SkeletonText>
        </Box>
        <Box textAlign={{ base: 'left', sm: 'center', lg: 'left' }}>
          <WeatherTodayDetails
            weather={weather}
            temperatureMeasurementUnit={temperatureMeasurementUnit}
            isLoading={loading.all}
          />
        </Box>
      </Box>
    </div>
  );
};

export default WeatherToday;
