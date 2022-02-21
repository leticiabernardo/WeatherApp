/* eslint-disable @typescript-eslint/no-floating-promises */
import axios from 'axios';
import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { getWeatherLocation } from '@/helpers/weather';
import { useTranslation } from 'react-i18next';

export interface Context {
  backgroundImage: string | undefined;
  currentWeather?: app.CurrentWeather;
  error: string | undefined;
  location: app.GeoCodeComponents | undefined;
  nextWeathers: app.DailyWeathers[];
  search: string;
  temperatureMetric: string;
  fetchWeathers: (search: string) => void;
  setError: (e: string | undefined) => void;
  setSearch: (val: string) => void;
  setTemperatureMetric: (metric: string) => void;
}

const context = React.createContext({} as Context);

const { Provider } = context;

export const ContextWrapper = ({ children }: { children: ReactNode }) => {
  const { i18n } = useTranslation();
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState<app.GeoCodeComponents | undefined>(
    undefined
  );
  const [currentWeather, setCurrentWeather] = useState<
    app.CurrentWeather | undefined
  >(undefined);
  const [backgroundImage, setBackgroundImage] = useState<string | undefined>(
    undefined
  );
  const [nextWeathers, setNextWeathers] = useState<app.DailyWeathers[]>([]);
  const [error, setError] = useState<string | undefined>(undefined);
  const [temperatureMetric, setTemperatureMetric] = useState<string>('celsius');

  async function getGeoCode(searchValue: string, lang: string) {
    const responseGeoCode = await axios.get<app.Geocode>('/api/geocode', {
      params: {
        search: searchValue,
        language: lang,
      },
    });
    setLocation(responseGeoCode.data.results[0].components);
    return responseGeoCode;
  }

  const fetchWeathers = async (searchValue: string) => {
    const responseGeoCode = await getGeoCode(searchValue, i18n.language);

    const res = await axios.get<app.WeatherResponse>('/api/weathers', {
      params: {
        lat: responseGeoCode.data.results[0].geometry.lat,
        lon: responseGeoCode.data.results[0].geometry.lng,
        lang: i18n.language,
      },
    });
    const resImage = await axios.get<app.Background>('/api/background', {
      params: {
        search: getWeatherLocation(responseGeoCode.data.results[0].components),
      },
    });

    // TODO: display geocode results with an auto complete field
    setLocation(responseGeoCode.data.results[0].components);
    setCurrentWeather(res.data.current);
    setNextWeathers(res.data.daily);
    setBackgroundImage(resImage.data.background);
  };

  useEffect(() => {
    getGeoCode(search, i18n.language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language]);

  return (
    <Provider
      value={{
        backgroundImage,
        currentWeather,
        error,
        location,
        nextWeathers,
        search,
        temperatureMetric,
        fetchWeathers,
        setError,
        setSearch,
        setTemperatureMetric,
      }}
    >
      {children}
    </Provider>
  );
};

export const useAppContext = () => useContext(context);
