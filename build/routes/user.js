"use strict";

var passport = require('passport');
var config = require('../config/config');
var _require = require('../services/routesHelper'),
  allowOnly = _require.allowOnly;
var _require2 = require('../controllers/user'),
  create = _require2.create,
  login = _require2.login,
  findAllUsers = _require2.findAllUsers,
  findById = _require2.findById,
  update = _require2.update,
  deleteUser = _require2.deleteUser,
  verifyToken = _require2.verifyToken;
module.exports = function (app) {
  // create a new user
  app.post('/users/create', create);

  // user login
  app.post('/users/login', login);

  //retrieve all users
  app.get('/users', passport.authenticate('jwt', {
    session: false
  }), allowOnly(config.accessLevels.admin, findAllUsers));

  // retrieve user by id
  app.get('/users/:userId', passport.authenticate('jwt', {
    session: false
  }), findById);

  // update a user with id
  app.put('/users/:userId', passport.authenticate('jwt', {
    session: false
  }), allowOnly(config.accessLevels.user, update));

  // delete a user
  app["delete"]('/users/:userId', passport.authenticate('jwt', {
    session: false
  }), allowOnly(config.accessLevels.admin, deleteUser));
  app.get("/verify-token", passport.authenticate("jwt", {
    session: false
  }), verifyToken);
};
//# sourceMappingURL=user.js.map