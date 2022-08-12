import { formatISO } from 'date-fns';

// returns a date in ISO 8601 format (e.g. 2022-06-01)
export const formatToISO = (date) => {
  return formatISO(date).slice(0, 10);
};
