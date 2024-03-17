'use strict';

var _require = require("../controllers/super_agents"),
    superAgent = _require.superAgent,
    fetchSuperAgent = _require.fetchSuperAgent;

module.exports = function (app) {
  // create a new superagent
  app.post('/superagent/create', superAgent);

  app.get('/superagent', fetchSuperAgent);
};
//# sourceMappingURL=super_agents.js.map