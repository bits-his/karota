"use strict";

var _require = require('../controllers/vehicle_owners'),
  saveVehicleOwners = _require.saveVehicleOwners,
  getVehicleOwners = _require.getVehicleOwners;
module.exports = function (app) {
  // create a new vehicle-owner
  app.post('/vehicle-owners/create', saveVehicleOwners);
  // select all vehicle-owners from the database.
  app.get('/vehicle-owners', getVehicleOwners);
};
//# sourceMappingURL=vehicle_owners.js.map