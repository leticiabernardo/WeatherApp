import axios from 'axios';
import 'dotenv/config';
import { Request, Response } from 'express';
import { mapLanguage } from '../helpers/language';
import { transformWeathers } from './transforms/weathers';

export const getWeathers = (req: Request, res: Response) => {
  const { lat, lon, lang } = req.query;
  const params = {
    lat,
    lon,
    appid: process.env.OPENWEATHER_KEY,
    exclude: 'minutely,hourly',
    units: 'metric',
    lang: mapLanguage(lang as string),
  };
  return axios
    .get<app.WeatherOneCallResponse>(
      'https://api.openweathermap.org/data/2.5/onecall',
      { params }
    )
    .then(response => res.json(transformWeathers(response.data)).end())
    .catch((error: Error) => error);
};
