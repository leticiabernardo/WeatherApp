import axios from 'axios';
import 'dotenv/config';
import { Request, Response } from 'express';
import { transformGeoCodes } from './transforms/geocode';

export const getGeocode = (req: Request, res: Response) => {
  const { language, search } = req.query;
  const params = {
    q: search,
    key: process.env.OPENCAGE_KEY,
    language,
  };
  return axios
    .get<app.Geocode>('https://api.opencagedata.com/geocode/v1/json', {
      params,
    })
    .then(response => res.json(transformGeoCodes(response.data)).end())
    .catch((error: Error) => error);
};
