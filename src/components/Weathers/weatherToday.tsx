import { useEffect, useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { format } from 'date-fns';
import { useAppContext } from '@/context/Context';
import { getWeatherLocation } from '@/helpers/weather';
import { useTranslation } from 'react-i18next';
import { getDate } from '@/helpers/weekday';
import WeatherTodayDetails from './weatherTodayDetails';

const WeatherToday = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const [location, setLocation] = useState<string | undefined>(undefined);
  const { location: currLocation } = useAppContext();

  useEffect(() => {
    if (currLocation) {
      setLocation(getWeatherLocation(currLocation, 'long'));
    }
  }, [currLocation]);

  return (
    <div>
      {location && (
        <Box width="100%">
          <Box
            width="100%"
            padding="20px 0 0"
            textAlign={{ base: 'left', sm: 'center', lg: 'left' }}
          >
            <Text
              fontSize="7xl"
              color="white"
              fontFamily="Open Sans"
              lineHeight="65px"
              textShadow="1px 1px 5px rgba(0,0,0,0.3)"
            >
              {location}
            </Text>
            <Text
              fontSize="1xl"
              color="white"
              fontWeight="bold"
              fontFamily="Open Sans"
              textShadow="1px 1px 5px rgba(0,0,0,0.3)"
            >
              {format(new Date(), 'HH:ii')}
            </Text>
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
          </Box>
          <Box textAlign={{ base: 'left', sm: 'center', lg: 'left' }}>
            <WeatherTodayDetails />
          </Box>
        </Box>
      )}
    </div>
  );
};

export default WeatherToday;
