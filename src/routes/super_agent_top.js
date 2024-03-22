const { createTopUp, fetchTopUp } = require("../controllers/super_agent_top");

module.exports = (app) => {
  app.post(
    '/super_agent/top-up/create',
    createTopUp
  );
  app.get('/super_agent/top-up',
    fetchTopUp);

  // select top up history for a user
  app.get('/super_agent/top-up/:id',
  fetchTopUp)
};
