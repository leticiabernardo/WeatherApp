import { Box, Text } from '@chakra-ui/react';
import { format } from 'date-fns';
import { useAppContext } from '@/client/Context';

const WeatherToday = (): JSX.Element => {
  const { currLocation } = useAppContext();

  return (
    <>
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
          textTransform="capitalize"
        >
          {currLocation
            ? `${currLocation?.name} - ${currLocation?.state} - ${currLocation?.country}`
            : ''}
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
          {`Hoje ${format(new Date(), 'dd/MM/yyyy')}`}
        </Text>
      </Box>
    </>
  );
};

export default WeatherToday;
