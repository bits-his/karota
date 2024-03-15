const { createAgent, fetchAgent } = require("../controllers/agents");

module.exports = (app) => {
  // create a new agent
  app.post(
    '/agens/create',
    createAgent
  );
  // select all agent from the database.
  app.get('/agents',
    fetchAgent);
};
