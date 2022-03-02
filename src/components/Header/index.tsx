import { Box, Link } from '@chakra-ui/react';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import TemperatureSwitcher from '@/components/TemperatureSwitcher';
import Search from '@/components/Search';

type HeaderProps = {
  setSearch: (val: string) => void;
  temperatureMeasurementUnit: app.MeasurementUnit;
  setTemperatureMeasurementUnit: (metric: app.MeasurementUnit) => void;
};

const Header = ({
  setSearch,
  temperatureMeasurementUnit,
  setTemperatureMeasurementUnit,
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
          <TemperatureSwitcher
            measurementUnit={temperatureMeasurementUnit}
            setMeasurementUnit={setTemperatureMeasurementUnit}
          />
          <LanguageSwitcher />
        </Box>
        <Search setSearch={setSearch} />
      </Box>
    </Box>
  );
};

export default Header;
