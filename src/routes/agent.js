const { createAgent, fetchAgent } = require("../controllers/agent");

module.exports = (app) => {
  // create a new agent
  app.post(
    '/createagent/create',
    createAgent
  );
  // select all agent from the database.
  app.get('/agent',
    fetchAgent);
};
