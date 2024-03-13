const passport = require('passport');
const config = require('../config/config');
const { allowOnly } = require('../services/routesHelper');
const { registerVehicle, getAllVehicle } = require("../controllers/vehicles_registration");

module.exports = (app) => {
  // create a new vendor
  app.post(
    '/registervehicle/create',
    registerVehicle
  );
  // select all vendors from the database.
  app.get('/registervehicle/get',
    getAllVehicle);


  /Name Get Vendor by ID  
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
