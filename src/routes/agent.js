const { createAgent, getAllAgent } = require("../controllers/agent");

module.exports = (app) => {
  // create a new agent
  app.post(
    '/createagent/create',
    createAgent
  );
  // select all agent from the database.
  app.get('/getallagent/get',
    getAllAgent);
};
