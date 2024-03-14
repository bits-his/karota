
const { createVendor, getAllVendors } = require("../controllers/vendor");

module.exports = (app) => {
  // create a new vendor
  app.post(
    '/vendors/create',
    createVendor
  );
  // select all vendors from the database.
  app.get('/vendors',
    getAllVendors);


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
