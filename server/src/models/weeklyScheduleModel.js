import mongoose from 'mongoose';
import { TeamSchema } from './teamModel.js';

export const WeeklyScheduleSchema = new mongoose.Schema({
  startTime: {
    type: Date,
    required: [true, 'must have a start time'],
  },
  orderTeams: [{ type: TeamSchema }],
  isoDate: String,
});

export const WeeklySchedule = mongoose.model(
  'WeeklySchedule',
  WeeklyScheduleSchema
);

export default WeeklySchedule;
