import express from 'express';
import weeklyScheduleController from '../controllers/weeklyScheduleController.js';

const weeklyScheduleRouter = express.Router();

// pass date in ISO format as query params for GET
weeklyScheduleRouter.get(
  '/',
  weeklyScheduleController.requestFindWeeklySchedule
);
weeklyScheduleRouter.post(
  '/',
  weeklyScheduleController.requestAddOrUpdateSchedule
);

export default weeklyScheduleRouter;
