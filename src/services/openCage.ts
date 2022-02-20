import axios from 'axios';
import 'dotenv/config';
import { Request, Response } from 'express';
import { transformGeoCodes } from './transforms/geocode';

export const getGeocode = (req: Request, res: Response) => {
  const location = req.query.search;
  const params = {
    q: location,
    key: process.env.OPENCAGE_KEY,
    language: 'pt_BR',
  };
  return axios
    .get<app.Geocode>('https://api.opencagedata.com/geocode/v1/json', {
      params,
    })
    .then(response => res.json(transformGeoCodes(response.data)).end())
    .catch((error: Error) => error);
};
