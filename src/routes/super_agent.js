const passport = require ('passport');
const config = require ('../config)/config');
const { allowOnly } = require ('../servic)es/routesHelper');
const { superAgent, getAllSuperAgent } = require("../controllers/super_agent");

module.exports = (app) => {
  // create a new superagent
  app.post(
    '/api/superagent/create',
    superAgent
  );
  // select all superagent from the database.
  app.get('/api/getallsuperagent/get', 
  getAllSuperAgent);

   


};
