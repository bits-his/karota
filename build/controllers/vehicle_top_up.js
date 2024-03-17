"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
// const bcrypt = require ('bcryptjs';)
var db = require('../models');
var moment = require('moment');
module.exports.createTopUp = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, _req$body$agent_id, agent_id, _req$body$vehicle_id, vehicle_id, _req$body$amount, amount, _req$body$t_date, t_date, _req$body$created_at, created_at, _req$body$updated_at, updated_at, resp;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, _req$body$agent_id = _req$body.agent_id, agent_id = _req$body$agent_id === void 0 ? null : _req$body$agent_id, _req$body$vehicle_id = _req$body.vehicle_id, vehicle_id = _req$body$vehicle_id === void 0 ? null : _req$body$vehicle_id, _req$body$amount = _req$body.amount, amount = _req$body$amount === void 0 ? null : _req$body$amount, _req$body$t_date = _req$body.t_date, t_date = _req$body$t_date === void 0 ? null : _req$body$t_date, _req$body$created_at = _req$body.created_at, created_at = _req$body$created_at === void 0 ? null : _req$body$created_at, _req$body$updated_at = _req$body.updated_at, updated_at = _req$body$updated_at === void 0 ? null : _req$body$updated_at;
          console.log(req.body);
          _context.prev = 2;
          _context.next = 5;
          return db.sequelize.query("CALL vehicle_top_up(\n      :agent_id,\n      :amount,\n      :t_date,\n      :created_at,\n      :updated_at,\n      :vehicle_id\n     )", {
            replacements: {
              agent_id: agent_id,
              amount: amount,
              t_date: moment().format('YYYY-MM-DD'),
              created_at: created_at,
              updated_at: updated_at,
              vehicle_id: vehicle_id
            }
          });
        case 5:
          resp = _context.sent;
          res.status(200).json({
            success: true,
            results: resp
          });
          _context.next = 13;
          break;
        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](2);
          console.error(_context.t0);
          res.status(500).json({
            success: false,
            error: 'Failed to fetch agent'
          });
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 9]]);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

//  @ Get all superagent
//  @route GET /superagent 
module.exports.fetchTopUp = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$query, _req$query$id, id, _req$query$name, name, _req$query$super_agen, super_agent, resp;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$query = req.query, _req$query$id = _req$query.id, id = _req$query$id === void 0 ? null : _req$query$id, _req$query$name = _req$query.name, name = _req$query$name === void 0 ? null : _req$query$name, _req$query$super_agen = _req$query.super_agent, super_agent = _req$query$super_agen === void 0 ? null : _req$query$super_agen;
          _context2.prev = 1;
          _context2.next = 4;
          return db.sequelize.query("CALL agents(\n      :id,\n      :name,\n      :super_agent,\n      )", {
            replacements: {
              query_type: query_type,
              id: id,
              name: name,
              super_agent: super_agent
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
//# sourceMappingURL=vehicle_top_up.js.map