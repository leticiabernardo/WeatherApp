import { Box, Link } from '@chakra-ui/react';
import LanguageSwitcher from '@/client/components/LanguageSwitcher';
import TemperatureConverter from '@/client/components/TemperatureConverter';
import Search from '@/client/components/Search';

const Header = () => {
  return (
    <Box
      display="flex"
      alignItems="start"
      justifyContent="space-between"
      padding="10px 0 30px"
    >
      <Box margin="20px 0">
        <Link
          fontWeight="bold"
          color="white"
          fontSize="0.9em"
          href="https://weather.app"
          isExternal
        >
          weather.app
        </Link>
      </Box>

      <Box textAlign="right">
        <Box display="flex" justifyContent="space-around">
          <TemperatureConverter />
          <LanguageSwitcher />
        </Box>
        <Search />
      </Box>
    </Box>
  );
};

export default Header;
