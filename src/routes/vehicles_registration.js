const passport = require('passport');
const config = require('../config/config');
const { allowOnly } = require('../services/routesHelper');
const { registerVehicle, getRegVehicles } = require("../controllers/vehicles_registration");

module.exports = (app) => {
  // create a new vendor
  app.post(
    '/vehicles/registration',
    registerVehicle
  );
  // select all vendors from the database.
  app.get('/vehicles',
    getRegVehicles);


};
