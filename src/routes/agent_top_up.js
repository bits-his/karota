const { createTopUp, fetchTopUp } = require("../controllers/agent_top_up");

module.exports = (app) => {
  // create a new top up
  app.post(
    '/agent/top-up/create',
    createTopUp
  );
  // select all agent top-up-history from the database.
  app.get('/agent/top-up',
    fetchTopUp);

  // select agent top up history for a user
  app.get('/agent/top-up/:id',
  fetchTopUp)
};
