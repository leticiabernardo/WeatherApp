import { useEffect, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { getWeatherLocation } from '@/helpers/weather';
import DefaultContent from '@/components/DefaultContent';
import DefaultWrapper from '@/components/DefaultWrapper';
import Header from '@/components/Header';
import Weathers from '@/components/Weathers';
import { getGeoCode, getBackground, getWeathers } from './clientService';

const Main = () => {
  const { i18n } = useTranslation();
  const [weathers, setWeathers] = useState<app.WeatherResponse | undefined>(
    undefined
  );
  const [search, setSearch] = useState('');
  const [temperatureMeasurementUnit, setTemperatureMeasurementUnit] =
    useState<app.MeasurementUnit>('celsius');
  const [background, setBackground] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<app.Loader>({
    all: false,
    geocode: false,
  });
  const [prevSearch, setPrevSearch] = useState('');

  const {
    data: geocodesResponse,
    isFetching: isFetchingGeocode,
    isLoading: isLoadingGeocode,
  } = useQuery(
    ['geocode', { language: i18n.language, search }],
    () => getGeoCode(search, i18n.language),
    {
      enabled: search !== '',
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      keepPreviousData: i18n.language === 'pt_BR',
    }
  );

  const geocode = useMemo(
    () => geocodesResponse?.data.results[0],
    [geocodesResponse]
  );
  const geocodeComponents = useMemo(
    () => geocode?.components,
    [geocode?.components]
  );
  const geocodeGeometry = useMemo(() => geocode?.geometry, [geocode?.geometry]);

  const weatherLocation = geocodeComponents
    ? getWeatherLocation(geocodeComponents)
    : '';

  const { data: weathersResponse, isLoading: isLoadingWeathers } = useQuery(
    ['weathers', search, geocodeGeometry?.lat, geocodeGeometry?.lng],
    () =>
      getWeathers(geocodeGeometry?.lat, geocodeGeometry?.lng, i18n.language),
    {
      enabled: !!geocodeGeometry,
      staleTime: 60 * 100000,
    }
  );

  const { data: bgResponse } = useQuery(
    ['background', search],
    () => getBackground(weatherLocation),
    {
      enabled: !!weatherLocation,
      refetchOnWindowFocus: false,
      staleTime: 60 * 5000,
      keepPreviousData: true,
    }
  );

  useEffect(() => {
    if (bgResponse) {
      setBackground(bgResponse.data.background);
    }
  }, [bgResponse]);

  useEffect(() => {
    if (prevSearch === search && isFetchingGeocode) {
      setLoading({ all: false, geocode: isFetchingGeocode });
    } else {
      const isLoading = [
        isFetchingGeocode,
        isLoadingWeathers,
        isLoadingGeocode,
      ].some(el => el === true);

      setLoading({ all: isLoading, geocode: isLoading });
      if (!isLoading) {
        setPrevSearch(search);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetchingGeocode, isLoadingWeathers, isLoadingGeocode]);

  useEffect(() => {
    if (weathersResponse) {
      setWeathers(weathersResponse.data);
    }
  }, [weathersResponse]);

  const currentLocation = useMemo(
    () =>
      geocodeComponents ? getWeatherLocation(geocodeComponents, 'long') : '',
    [geocodeComponents]
  );

  const renderContent = () => {
    if (weathers || loading.all || loading.geocode) {
      return (
        <Weathers
          weathers={weathers}
          temperatureMeasurementUnit={temperatureMeasurementUnit}
          loading={loading}
          currentLocation={currentLocation}
        />
      );
    }
    return <DefaultContent />;
  };

  return (
    <DefaultWrapper backgroundImage={background}>
      <Header
        setSearch={setSearch}
        temperatureMeasurementUnit={temperatureMeasurementUnit}
        setTemperatureMeasurementUnit={setTemperatureMeasurementUnit}
      />
      {renderContent()}
    </DefaultWrapper>
  );
};

export default Main;
