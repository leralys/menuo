import mongoose from 'mongoose';
import { TeamSchema } from './teamModel.js';

const DailyLunchSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: [true, 'must have a date'],
    unique: true,
  },
  menu: {
    type: [String],
  },
  // schedule data for the specific day
  startTime: Date,
  orderTeams: [{ type: TeamSchema }],
});

export const DailyLunch = mongoose.model('DailyLunch', DailyLunchSchema);

export default DailyLunch;
