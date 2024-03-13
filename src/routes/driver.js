const passport = require('passport');
const config = require('../config/config');
const { allowOnly } = require('../services/routesHelper');
const { getAllDriver, registerDriver } = require("../controllers/driver");

module.exports = (app) => {
  // create a new vendor
  app.post(
    '/api/registerdriver/create',
    registerDriver
  );
  // select all vendors from the database.
  app.get('/api/registerdriver/get',
    getAllDriver);


  //apiName Get Vendor by ID  
  //  app.get(
  //   '/api/vendors/:id',
  //   getSingleVendor);


  // app.param('id', getSingleVendor);
  // // return information about one specific vendor  using its id
  // app.route("/api/vendors/:id").get(allowOnly(config.accessLevels.admin, getSingleVendor));



  // // fetch all vendors
  // app.get("/api/vendors/fetch", 
  // fetchVendor
  // );
};
