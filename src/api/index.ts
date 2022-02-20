/* eslint-disable import/no-import-module-exports,@typescript-eslint/no-misused-promises */
import express from 'express';
import { getWeathers } from '../services/openWeather';
import { getGeocode } from '../services/openCage';
import { getBackground } from '../services/bing';

const router = express.Router();

router.use('/weathers', getWeathers);
router.use('/geocode', getGeocode);
router.use('/background', getBackground);

export default router;
