import axios from 'axios';
import { Request, Response } from 'express';
import { app } from 'types/types';

// TODO: move the apikey to env file
const APIKEY = '<APIKEY>';

export const getSuggestions = (req: Request, res: Response) => {
  const location = req.query.search;
  const params = {
    q: location,
    limit: 100,
    appid: APIKEY,
  };
  return axios
    .get<app.Suggestions[]>('http://api.openweathermap.org/geo/1.0/direct', {
      params,
    })
    .then(response => res.json(response.data).end())
    .catch((error: Error) => error);
};
