import passport from 'passport';
import config from '../config/config';
import { allowOnly } from '../services/routesHelper';
const { createAgent, getAllAgent } = require("../controllers/agent");

module.exports = (app) => {
  // create a new agent
  app.post(
    '/api/createagent/create',
    createAgent
  );
  // select all agent from the database.
  app.get('/api/getallagent/get', 
  getAllAgent);

   


};
