import { Box, Button } from '@chakra-ui/react';

const TemperatureConverter = () => {
  return (
    <Box as="span" padding="0 0 4px" color="#a9a9a9">
      <Button variant="link" color="white">
        °C
      </Button>
      |
      <Button variant="link" color="white">
        °F
      </Button>
    </Box>
  );
};

export default TemperatureConverter;
