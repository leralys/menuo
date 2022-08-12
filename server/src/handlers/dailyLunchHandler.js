import { DailyLunch } from '../models/dailyLunchModel.js';

const createNewLunch = (dailyLunchData) => {
  return DailyLunch.create(dailyLunchData);
};

const updateLunch = (data) => {
  return DailyLunch.findOneAndUpdate({ date: data.date }, data);
};

const findLunchByDate = (date) => {
  return DailyLunch.findOne({ date }).exec();
};

const deleteLunch = (date) => {
  return DailyLunch.findOneAndDelete({ date });
};

const dailyLunchHandler = {
  updateLunch,
  createNewLunch,
  findLunchByDate,
  deleteLunch,
};

export default dailyLunchHandler;
