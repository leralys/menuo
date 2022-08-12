import { addMinutes, getHours, getMinutes } from 'date-fns';

export const getTime = (date) => {
  let hours = getHours(date);
  let minutes = getMinutes(date).toString();
  if (minutes.length < 2) {
    minutes = '0' + minutes;
  }
  return `${hours + 3}:${minutes}`;
};

const prepareTimes = (scheduleArr) => {
  return scheduleArr.map((item) => ({
    time: getTime(item.time),
    name: item.name,
    duration: item.duration,
  }));
};

export const prepareSchedule = (data) => {
  let scheduleArr = [];
  let newDate;
  data.orderTeams.forEach((item, index) => {
    if (index < 1) {
      newDate = data.startTime;
    } else {
      newDate = addMinutes(
        scheduleArr[index - 1].time,
        data.orderTeams[index - 1].duration
      );
    }
    scheduleArr.push({
      name: item.name,
      time: newDate,
      duration: item.duration,
    });
  });
  return prepareTimes(scheduleArr);
};
