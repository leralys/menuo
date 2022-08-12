import { Team } from '../models/teamModel.js';

const getAllTeams = () => {
  return Team.find().select('-__v').sort({ name: 'asc' });
};

const createNewTeam = (teamData) => {
  return Team.create(teamData);
};

const teamsHandler = {
  getAllTeams,
  createNewTeam,
};

export default teamsHandler;
