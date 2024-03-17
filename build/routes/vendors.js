'use strict';

var _require = require("../controllers/vendors"),
    createVendor = _require.createVendor,
    getVendors = _require.getVendors;

module.exports = function (app) {
  // create a new vendor
  app.post('/vendors/create', createVendor);
  // select all vendors from the database.
  app.get('/vendors', getVendors);
};
//# sourceMappingURL=vendors.js.map