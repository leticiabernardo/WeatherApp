import { Box, Button, Tooltip } from '@chakra-ui/react';
import { useAppContext } from '@/context/Context';

const TemperatureConverter = () => {
  const { temperatureMetric, setTemperatureMetric } = useAppContext();

  const handleChangeTemperatureMetric = (metric: string) => {
    setTemperatureMetric(metric);
  };

  return (
    <Box as="span" padding="0 0 4px" color="#a9a9a9">
      <Button
        variant="link"
        color={temperatureMetric === 'celsius' ? 'white' : '#999'}
        _hover={{ color: '#ccc' }}
        _focus={{ outline: 'none' }}
        onClick={() => handleChangeTemperatureMetric('celsius')}
      >
        <Tooltip
          label="Celsius"
          aria-label="A tooltip"
          hasArrow
          bg="#282828"
          placement="left"
        >
          °C
        </Tooltip>
      </Button>
      |
      <Button
        variant="link"
        color={temperatureMetric === 'fahrenheit' ? 'white' : '#999'}
        _hover={{ color: '#ccc' }}
        _focus={{ outline: 'none' }}
        onClick={() => handleChangeTemperatureMetric('fahrenheit')}
      >
        <Tooltip
          label="Fahrenheit"
          aria-label="A tooltip"
          hasArrow
          bg="#282828"
          placement="left"
        >
          °F
        </Tooltip>
      </Button>
    </Box>
  );
};

export default TemperatureConverter;
