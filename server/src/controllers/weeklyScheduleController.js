import weeklyScheduleHandler from '../handlers/weeklyScheduleHandler.js';
import { formatToISO } from '../utilities/dateFormat.js';
import { prepareSchedule } from '../utilities/prepareSchedule.js';

const requestAddOrUpdateSchedule = async (req, res) => {
  const isoDate = formatToISO(new Date(req.body.startTime));
  const weeklyScheduleData = {
    startTime: req.body.startTime,
    orderTeams: req.body.orderTeams,
    isoDate,
  };
  try {
    const isUpdated = await weeklyScheduleHandler.findWeeklyByIsoAndUpdate(
      weeklyScheduleData
    );
    if (!isUpdated) {
      await weeklyScheduleHandler.createNewWeekly(weeklyScheduleData);
    }
    res.status(200).json({
      status: 'success',
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
    });
  }
};

const requestFindWeeklySchedule = async (req, res) => {
  const date = new Date(Number(req.query.date));
  try {
    const data = await weeklyScheduleHandler.findWeeklyByDate(date);
    if (data.length > 0) {
      const schedule = prepareSchedule(data[0]);
      res.status(200).json({
        status: 'success',
        data: schedule,
      });
    } else {
      res.status(204).json({
        status: 'success',
        msg: 'no data',
      });
    }
  } catch (err) {
    res.status(400).json({
      status: 'fail',
    });
  }
};

const weeklyScheduleController = {
  requestAddOrUpdateSchedule,
  requestFindWeeklySchedule,
};

export default weeklyScheduleController;
