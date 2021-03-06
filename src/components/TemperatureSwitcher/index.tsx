import { Box, Button, Tooltip } from '@chakra-ui/react';

type HeaderProps = {
  measurementUnit?: app.MeasurementUnit;
  setMeasurementUnit: (metric: app.MeasurementUnit) => void;
};

const TemperatureSwitcher = ({
  measurementUnit,
  setMeasurementUnit,
}: HeaderProps) => {
  const handleChangeMeasurementUnit = (metric: app.MeasurementUnit) => {
    setMeasurementUnit(metric);
  };

  return (
    <Box as="span" padding="0 0 4px" color="#a9a9a9">
      <Button
        variant="link"
        color={measurementUnit === 'celsius' ? 'white' : '#999'}
        _hover={{ color: '#ccc' }}
        _focus={{ outline: 'none' }}
        onClick={() => handleChangeMeasurementUnit('celsius')}
      >
        <Tooltip
          label="Celsius"
          aria-label="A tooltip"
          placement="left"
          hasArrow
        >
          °C
        </Tooltip>
      </Button>
      |
      <Button
        variant="link"
        color={measurementUnit === 'fahrenheit' ? 'white' : '#999'}
        _hover={{ color: '#ccc' }}
        _focus={{ outline: 'none' }}
        onClick={() => handleChangeMeasurementUnit('fahrenheit')}
      >
        <Tooltip
          label="Fahrenheit"
          aria-label="A tooltip"
          placement="left"
          hasArrow
        >
          °F
        </Tooltip>
      </Button>
    </Box>
  );
};

const defaultProps = {
  measurementUnit: 'celsius',
};

TemperatureSwitcher.defaultProps = defaultProps;

export default TemperatureSwitcher;
