import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Main from './pages/Main';
import { ContextWrapper } from './Context';

export const App = () => {
  return (
    <ChakraProvider>
      <ContextWrapper>
        <Main />
      </ContextWrapper>
    </ChakraProvider>
  );
};

export default App;
