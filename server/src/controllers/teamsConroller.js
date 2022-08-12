import teamsHandler from '../handlers/teamsHandler.js';

const requestCreateNewTeam = async (req, res) => {
  const { teamName } = req.body;
  try {
    await teamsHandler.createNewTeam({ name: teamName });
    res.status(200).json({
      status: 'Team created successfully',
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'Team creation failed',
    });
  }
};

const requestAllTeams = async (req, res) => {
  try {
    const teams = await teamsHandler.getAllTeams();
    res.status(200).json({
      status: 'success',
      data: teams,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
    });
  }
};

const teamsController = {
  requestCreateNewTeam,
  requestAllTeams,
};

export default teamsController;
