import axios from 'axios';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { createStandaloneToast } from '@chakra-ui/react';
import { getWeatherLocation } from '@/helpers/weather';
import DefaultContent from '@/components/DefaultContent';
import DefaultWrapper from '@/components/DefaultWrapper';
import Header from '@/components/Header';
import Weathers from '@/components/Weathers';

const Main = () => {
  const { i18n } = useTranslation();
  const [weathers, setWeathers] = useState<app.WeatherResponse | undefined>(
    undefined
  );
  const [search, setSearch] = useState('');
  const [temperatureMeasurementUnit, setTemperatureMeasurementUnit] =
    useState<app.MeasurementUnit>('celsius');
  const [error, setError] = useState<string | undefined>(undefined);
  const [background, setBackground] = useState<string | undefined>(undefined);

  async function getGeoCode(searchValue: string, lang: string) {
    const response = await axios.get<app.Geocode>('/api/geocode', {
      params: {
        search: searchValue,
        language: lang,
      },
    });
    return response;
  }

  async function getBackground(searchValue: string | undefined) {
    const response = await axios.get<app.Background>('/api/background', {
      params: {
        search: searchValue,
      },
    });

    return response;
  }

  async function getWeathers(
    latitude: number | undefined,
    longitude: number | undefined,
    lang: string
  ) {
    const response = await axios.get<app.WeatherResponse>('/api/weathers', {
      params: {
        lat: latitude,
        lon: longitude,
        lang,
      },
    });

    return response;
  }

  const { data: geocodesResponse } = useQuery(
    ['geocode', { language: i18n.language, search }],
    () => getGeoCode(search, i18n.language),
    {
      enabled: search !== '',
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    }
  );

  const geocode = geocodesResponse?.data.results[0];
  const geocodeComponents = geocode?.components;
  const geocodeGeometry = geocode?.geometry;
  const weatherLocation = geocodeComponents
    ? getWeatherLocation(geocodeComponents)
    : '';

  const { data: bgResponse } = useQuery(
    ['background', search],
    () => getBackground(weatherLocation),
    {
      enabled: !!weatherLocation,
      refetchOnWindowFocus: false,
      staleTime: 60 * 5000,
    }
  );

  const { data: weathersResponse } = useQuery(
    ['weathers', search, i18n.language],
    () =>
      getWeathers(geocodeGeometry?.lat, geocodeGeometry?.lng, i18n.language),
    {
      enabled: !!geocodeGeometry,
      staleTime: 60 * 100000,
    }
  );

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

  useEffect(() => {
    if (bgResponse) {
      setBackground(bgResponse.data.background);
    }
  }, [bgResponse]);

  useEffect(() => {
    if (weathersResponse && geocodeComponents) {
      const currentWeather = weathersResponse.data.current;
      currentWeather.location = getWeatherLocation(geocodeComponents, 'long');
      setWeathers(weathersResponse.data);
    }
  }, [weathersResponse, geocodeComponents]);

  return (
    <DefaultWrapper backgroundImage={background}>
      <Header
        setSearch={setSearch}
        temperatureMeasurementUnit={temperatureMeasurementUnit}
        setTemperatureMeasurementUnit={setTemperatureMeasurementUnit}
        setError={setError}
      />
      {weathers ? (
        <Weathers
          weathers={weathers}
          temperatureMeasurementUnit={temperatureMeasurementUnit}
        />
      ) : (
        <DefaultContent />
      )}
    </DefaultWrapper>
  );
};

export default Main;
