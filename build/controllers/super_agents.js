'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var bcrypt = require('bcryptjs');
var db = require('../models');
var User = db.User;

module.exports.superAgent = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, _req$body$query_type, query_type, _req$body$id, id, _req$body$name, name, _req$body$phone, phone, _req$body$email, email, _req$body$address, address, _req$body$vendor, vendor, _req$body$state, state, _req$body$lga, lga, _req$body$nin, nin, resp;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, _req$body$query_type = _req$body.query_type, query_type = _req$body$query_type === undefined ? "insert" : _req$body$query_type, _req$body$id = _req$body.id, id = _req$body$id === undefined ? null : _req$body$id, _req$body$name = _req$body.name, name = _req$body$name === undefined ? null : _req$body$name, _req$body$phone = _req$body.phone, phone = _req$body$phone === undefined ? null : _req$body$phone, _req$body$email = _req$body.email, email = _req$body$email === undefined ? null : _req$body$email, _req$body$address = _req$body.address, address = _req$body$address === undefined ? null : _req$body$address, _req$body$vendor = _req$body.vendor, vendor = _req$body$vendor === undefined ? null : _req$body$vendor, _req$body$state = _req$body.state, state = _req$body$state === undefined ? null : _req$body$state, _req$body$lga = _req$body.lga, lga = _req$body$lga === undefined ? null : _req$body$lga, _req$body$nin = _req$body.nin, nin = _req$body$nin === undefined ? null : _req$body$nin;

            console.log(req.body);

            _context.prev = 2;
            _context.next = 5;
            return db.sequelize.query('CALL super_agents(:query_type, \n        :id, \n        :name,\n            :phone,\n            :email,\n            :address,\n            :vendor,\n            :state,\n            :lga,\n            :nin)', {
              replacements: {
                query_type: query_type,
                id: id,
                name: name,
                phone: phone,
                email: email,
                address: address,
                vendor: vendor,
                state: state,
                lga: lga,
                nin: nin
              }
            });

          case 5:
            resp = _context.sent;


            res.status(200).json({ success: true, results: resp });
            _context.next = 13;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context['catch'](2);

            console.error(_context.t0);
            res.status(500).json({ success: false, error: "Failed to register super agent" });

          case 13:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[2, 9]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

//   @ Fetch a single super agent by ID
//   @route GET /api/superagent/:id
module.exports.fetchSuperAgent = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$query, _req$query$query_type, query_type, _req$query$id, id, _req$query$name, name, _req$query$phone, phone, _req$query$email, email, _req$query$address, address, _req$query$vendor, vendor, _req$query$state, state, _req$query$lga, lga, _req$query$nin, nin, resp;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$query = req.query, _req$query$query_type = _req$query.query_type, query_type = _req$query$query_type === undefined ? "select_all" : _req$query$query_type, _req$query$id = _req$query.id, id = _req$query$id === undefined ? null : _req$query$id, _req$query$name = _req$query.name, name = _req$query$name === undefined ? null : _req$query$name, _req$query$phone = _req$query.phone, phone = _req$query$phone === undefined ? null : _req$query$phone, _req$query$email = _req$query.email, email = _req$query$email === undefined ? null : _req$query$email, _req$query$address = _req$query.address, address = _req$query$address === undefined ? null : _req$query$address, _req$query$vendor = _req$query.vendor, vendor = _req$query$vendor === undefined ? null : _req$query$vendor, _req$query$state = _req$query.state, state = _req$query$state === undefined ? null : _req$query$state, _req$query$lga = _req$query.lga, lga = _req$query$lga === undefined ? null : _req$query$lga, _req$query$nin = _req$query.nin, nin = _req$query$nin === undefined ? null : _req$query$nin;
            _context2.prev = 1;
            _context2.next = 4;
            return db.sequelize.query('CALL super_agents(:query_type, \n        :id, \n        :name,\n            :phone,\n            :email,\n            :address,\n            :vendor,\n            :state,\n            :lga,\n            :nin)', {
              replacements: {
                query_type: query_type,
                id: id,
                name: name,
                phone: phone,
                email: email,
                address: address,
                vendor: vendor,
                state: state,
                lga: lga,
                nin: nin
              }
            });

          case 4:
            resp = _context2.sent;


            res.json({ success: true, results: resp });
            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2['catch'](1);

            console.error(_context2.t0);
            res.status(500).json({ success: false, error: "Failed to register super agent" });

          case 12:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[1, 8]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
//# sourceMappingURL=super_agents.js.map