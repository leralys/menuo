import {
  format,
  getHours,
  getMinutes,
  isFriday,
  isSaturday,
  isSunday,
  isToday,
  isTomorrow,
} from 'date-fns';
import formatISO from 'date-fns/formatISO';

export const formatDate = (date: Date) => {
  return format(date, 'dd/MM');
};

// returns a date in ISO 8601 format (e.g. 2022-06-01)
export const formatToISO = (date: Date) => {
  return formatISO(date).slice(0, 10);
};

export const getTime = (date: Date): string => {
  const hours = getHours(date);
  let minutes = getMinutes(date).toString();
  if (minutes.length < 2) {
    minutes = '0' + minutes;
  }
  return `${hours}:${minutes}`;
};

export const formatDateHomePage = (date: Date): string => {
  if (isToday(date)) {
    return `Today, ${format(date, 'EEEE MMM d')}`;
  } else if (isTomorrow(date)) {
    return `Tomorrow, ${format(date, 'EEEE MMM d')}`;
  } else if (isSunday(date)) {
    return `Sunday, ${format(date, 'EEEE MMM d')}`;
  } else {
    return `${format(date, 'EEEE MMM d')}`;
  }
};

export const isWeekend = (date: Date): boolean => {
  if (isFriday(date) || isSaturday(date)) {
    return true;
  } else return false;
};
