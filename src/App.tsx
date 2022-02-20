import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Main from '@/pages/Main';
import { ContextWrapper } from '@/context/Context';
import '@fontsource/montserrat/700.css';
import '@fontsource/open-sans/400.css';

const theme = extendTheme({
  styles: {
    global: () => ({
      html: {
        width: '100%',
        height: '100%',
      },
      fonts: {
        heading: 'Open Sans',
        body: 'Montserrat',
      },
      body: {
        background: '#333',
        width: '100%',
        height: '100%',
      },
    }),
  },
});

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <ContextWrapper>
        <Main />
      </ContextWrapper>
    </ChakraProvider>
  );
};

export default App;
