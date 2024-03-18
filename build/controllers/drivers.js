"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
// const bcrypt = require ('bcryptjs';)
var db = require('../models');
module.exports.registerDriver = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, _req$body$query_type, query_type, _req$body$driver_id, driver_id, _req$body$name, name, _req$body$nin, nin, _req$body$phone, phone, _req$body$email, email, _req$body$address, address, _req$body$dob, dob, _req$body$state, state, _req$body$lga, lga, _req$body$next_of_kin, next_of_kin, _req$body$vehicle_id, vehicle_id, resp;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, _req$body$query_type = _req$body.query_type, query_type = _req$body$query_type === void 0 ? 'insert' : _req$body$query_type, _req$body$driver_id = _req$body.driver_id, driver_id = _req$body$driver_id === void 0 ? null : _req$body$driver_id, _req$body$name = _req$body.name, name = _req$body$name === void 0 ? null : _req$body$name, _req$body$nin = _req$body.nin, nin = _req$body$nin === void 0 ? null : _req$body$nin, _req$body$phone = _req$body.phone, phone = _req$body$phone === void 0 ? null : _req$body$phone, _req$body$email = _req$body.email, email = _req$body$email === void 0 ? null : _req$body$email, _req$body$address = _req$body.address, address = _req$body$address === void 0 ? null : _req$body$address, _req$body$dob = _req$body.dob, dob = _req$body$dob === void 0 ? null : _req$body$dob, _req$body$state = _req$body.state, state = _req$body$state === void 0 ? null : _req$body$state, _req$body$lga = _req$body.lga, lga = _req$body$lga === void 0 ? null : _req$body$lga, _req$body$next_of_kin = _req$body.next_of_kin, next_of_kin = _req$body$next_of_kin === void 0 ? null : _req$body$next_of_kin, _req$body$vehicle_id = _req$body.vehicle_id, vehicle_id = _req$body$vehicle_id === void 0 ? null : _req$body$vehicle_id;
          _context.prev = 1;
          _context.next = 4;
          return db.sequelize.query("CALL drivers(:query_type, \n        :driver_id, \n        :name,\n            :nin,\n            :phone,\n            :email,\n            :address,\n            :dob,\n            :state,\n            :lga,\n           \t:next_of_kin,\n            :vehicle_id)", {
            replacements: {
              query_type: query_type,
              driver_id: driver_id,
              name: name,
              nin: nin,
              phone: phone,
              email: email,
              address: address,
              dob: dob,
              state: state,
              lga: lga,
              next_of_kin: next_of_kin,
              vehicle_id: vehicle_id
            }
          });
        case 4:
          resp = _context.sent;
          res.status(200).json({
            success: true,
            results: resp
          });
          _context.next = 12;
          break;
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          console.error(_context.t0);
          res.status(500).json({
            success: false,
            error: 'Failed to register vehicle'
          });
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 8]]);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

//  @ Get all vendors
//  @route GET /vendors 
module.exports.getAllDriver = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$query, _req$query$query_type, query_type, _req$query$driver_id, driver_id, _req$query$name, name, _req$query$nin, nin, _req$query$phone, phone, _req$query$email, email, _req$query$address, address, _req$query$dob, dob, _req$query$state, state, _req$query$lga, lga, _req$query$next_of_ki, next_of_kin, _req$query$vehicle_id, vehicle_id, resp;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$query = req.query, _req$query$query_type = _req$query.query_type, query_type = _req$query$query_type === void 0 ? 'select' : _req$query$query_type, _req$query$driver_id = _req$query.driver_id, driver_id = _req$query$driver_id === void 0 ? null : _req$query$driver_id, _req$query$name = _req$query.name, name = _req$query$name === void 0 ? null : _req$query$name, _req$query$nin = _req$query.nin, nin = _req$query$nin === void 0 ? null : _req$query$nin, _req$query$phone = _req$query.phone, phone = _req$query$phone === void 0 ? null : _req$query$phone, _req$query$email = _req$query.email, email = _req$query$email === void 0 ? null : _req$query$email, _req$query$address = _req$query.address, address = _req$query$address === void 0 ? null : _req$query$address, _req$query$dob = _req$query.dob, dob = _req$query$dob === void 0 ? null : _req$query$dob, _req$query$state = _req$query.state, state = _req$query$state === void 0 ? null : _req$query$state, _req$query$lga = _req$query.lga, lga = _req$query$lga === void 0 ? null : _req$query$lga, _req$query$next_of_ki = _req$query.next_of_kin, next_of_kin = _req$query$next_of_ki === void 0 ? null : _req$query$next_of_ki, _req$query$vehicle_id = _req$query.vehicle_id, vehicle_id = _req$query$vehicle_id === void 0 ? null : _req$query$vehicle_id;
          _context2.prev = 1;
          _context2.next = 4;
          return db.sequelize.query("CALL drivers(:query_type, \n        :driver_id, \n        :name,\n            :nin,\n            :phone,\n            :email,\n            :address,\n            :dob,\n            :state,\n            :lga,\n           \t:next_of_kin,\n            :vehicle_id)", {
            replacements: {
              query_type: query_type,
              driver_id: driver_id,
              name: name,
              nin: nin,
              phone: phone,
              email: email,
              address: address,
              dob: dob,
              state: state,
              lga: lga,
              next_of_kin: next_of_kin,
              vehicle_id: vehicle_id
            }
          });
        case 4:
          resp = _context2.sent;
          res.status(200).json({
            success: true,
            results: resp
          });
          _context2.next = 12;
          break;
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](1);
          console.error(_context2.t0);
          res.status(500).json({
            success: false,
            error: 'Failed to fetch vehicle'
          });
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

// };
//# sourceMappingURL=drivers.js.map