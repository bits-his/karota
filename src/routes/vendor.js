
const { createVendor, getVendors } = require("../controllers/vendor");

module.exports = (app) => {
  // create a new vendor
  app.post(
    '/vendors/create',
    createVendor
  );
  // select all vendors from the database.
  app.get('/vendors',
    getVendors);


};
