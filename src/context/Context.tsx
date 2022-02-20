import axios from 'axios';
import React, { useContext, useState } from 'react';
import { getWeatherLocation } from '@/helpers/weather';

export interface Context {
  backgroundImage: string | undefined;
  currLocation: app.GeoCodeComponents | undefined;
  currentWeather?: app.CurrentWeather;
  search: string;
  nextWeathers: app.DailyWeathers[];
  fetchWeathers: (search: string) => void;
  setSearch: (val: string) => void;
}

const context = React.createContext({} as Context);

const { Provider } = context;

export const ContextWrapper = ({ children }: { children: any }) => {
  const [search, setSearch] = useState('');
  const [currLocation, setCurrentLocation] = useState<
    app.GeoCodeComponents | undefined
  >(undefined);
  const [currentWeather, setCurrentWeather] = useState<
    app.CurrentWeather | undefined
  >(undefined);
  const [backgroundImage, setBackgroundImage] = useState<string | undefined>(
    undefined
  );
  const [nextWeathers, setNextWeathers] = useState<app.DailyWeathers[]>([]);

  async function fetchWeathers(searchValue: string) {
    const responseGeoCode = await axios.get<app.Geocode>('/api/geocode', {
      params: {
        search: searchValue,
      },
    });

    const res = await axios.get<app.WeatherResponse>('/api/weathers', {
      params: {
        lat: responseGeoCode.data.results[0].geometry.lat,
        lon: responseGeoCode.data.results[0].geometry.lng,
      },
    });
    const resImage = await axios.get<app.Background>('/api/background', {
      params: {
        search: getWeatherLocation(responseGeoCode.data.results[0].components),
      },
    });

    // TODO: display geocode results with an auto complete field
    setCurrentLocation(responseGeoCode.data.results[0].components);
    setCurrentWeather(res.data.current);
    setNextWeathers(res.data.daily);
    setBackgroundImage(resImage.data.background);
  }

  return (
    <Provider
      value={{
        currentWeather,
        nextWeathers,
        search,
        currLocation,
        backgroundImage,
        fetchWeathers,
        setSearch,
      }}
    >
      {children}
    </Provider>
  );
};

export const useAppContext = () => useContext(context);
