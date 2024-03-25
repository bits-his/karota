
const { superAgent, fetchSuperAgent } = require("../controllers/super_agents");

module.exports = (app) => {
  // create a new superagent
  app.post(
    '/superagent/create',
    superAgent
  );

    app.get('/superagent'
    ,fetchSuperAgent);
}



