import axios from 'axios';
import 'dotenv/config';
import { Request, Response } from 'express';
import { transformBackground } from './transforms/background';

export const getBackground = (req: Request, res: Response) => {
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
          'Ocp-Apim-Subscription-Key': process.env.BING_KEY || '',
        },
      }
    )
    .then(response => res.json(transformBackground(response.data)).end())
    .catch((error: Error) => error);
};
