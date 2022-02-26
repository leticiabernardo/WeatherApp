import { Box } from '@chakra-ui/react';
import WeatherToday from '@/components/Weathers/weatherToday';
import WeatherNextDays from '@/components/Weathers/weatherNextDays';

type WeatherProps = {
  weathers: app.WeatherResponse;
  temperatureMeasurementUnit: app.MeasurementUnit;
};

const Weathers = ({ weathers, temperatureMeasurementUnit }: WeatherProps) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      height="80%"
      width="100%"
    >
      {weathers && (
        <Box as="span">
          <WeatherToday
            weather={weathers.current}
            temperatureMeasurementUnit={temperatureMeasurementUnit}
          />
          <WeatherNextDays
            weathers={weathers.daily}
            temperatureMeasurementUnit={temperatureMeasurementUnit}
          />
        </Box>
      )}
    </Box>
  );
};

export default Weathers;
