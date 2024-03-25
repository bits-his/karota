const { createTopUp, fetchTopUp } = require("../controllers/vehicle_top_up");

module.exports = (app) => {
  // create a new agent
  app.post(
    '/top-up/createssss',
    createTopUp
  );
  // select all top-up-history from the database.
  app.get('/top-up',
    fetchTopUp);

  // select top up history for a user
  app.get('/top-up/:id',
  fetchTopUp)
};
