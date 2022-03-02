/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Box } from '@chakra-ui/react';
import WeatherToday from '@/components/Weathers/weatherToday';
import WeatherNextDays from '@/components/Weathers/weatherNextDays';
import { addKeyToDailyWeathers } from '@/helpers/weather';

type WeatherProps = {
  weathers: app.WeatherResponse | undefined;
  temperatureMeasurementUnit: app.MeasurementUnit;
  loading: app.Loader;
  currentLocation: string;
};

const Weathers = ({
  weathers,
  temperatureMeasurementUnit,
  loading,
  currentLocation,
}: WeatherProps) => {
  const fakeDailyWeathers = Array(7).fill({}) as app.DailyWeathers[];

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      height="80%"
      width="100%"
    >
      <Box as="span" width="100%">
        <WeatherToday
          weather={weathers?.current}
          currentLocation={currentLocation}
          temperatureMeasurementUnit={temperatureMeasurementUnit}
          loading={loading}
        />
        <WeatherNextDays
          weathers={addKeyToDailyWeathers(weathers?.daily || fakeDailyWeathers)}
          temperatureMeasurementUnit={temperatureMeasurementUnit}
          isLoading={loading.all}
        />
      </Box>
    </Box>
  );
};

export default Weathers;
