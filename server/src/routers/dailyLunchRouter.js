import express from 'express';
import dailyLunchController from '../controllers/dailyLunchController.js';

const dailyLunchRouter = express.Router();

// pass date in ISO format as query params for GET
dailyLunchRouter.get('/', dailyLunchController.requestFindLunchByDate);
dailyLunchRouter.post('/', dailyLunchController.requestAddOrUpdateLunch);

export default dailyLunchRouter;
