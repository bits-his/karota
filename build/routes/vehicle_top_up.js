"use strict";

var _require = require("../controllers/vehicle_top_up"),
  createTopUp = _require.createTopUp,
  fetchTopUp = _require.fetchTopUp;
module.exports = function (app) {
  // create a new agent
  app.post('/top-up/create', createTopUp);
  // select all top-up-history from the database.
  app.get('/top-up', fetchTopUp);

  // select top up history for a user
  app.get('/top-up/:id', fetchTopUp);
};
//# sourceMappingURL=vehicle_top_up.js.map