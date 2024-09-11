
const { createVendor, getVendors, createUserAdmin, getAllUsers } = require("../controllers/vendors");

module.exports = (app) => {
  // create a new vendor
  app.post(
    '/vendors/create',
    createVendor
  );
  app.post(
    '/admin-user/create',
    createUserAdmin
  );

  app.get('/get-all-users',
    getAllUsers
  );

  // select all vendors from the database.
  app.get('/vendors',
    getVendors
  );
};
