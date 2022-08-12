import { WeeklySchedule } from '../models/weeklyScheduleModel.js';

const createNewWeekly = (scheduleData) => {
  return WeeklySchedule.create(scheduleData);
};

const findWeeklyByIsoAndUpdate = (data) => {
  return WeeklySchedule.findOneAndUpdate({ isoDate: data.isoDate }, data);
};

const findWeeklyByDate = (date) => {
  return WeeklySchedule.where('startTime')
    .lte(date)
    .select('-__v')
    .sort('startTime')
    .limit(1);
  // return WeeklySchedule.find({ isoDate: isoDate }).exec();
};

const deleteWeeklyByIso = (isoDate) => {
  return WeeklySchedule.findOneAndDelete({ isoDate });
};

const weeklyScheduleHandler = {
  createNewWeekly,
  findWeeklyByDate,
  findWeeklyByIsoAndUpdate,
  deleteWeeklyByIso,
};

export default weeklyScheduleHandler;
