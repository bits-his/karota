
const { superAgent, getAllSuperAgent } = require("../controllers/super_agent");

module.exports = (app) => {
  // create a new superagent
  app.post(
    '/superagent/create',
    superAgent
  );
  // select all superagent from the database.
  app.get('/getallsuperagent/get',
    getAllSuperAgent);




};
