'use strict';

var config = require('../config/config');

var _require = require('../controllers/incident'),
    create_incident = _require.create_incident,
    getIncident = _require.getIncident;

module.exports = function (app) {
    app.post("/create_incident", create_incident);

    app.get("/getIncident", getIncident);
};
//# sourceMappingURL=incedent.js.map