import cron from 'node-cron';
import { formatToISO } from '../utilities/dateFormat.js';
import { nextSunday, previousSunday } from 'date-fns';
import weeklyScheduleHandler from '../handlers/weeklyScheduleHandler.js';
import rotate from '../utilities/rotateArr.js';

// '0 17 * * 4'
// “At 17:00 on Thursday.”

// pass 'prev' or 'next'
const calcSunday = (str) => {
  const date = new Date();
  let sunday;
  if (str === 'prev') {
    sunday = previousSunday(date);
  } else if (str === 'next') {
    sunday = nextSunday(date);
  } else return;
  const ISO = formatToISO(sunday);
  const concat = ISO + 'T00:00:00.000+00:00';
  const res = new Date(concat);
  return res;
};

const cronTask = cron.schedule('0 17 * * 4', async () => {
  const startWeek = calcSunday('prev');
  const schedule = await weeklyScheduleHandler.findWeeklySchedule(startWeek);
  if (!schedule) return;
  const newOrder = rotate(schedule.orderTeams, 1);
  const nextWeek = calcSunday('next');
  const weeklyScheduleData = {
    timeSlots: schedule.timeSlots,
    orderTeams: newOrder,
    startWeek: nextWeek,
  };

  const isUpdated = await weeklyScheduleHandler.updateWeeklySchedule(
    weeklyScheduleData
  );
  if (!isUpdated) {
    await weeklyScheduleHandler.createNewWeekly(weeklyScheduleData);
  }
  const newSchedule = await weeklyScheduleHandler.findWeeklySchedule(nextWeek);
  // print to the console
  // console.log(newSchedule);
  // console.log('scheduler run');
});

cronTask.start();

export default cronTask;
