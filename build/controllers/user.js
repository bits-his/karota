'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var _require = require('sequelize'),
    Op = _require.Op;

var db = require('../models');
var User = db.User;
require('dotenv').config();

// load input validation
var validateRegisterForm = require('../validation/register');
var validateLoginForm = require('../validation/login');

// create user
module.exports.create = function (req, res) {
  var _validateRegisterForm = validateRegisterForm(req.body),
      errors = _validateRegisterForm.errors,
      isValid = _validateRegisterForm.isValid;

  var _req$body = req.body,
      name = _req$body.name,
      username = _req$body.username,
      account_type = _req$body.account_type,
      email = _req$body.email,
      phone = _req$body.phone,
      password = _req$body.password,
      status = _req$body.status,
      role = _req$body.role;

  // check validation

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findAll({ where: { email: email } }).then(function (user) {
    if (user.length) {
      return res.status(400).json({ email: 'Email already exists!' });
    } else {
      var newUser = {
        name: name,
        username: username,
        account_type: account_type,
        email: email,
        phone: phone,
        password: password,
        status: status,
        role: role
      };
      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(newUser.password, salt, function (err, hash) {
          if (err) throw err;
          newUser.password = hash;
          User.create(newUser).then(function (user) {
            res.json({ user: user });
          }).catch(function (err) {
            res.status(500).json({ err: err });
          });
        });
      });
    }
  });
};

module.exports.login = function (req, res) {
  var _validateLoginForm = validateLoginForm(req.body),
      errors = _validateLoginForm.errors,
      isValid = _validateLoginForm.isValid;

  // check validation


  if (!isValid) {
    return res.status(400).json(errors);
  }

  var _req$body2 = req.body,
      username = _req$body2.username,
      password = _req$body2.password;


  User.findAll({
    where: _defineProperty({}, Op.or, [{ email: username }, { phone: username }])
  }).then(function (user) {

    //check for user
    if (!user.length) {
      errors.email = 'User not found!';
      return res.status(404).json(errors);
    }

    var originalPassword = user[0].dataValues.password;

    //check for password
    bcrypt.compare(password, originalPassword).then(function (isMatch) {
      if (isMatch) {
        // user matched
        console.log('matched!');
        var _user$0$dataValues = user[0].dataValues,
            id = _user$0$dataValues.id,
            _username = _user$0$dataValues.username;

        var payload = { id: id, username: _username }; //jwt payload
        // console.log(payload)

        jwt.sign(payload, process.env.JWT_SECRET_KEY, {
          expiresIn: 3600
        }, function (err, token) {
          res.json({
            success: true,
            token: 'Bearer ' + token,
            role: user[0].dataValues.role
          });
        });
      } else {
        errors.password = 'Password not correct';
        return res.status(400).json(errors);
      }
    }).catch(function (err) {
      return console.log(err);
    });
  }).catch(function (err) {
    return res.status(500).json({ err: err });
  });
};

// fetch all users
module.exports.findAllUsers = function (req, res) {
  User.findAll().then(function (user) {
    res.json({ user: user });
  }).catch(function (err) {
    return res.status(500).json({ err: err });
  });
};

// fetch user by userId
module.exports.findById = function (req, res) {
  var id = req.params.userId;

  User.findAll({ where: { id: id } }).then(function (user) {
    if (!user.length) {
      return res.json({ msg: 'user not found' });
    }
    res.json({ user: user });
  }).catch(function (err) {
    return res.status(500).json({ err: err });
  });
};

// update a user's info
module.exports.update = function (req, res) {
  var _req$body3 = req.body,
      firstname = _req$body3.firstname,
      lastname = _req$body3.lastname,
      HospitalId = _req$body3.HospitalId,
      role = _req$body3.role,
      image = _req$body3.image;

  var id = req.params.userId;

  User.update({
    firstname: firstname,
    lastname: lastname,
    role: role
  }, { where: { id: id } }).then(function (user) {
    return res.status(200).json({ user: user });
  }).catch(function (err) {
    return res.status(500).json({ err: err });
  });
};

// delete a user
module.exports.deleteUser = function (req, res) {
  var id = req.params.userId;

  User.destroy({ where: { id: id } }).then(function () {
    return res.status.json({ msg: 'User has been deleted successfully!' });
  }).catch(function (err) {
    return res.status(500).json({ msg: 'Failed to delete!' });
  });
};

module.exports.verifyToken = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var authToken, token, decoded, id, user, profile;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            authToken = req.headers["authorization"];

            if (!(!authToken || !authToken.startsWith("Bearer "))) {
              _context.next = 3;
              break;
            }

            return _context.abrupt('return', res.status(401).json({
              success: false,
              msg: "Invalid or missing token"
            }));

          case 3:
            token = authToken.slice(7); // Remove "Bearer " from the token string

            _context.prev = 4;
            decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
            id = decoded.id;
            _context.next = 9;
            return db.User.findOne({
              where: {
                id: id
              }
            });

          case 9:
            user = _context.sent;

            if (user) {
              _context.next = 12;
              break;
            }

            return _context.abrupt('return', res.status(404).json({
              success: false,
              msg: "User not found"
            }));

          case 12:
            _context.next = 14;
            return db.sequelize.query('SELECT * FROM ' + user.role + 's WHERE user_id=' + user.id);

          case 14:
            profile = _context.sent;


            res.json({
              success: true,
              user: user,
              profile: profile[0]
            });
            _context.next = 22;
            break;

          case 18:
            _context.prev = 18;
            _context.t0 = _context['catch'](4);

            console.error(_context.t0);
            return _context.abrupt('return', res.status(401).json({
              success: false,
              msg: "Failed to authenticate token"
            }));

          case 22:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[4, 18]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
//# sourceMappingURL=user.js.map