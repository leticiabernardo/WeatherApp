import axios from 'axios';
import React, { useContext, useState } from 'react';
import { app } from 'types/types';

export interface Context {
  search: string;
  currLocation: app.Suggestions | undefined;
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
    app.Suggestions | undefined
  >(undefined);
  const [currWeatherForecast, setCurrWeatherForecast] = useState<
    app.CurrentWeatherForecast | undefined
  >(undefined);
  const [nextWeatherForecast, setNextWeatherForecast] = useState<
    app.DailyWeatherForecast[]
  >([]);

  function fetchWeathers(searchValue: string) {
    console.log(searchValue);
  }

  return (
    <Provider
      value={{
        currWeatherForecast,
        nextWeatherForecast,
        search,
        fetchWeathers,
        setSearch,
        currLocation,
      }}
    >
      {children}
    </Provider>
  );
};

export const useAppContext = () => useContext(context);
