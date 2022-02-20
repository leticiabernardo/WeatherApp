import { useAppContext } from '@/context/Context';
import DefaultContent from '@/components/DefaultContent';
import DefaultWrapper from '@/components/DefaultWrapper';
import Header from '@/components/Header';
import Weathers from '@/components/Weathers';

const Main = () => {
  const { currentWeather, backgroundImage } = useAppContext();

  return (
    <DefaultWrapper backgroundImage={backgroundImage}>
      <Header />
      {currentWeather ? <Weathers /> : <DefaultContent />}
    </DefaultWrapper>
  );
};

export default Main;
