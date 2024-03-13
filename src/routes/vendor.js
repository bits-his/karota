import passport from 'passport';
import config from '../config/config';
import { allowOnly } from '../services/routesHelper';
const { createVendor } = require("../controllers/vendor");

module.exports = (app) => {
  // create a new vendor
  app.post(
    '/api/vendors/create',
    createVendor
  );


};
