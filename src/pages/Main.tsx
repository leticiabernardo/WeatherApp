import { createStandaloneToast } from '@chakra-ui/react';
import { useAppContext } from '@/context/Context';
import DefaultContent from '@/components/DefaultContent';
import DefaultWrapper from '@/components/DefaultWrapper';
import Header from '@/components/Header';
import Weathers from '@/components/Weathers';
import { useEffect } from 'react';

const Main = () => {
  const { currentWeather, backgroundImage, error, setError } = useAppContext();

  useEffect(() => {
    const toast = createStandaloneToast();
    if (error) {
      toast({
        title: error,
        status: 'error',
        duration: 9000,
        isClosable: true,
        onCloseComplete: () => {
          setError(undefined);
        },
      });
    }
  }, [error, setError]);

  return (
    <DefaultWrapper backgroundImage={backgroundImage}>
      <Header />
      {currentWeather ? <Weathers /> : <DefaultContent />}
    </DefaultWrapper>
  );
};

export default Main;
