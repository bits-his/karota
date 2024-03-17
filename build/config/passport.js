'use strict';

var _require = require('passport-jwt'),
    ExtractJwt = _require.ExtractJwt;

var JwtStrategy = require('passport-jwt').Strategy;
var models = require('../models');
require('dotenv').config();

var Users = models.User;

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET_KEY;

module.exports = function (passport) {
  passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
    Users.findAll({ where: { id: jwt_payload.id } }).then(function (user) {
      if (user.length) {
        return done(null, user);
      }
      return done(null, false);
    }).catch(function (err) {
      return console.log(err);
    });
  }));
};
//# sourceMappingURL=passport.js.map