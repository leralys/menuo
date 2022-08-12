import axios from '../axios/config';
import { formatToISO } from '../utilities/dateHelpers';
import { ErrorVariantsEnum } from '../utilities/types/enums';

export interface MenuForADayParams {
  selectedDate: Date;
  menuList: string[];
}

export const getMenuForADay = async (ISODate: string) => {
  const params = new URLSearchParams({ date: ISODate });
  const res = await axios.get('/lunch', { params });
  if (res.status === 200) {
    return res.data;
  } else if (res.status === 204) {
    return ErrorVariantsEnum.NO_MENU;
  } else throw new Error('could not fetch menu');
};

export const postMenuForADay = async ({
  selectedDate,
  menuList,
}: MenuForADayParams) => {
  const date = formatToISO(selectedDate);
  const menu = menuList.join(',');
  const res = await axios.post('/lunch', { date, menu });
  if (res.status === 200) {
    return res.data;
  } else throw new Error('could not post menu');
};
