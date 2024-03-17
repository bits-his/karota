'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// const bcrypt = require ('bcryptjs';)
var db = require('../models');

module.exports.createAgent = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, _req$body$query_type, query_type, _req$body$id, id, _req$body$name, name, _req$body$phone, phone, _req$body$email, email, _req$body$address, address, _req$body$super_agent, super_agent, _req$body$state, state, _req$body$lga, lga, resp;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, _req$body$query_type = _req$body.query_type, query_type = _req$body$query_type === undefined ? 'insert' : _req$body$query_type, _req$body$id = _req$body.id, id = _req$body$id === undefined ? null : _req$body$id, _req$body$name = _req$body.name, name = _req$body$name === undefined ? null : _req$body$name, _req$body$phone = _req$body.phone, phone = _req$body$phone === undefined ? null : _req$body$phone, _req$body$email = _req$body.email, email = _req$body$email === undefined ? null : _req$body$email, _req$body$address = _req$body.address, address = _req$body$address === undefined ? null : _req$body$address, _req$body$super_agent = _req$body.super_agent, super_agent = _req$body$super_agent === undefined ? null : _req$body$super_agent, _req$body$state = _req$body.state, state = _req$body$state === undefined ? null : _req$body$state, _req$body$lga = _req$body.lga, lga = _req$body$lga === undefined ? null : _req$body$lga;
            _context.prev = 1;
            _context.next = 4;
            return db.sequelize.query('CALL agents(\n      :query_type,\n      :id,\n      :name,\n      :phone,\n      :email,\n      :address,\n      :super_agent,\n      :state,\n      :lga)', {
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


            res.status(200).json({ success: true, results: resp });
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context['catch'](1);

            console.error(_context.t0);
            res.status(500).json({ success: false, error: 'Failed to fetch agent' });

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[1, 8]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

//  @ Get all superagent
//  @route GET /superagent 
module.exports.fetchAgent = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$query, _req$query$query_type, query_type, _req$query$id, id, _req$query$name, name, _req$query$phone, phone, _req$query$email, email, _req$query$address, address, _req$query$super_agen, super_agent, _req$query$state, state, _req$query$lga, lga, resp;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$query = req.query, _req$query$query_type = _req$query.query_type, query_type = _req$query$query_type === undefined ? 'select' : _req$query$query_type, _req$query$id = _req$query.id, id = _req$query$id === undefined ? null : _req$query$id, _req$query$name = _req$query.name, name = _req$query$name === undefined ? null : _req$query$name, _req$query$phone = _req$query.phone, phone = _req$query$phone === undefined ? null : _req$query$phone, _req$query$email = _req$query.email, email = _req$query$email === undefined ? null : _req$query$email, _req$query$address = _req$query.address, address = _req$query$address === undefined ? null : _req$query$address, _req$query$super_agen = _req$query.super_agent, super_agent = _req$query$super_agen === undefined ? null : _req$query$super_agen, _req$query$state = _req$query.state, state = _req$query$state === undefined ? null : _req$query$state, _req$query$lga = _req$query.lga, lga = _req$query$lga === undefined ? null : _req$query$lga;
            _context2.prev = 1;
            _context2.next = 4;
            return db.sequelize.query('CALL agents(\n      :query_type,\n      :id,\n      :name,\n      :phone,\n      :email,\n      :address,\n      :super_agent,\n      :state,\n      :lga)', {
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


            res.status(200).json({ success: true, results: resp });
            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2['catch'](1);

            console.error(_context2.t0);
            res.status(500).json({ success: false, error: 'Failed to fetch agent' });

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
//# sourceMappingURL=agents.js.map