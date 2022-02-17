import axios from 'axios';
import { Request, Response } from 'express';
import { app } from 'types/types';

// TODO: move the apikey to env file
const APIKEY = '<apikey>';
const APIKEYOPENCAGE = '<apikey>';
const BINGAPIKEY = '<apikey>';

export const getWeatherOneCall = (req: Request, res: Response) => {
  const { lat, lon } = req.query;
  const params = {
    lat,
    lon,
    appid: APIKEY,
    exclude: 'minutely,hourly',
    units: 'metric',
    lang: 'pt_br',
  };
  return axios
    .get<app.WeatherOneCallResponse>(
      'https://api.openweathermap.org/data/2.5/onecall',
      { params }
    )
    .then(response => res.json(response.data).end())
    .catch((error: Error) => error);
};

export const getGeocode = (req: Request, res: Response) => {
  const location = req.query.search;
  const params = {
    q: location,
    key: APIKEYOPENCAGE,
    language: 'pt_BR',
  };
  return axios
    .get<app.Geocode>('https://api.opencagedata.com/geocode/v1/json', {
      params,
    })
    .then(response => res.json(response.data).end())
    .catch((error: Error) => error);
};

export const getBingBackgroundImage = (req: Request, res: Response) => {
  const place = req.query.search;
  const params = {
    q: place,
    size: 'wallpaper',
  };
  return axios
    .get<app.BingBackgroundImage>(
      'https://api.bing.microsoft.com/v7.0/images/search',
      {
        params,
        headers: {
          'Ocp-Apim-Subscription-Key': BINGAPIKEY,
        },
      }
    )
    .then(response => res.json(response.data).end())
    .catch((error: Error) => error);
};
