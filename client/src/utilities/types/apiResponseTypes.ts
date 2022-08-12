export interface ITeam {
  _id: string;
  name: string;
}

export interface ITeamsResponce {
  status: string;
  data?: ITeam[];
}

export interface IApiSchedule {
  time: string;
  name: string;
  duration: number;
}
