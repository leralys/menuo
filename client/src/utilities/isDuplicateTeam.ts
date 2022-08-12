import { ITeamDuration } from '../pages/admin/scheduleWeeklyCreate/ScheduleWeeklyCreate';

export const isDuplicateTeam = (
  teams: string,
  teamsDurArr: ITeamDuration[]
): boolean => {
  const newTeamsArr = teams.split('/');
  let names = '';
  teamsDurArr.forEach((durObj: ITeamDuration, i: number) => {
    if (i === teamsDurArr.length - 1) {
      names = names + durObj.name.split('/');
    } else {
      names = names + durObj.name.split('/') + ',';
    }
  });
  const prevTeamsArr = names.split(',');
  return newTeamsArr.some((team: string) => prevTeamsArr.includes(team));
};
