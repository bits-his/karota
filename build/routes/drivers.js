'use strict';

var passport = require('passport');
var config = require('../config/config');

var _require = require('../services/routesHelper'),
    allowOnly = _require.allowOnly;

var _require2 = require("../controllers/drivers"),
    getAllDriver = _require2.getAllDriver,
    registerDriver = _require2.registerDriver;

module.exports = function (app) {
  // create a new vendor
  app.post('/registerdriver', registerDriver);
  // select all drivers from the database.
  app.get('/driver', getAllDriver);

  // /Name Get Vendor by ID  
  //  app.get(
  //   '/vendors/:id',
  //   getSingleVendor);


  // app.param('id', getSingleVendor);
  // // return information about one specific vendor  using its id
  // app.route("/vendors/:id").get(allowOnly(config.accessLevels.admin, getSingleVendor));


  // // fetch all vendors
  // app.get("/vendors/fetch", 
  // fetchVendor
  // );
};
//# sourceMappingURL=drivers.js.map