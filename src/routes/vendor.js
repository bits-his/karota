const passport = require('passport');
const config = require('../config/config');
const { allowOnly } = require('../services/routesHelper');
const { createVendor, getAllVendors, getSingleVendor } = require("../controllers/vendor");

module.exports = (app) => {
  // create a new vendor
  app.post(
    '/vendors/create',
    createVendor
  );
  // select all vendors from the database.
  app.get('/vendors/get',
    getAllVendors);


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
