import express from 'express';
import teamsRouter from './teamsRouter.js';
import dailyLunchRouter from './dailyLunchRouter.js';
import weeklyScheduleRouter from './weeklyScheduleRouter.js';

const router = express.Router();

router.use('/teams', teamsRouter);
router.use('/lunch', dailyLunchRouter);
router.use('/schedule', weeklyScheduleRouter);

export default router;
