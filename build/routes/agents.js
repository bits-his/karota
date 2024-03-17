"use strict";

var _require = require("../controllers/agents"),
  createAgent = _require.createAgent,
  fetchAgent = _require.fetchAgent;
module.exports = function (app) {
  // create a new agent
  app.post('/agents/create', createAgent);
  // select all agent from the database.
  app.get('/agents', fetchAgent);
};
//# sourceMappingURL=agents.js.map