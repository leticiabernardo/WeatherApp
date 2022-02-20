import axios from 'axios';
import 'dotenv/config';
import { Request, Response } from 'express';

export const getWeathers = (req: Request, res: Response) => {
  const { lat, lon } = req.query;
  const params = {
    lat,
    lon,
    appid: process.env.OPENWEATHER_KEY,
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
