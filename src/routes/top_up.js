const { createTopUp, fetchTopUp } = require("../controllers/top_up");

module.exports = (app) => {
  app.post(
    '/top-up/create',
    createTopUp
  );
  app.get('/super_agent/top-up',
    fetchTopUp);

  // select top up history for a user
  app.get('/super_agent/top-up/:id',
  fetchTopUp)
};
