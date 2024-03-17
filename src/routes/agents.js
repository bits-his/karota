const { createAgent, fetchAgent } = require("../controllers/agents");

module.exports = (app) => {
  // create a new agent
  app.post(
    '/agents/create',
    createAgent
  );
  // select all agent from the database.
  app.get('/agents',
    fetchAgent);
};
