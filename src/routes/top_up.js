const { createTopUp, fetchTopUp, newTopUp, fetchBalance } = require("../controllers/top_up");

module.exports = (app) => {
  app.post(
    '/top-up/create',
    createTopUp
  );
  app.post(
    '/top-up/history',
    fetchTopUp
  );
  app.get(
    '/balance',
    fetchBalance

  )
  app.get('/super_agent/top-up',
    fetchTopUp);

  // select top up history for a user
  app.get('/super_agent/top-up/:id',
  fetchTopUp);

  app.get('/daily_top_up',
    newTopUp)
};
