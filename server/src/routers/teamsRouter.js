import express from 'express';
import teamsController from '../controllers/teamsConroller.js';

const teamsRouter = express.Router();

teamsRouter.get('/', teamsController.requestAllTeams);
teamsRouter.post('/new', teamsController.requestCreateNewTeam);

export default teamsRouter;
