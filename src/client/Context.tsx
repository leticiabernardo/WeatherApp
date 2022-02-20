import axios from 'axios';
import React, { useContext, useState } from 'react';
import { getRandomLargestImage } from '@/helpers/image-analizer';
import { getWeatherLocation } from '@/helpers/weather';

export interface Context {
  search: string;
  currLocation: app.GeoCodeResultComponents | undefined;
  backgroundImage: string | undefined;
  setSearch: (val: string) => void;
  currWeatherForecast?: app.CurrentWeatherForecast;
  nextWeatherForecast: app.DailyWeatherForecast[];
  fetchWeathers: (search: string) => void;
}

const context = React.createContext({} as Context);

const { Provider } = context;

export const ContextWrapper = ({ children }: { children: any }) => {
  const [search, setSearch] = useState('');
  const [currLocation, setCurrentLocation] = useState<
    app.GeoCodeResultComponents | undefined
  >(undefined);
  const [currWeatherForecast, setCurrWeatherForecast] = useState<
    app.CurrentWeatherForecast | undefined
  >(undefined);
  const [backgroundImage, setBackgroundImage] = useState<string | undefined>(
    undefined
  );
  const [nextWeatherForecast, setNextWeatherForecast] = useState<
    app.DailyWeatherForecast[]
  >([]);

  async function fetchWeathers(searchValue: string) {
    const responseGeoCode = await axios.get<app.Geocode>('/api/geocode', {
      params: {
        search: searchValue,
      },
    });

    const res = await axios.get<app.WeatherOneCallResponse>('/api/weathers', {
      params: {
        lat: responseGeoCode.data.results[0].geometry.lat,
        lon: responseGeoCode.data.results[0].geometry.lng,
      },
    });
    const resImage = await axios.get<app.BingBackgroundImage>(
      '/api/background',
      {
        params: {
          search: getWeatherLocation(
            responseGeoCode.data.results[0].components
          ),
        },
      }
    );

    // TODO: display geocode results with an auto complete field
    setCurrentLocation(responseGeoCode.data.results[0].components);
    setCurrWeatherForecast(res.data.current);
    setNextWeatherForecast(res.data.daily.splice(0, 7));
    setBackgroundImage(getRandomLargestImage(resImage.data.value));
  }

  return (
    <Provider
      value={{
        currWeatherForecast,
        nextWeatherForecast,
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
