"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
// const bcrypt from 'bcryptjs';
var db = require('../models');
module.exports.registerVehicle = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, _req$body$query_type, query_type, _req$body$id, id, _req$body$owner_id, owner_id, _req$body$lg_reg_no, lg_reg_no, _req$body$engine_no, engine_no, _req$body$chasis_no, chasis_no, _req$body$plate_no, plate_no, _req$body$manufacture, manufacturer, _req$body$manufacturi, manufacturing_date, _req$body$purchased_d, purchased_date, _req$body$state_regis, state_registered, _req$body$registered_, registered_lg, resp;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, _req$body$query_type = _req$body.query_type, query_type = _req$body$query_type === void 0 ? 'insert' : _req$body$query_type, _req$body$id = _req$body.id, id = _req$body$id === void 0 ? null : _req$body$id, _req$body$owner_id = _req$body.owner_id, owner_id = _req$body$owner_id === void 0 ? null : _req$body$owner_id, _req$body$lg_reg_no = _req$body.lg_reg_no, lg_reg_no = _req$body$lg_reg_no === void 0 ? null : _req$body$lg_reg_no, _req$body$engine_no = _req$body.engine_no, engine_no = _req$body$engine_no === void 0 ? null : _req$body$engine_no, _req$body$chasis_no = _req$body.chasis_no, chasis_no = _req$body$chasis_no === void 0 ? null : _req$body$chasis_no, _req$body$plate_no = _req$body.plate_no, plate_no = _req$body$plate_no === void 0 ? null : _req$body$plate_no, _req$body$manufacture = _req$body.manufacturer, manufacturer = _req$body$manufacture === void 0 ? null : _req$body$manufacture, _req$body$manufacturi = _req$body.manufacturing_date, manufacturing_date = _req$body$manufacturi === void 0 ? null : _req$body$manufacturi, _req$body$purchased_d = _req$body.purchased_date, purchased_date = _req$body$purchased_d === void 0 ? null : _req$body$purchased_d, _req$body$state_regis = _req$body.state_registered, state_registered = _req$body$state_regis === void 0 ? null : _req$body$state_regis, _req$body$registered_ = _req$body.registered_lg, registered_lg = _req$body$registered_ === void 0 ? null : _req$body$registered_;
          _context.prev = 1;
          _context.next = 4;
          return db.sequelize.query("CALL vehicles(\n        :query_type,  \n        :id, \n       :owner_id, \n       :lg_reg_no,\n        :engine_no, \n        :chasis_no,\n       :plate_no, \n       :manufacturer,\n        :manufacturing_date,\n        :purchased_date, \n       :state_registered,\n        :registered_lg)", {
            replacements: {
              query_type: query_type,
              id: id,
              owner_id: owner_id,
              lg_reg_no: lg_reg_no,
              engine_no: engine_no,
              chasis_no: chasis_no,
              plate_no: plate_no,
              manufacturer: manufacturer,
              manufacturing_date: manufacturing_date,
              purchased_date: purchased_date,
              state_registered: state_registered,
              registered_lg: registered_lg
            }
          });
        case 4:
          resp = _context.sent;
          res.status(200).json({
            success: true,
            data: resp
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
module.exports.getRegVehicles = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$query, _req$query$query_type, query_type, _req$query$id, id, _req$query$owner_id, owner_id, _req$query$lg_reg_no, lg_reg_no, _req$query$engine_no, engine_no, _req$query$chasis_no, chasis_no, _req$query$plate_no, plate_no, _req$query$manufactur, manufacturer, _req$query$manufactur2, manufacturing_date, _req$query$purchased_, purchased_date, _req$query$state_regi, state_registered, _req$query$registered, registered_lg, resp;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$query = req.query, _req$query$query_type = _req$query.query_type, query_type = _req$query$query_type === void 0 ? 'select' : _req$query$query_type, _req$query$id = _req$query.id, id = _req$query$id === void 0 ? null : _req$query$id, _req$query$owner_id = _req$query.owner_id, owner_id = _req$query$owner_id === void 0 ? null : _req$query$owner_id, _req$query$lg_reg_no = _req$query.lg_reg_no, lg_reg_no = _req$query$lg_reg_no === void 0 ? null : _req$query$lg_reg_no, _req$query$engine_no = _req$query.engine_no, engine_no = _req$query$engine_no === void 0 ? null : _req$query$engine_no, _req$query$chasis_no = _req$query.chasis_no, chasis_no = _req$query$chasis_no === void 0 ? null : _req$query$chasis_no, _req$query$plate_no = _req$query.plate_no, plate_no = _req$query$plate_no === void 0 ? null : _req$query$plate_no, _req$query$manufactur = _req$query.manufacturer, manufacturer = _req$query$manufactur === void 0 ? null : _req$query$manufactur, _req$query$manufactur2 = _req$query.manufacturing_date, manufacturing_date = _req$query$manufactur2 === void 0 ? null : _req$query$manufactur2, _req$query$purchased_ = _req$query.purchased_date, purchased_date = _req$query$purchased_ === void 0 ? null : _req$query$purchased_, _req$query$state_regi = _req$query.state_registered, state_registered = _req$query$state_regi === void 0 ? null : _req$query$state_regi, _req$query$registered = _req$query.registered_lg, registered_lg = _req$query$registered === void 0 ? null : _req$query$registered;
          _context2.prev = 1;
          _context2.next = 4;
          return db.sequelize.query("CALL vehicles(\n        :query_type,  \n        :id, \n       :owner_id, \n       :lg_reg_no,\n        :engine_no,\n        :chasis_no, \n       :plate_no, \n       :manufacturer,\n        :manufacturing_date,\n        :purchased_date, \n       :state_registered,\n        :registered_lg)", {
            replacements: {
              query_type: query_type,
              id: id,
              owner_id: owner_id,
              lg_reg_no: lg_reg_no,
              engine_no: engine_no,
              chasis_no: chasis_no,
              plate_no: plate_no,
              manufacturer: manufacturer,
              manufacturing_date: manufacturing_date,
              purchased_date: purchased_date,
              state_registered: state_registered,
              registered_lg: registered_lg
            }
          });
        case 4:
          resp = _context2.sent;
          res.status(200).json({
            success: true,
            data: resp
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

//       }
//       res.json({ user })
//     })
//     .catch(err => res.status(500).json({ err }));
// };
//# sourceMappingURL=vehicles_registration.js.map