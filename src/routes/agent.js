const passport = require ('passport');
const config = require ('../config/config');
const { allowOnly } = require ('../services/routesHelper');
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
