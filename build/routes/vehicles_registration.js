"use strict";

var passport = require('passport');
var config = require('../config/config');
var _require = require('../services/routesHelper'),
  allowOnly = _require.allowOnly;
var _require2 = require("../controllers/vehicles_registration"),
  registerVehicle = _require2.registerVehicle,
  getRegVehicles = _require2.getRegVehicles;
module.exports = function (app) {
  // create a new vendor
  app.post('/vehicles/registration', registerVehicle);
  // select all vendors from the database.
  app.get('/vehicles', getRegVehicles);
};
//# sourceMappingURL=vehicles_registration.js.map