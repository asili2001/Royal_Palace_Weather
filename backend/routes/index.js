import express from 'express';
import { daily } from './weather/daily.js';
import { hourly } from './weather/hourly.js';
import { current } from './weather/current.js';
import { Cache } from '../middleware/cache.middleware.js';
import {reqLimitor} from '../middleware/reqLimitor.middleware.js';
const router = express.Router();

router.get('/daily/lon/:lon/lat/:lat',reqLimitor, Cache, daily);
router.get('/hourly/lon/:lon/lat/:lat',reqLimitor, Cache, hourly);
router.get('/current/lon/:lon/lat/:lat',reqLimitor, Cache, current);

export default router;