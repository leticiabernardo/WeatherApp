import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Main from '@/pages/Main';
import '@fontsource/montserrat/700.css';
import '@fontsource/open-sans/400.css';
import './i18n';

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

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Main />
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default App;
