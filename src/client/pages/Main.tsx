import React from 'react';
import { Box } from '@chakra-ui/react';
import { useAppContext } from '../Context';

const Main = () => {
  const { name } = useAppContext();
  return (
    <Box maxW="960px" mx="auto" color="grey">
      Hello {name}!
    </Box>
  );
};

export default Main;
