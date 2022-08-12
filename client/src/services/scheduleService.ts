import axios from '../axios/config';
import { ITeam } from '../utilities/types/apiResponseTypes';
import { ITeamDuration } from '../pages/admin/scheduleWeeklyCreate/ScheduleWeeklyCreate';
import { ErrorVariantsEnum } from '../utilities/types/enums';

export interface WeeklyScheduleParams {
  startTime: Date;
  orderTeams: ITeamDuration[];
}

export const postWeeklySchedule = async ({
  startTime,
  orderTeams,
}: WeeklyScheduleParams) => {
  const res = await axios.post('/schedule', { startTime, orderTeams });
  if (res.status === 200) {
    return res.data;
  } else throw new Error('could not post schedule');
};

export const getWeeklySchedule = async (date: number) => {
  const params = new URLSearchParams({ date: date.toString() });
  const res = await axios.get('/schedule', { params });
  if (res.status === 200) {
    return res.data;
  } else if (res.status === 204) {
    return ErrorVariantsEnum.NO_SCHEDULE;
  } else {
    throw new Error('could not fetch schedule');
  }
};

export const getAllTeams = async () => {
  const res = await axios.get('/teams');
  if (res.status === 200) {
    const arrayOfNames = res.data.data.map((team: ITeam) => team.name);
    return arrayOfNames;
  } else throw new Error('could not fetch teams');
};
