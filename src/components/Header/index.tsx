import { Box, Link } from '@chakra-ui/react';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import TemperatureConverter from '@/components/TemperatureConverter';
import Search from '@/components/Search';

type HeaderProps = {
  setSearch: (val: string) => void;
  temperatureMeasurementUnit: app.MeasurementUnit;
  setTemperatureMeasurementUnit: (metric: app.MeasurementUnit) => void;
  setError: (error: string) => void;
};

const Header = ({
  setSearch,
  temperatureMeasurementUnit,
  setTemperatureMeasurementUnit,
  setError,
}: HeaderProps) => {
  return (
    <Box
      display="flex"
      alignItems="start"
      justifyContent="space-between"
      padding="10px 0 30px"
    >
      <Box margin="20px 0">
        <Link fontWeight="bold" color="white" fontSize="0.9em" href="./">
          weather.app
        </Link>
      </Box>

      <Box textAlign="right">
        <Box display="flex" justifyContent="space-around">
          <TemperatureConverter
            measurementUnit={temperatureMeasurementUnit}
            setMeasurementUnit={setTemperatureMeasurementUnit}
          />
          <LanguageSwitcher />
        </Box>
        <Search setSearch={setSearch} setError={setError} />
      </Box>
    </Box>
  );
};

export default Header;
