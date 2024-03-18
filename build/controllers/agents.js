"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
// const bcrypt = require ('bcryptjs';)
var db = require('../models');
module.exports.createAgent = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, _req$body$query_type, query_type, _req$body$id, id, _req$body$name, name, _req$body$phone, phone, _req$body$email, email, _req$body$address, address, _req$body$super_agent, super_agent, _req$body$state, state, _req$body$lga, lga, resp;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, _req$body$query_type = _req$body.query_type, query_type = _req$body$query_type === void 0 ? 'insert' : _req$body$query_type, _req$body$id = _req$body.id, id = _req$body$id === void 0 ? null : _req$body$id, _req$body$name = _req$body.name, name = _req$body$name === void 0 ? null : _req$body$name, _req$body$phone = _req$body.phone, phone = _req$body$phone === void 0 ? null : _req$body$phone, _req$body$email = _req$body.email, email = _req$body$email === void 0 ? null : _req$body$email, _req$body$address = _req$body.address, address = _req$body$address === void 0 ? null : _req$body$address, _req$body$super_agent = _req$body.super_agent, super_agent = _req$body$super_agent === void 0 ? null : _req$body$super_agent, _req$body$state = _req$body.state, state = _req$body$state === void 0 ? null : _req$body$state, _req$body$lga = _req$body.lga, lga = _req$body$lga === void 0 ? null : _req$body$lga;
          _context.prev = 1;
          _context.next = 4;
          return db.sequelize.query("CALL agents(\n      :query_type,\n      :id,\n      :name,\n      :phone,\n      :email,\n      :address,\n      :super_agent,\n      :state,\n      :lga)", {
            replacements: {
              query_type: query_type,
              id: id,
              name: name,
              phone: phone,
              email: email,
              address: address,
              super_agent: super_agent,
              state: state,
              lga: lga
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
            error: 'Failed to fetch agent'
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

//  @ Get all superagent
//  @route GET /superagent 
module.exports.fetchAgent = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$query, _req$query$query_type, query_type, _req$query$id, id, _req$query$name, name, _req$query$phone, phone, _req$query$email, email, _req$query$address, address, _req$query$super_agen, super_agent, _req$query$state, state, _req$query$lga, lga, resp;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$query = req.query, _req$query$query_type = _req$query.query_type, query_type = _req$query$query_type === void 0 ? 'select' : _req$query$query_type, _req$query$id = _req$query.id, id = _req$query$id === void 0 ? null : _req$query$id, _req$query$name = _req$query.name, name = _req$query$name === void 0 ? null : _req$query$name, _req$query$phone = _req$query.phone, phone = _req$query$phone === void 0 ? null : _req$query$phone, _req$query$email = _req$query.email, email = _req$query$email === void 0 ? null : _req$query$email, _req$query$address = _req$query.address, address = _req$query$address === void 0 ? null : _req$query$address, _req$query$super_agen = _req$query.super_agent, super_agent = _req$query$super_agen === void 0 ? null : _req$query$super_agen, _req$query$state = _req$query.state, state = _req$query$state === void 0 ? null : _req$query$state, _req$query$lga = _req$query.lga, lga = _req$query$lga === void 0 ? null : _req$query$lga;
          _context2.prev = 1;
          _context2.next = 4;
          return db.sequelize.query("CALL agents(\n      :query_type,\n      :id,\n      :name,\n      :phone,\n      :email,\n      :address,\n      :super_agent,\n      :state,\n      :lga)", {
            replacements: {
              query_type: query_type,
              id: id,
              name: name,
              phone: phone,
              email: email,
              address: address,
              super_agent: super_agent,
              state: state,
              lga: lga
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
            error: 'Failed to fetch agent'
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
//# sourceMappingURL=agents.js.map