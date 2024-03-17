'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var bcrypt = require('bcryptjs');
var db = require('../models');

module.exports.createVendor = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, _req$body$query_type, query_type, _req$body$id, id, _req$body$vendor_name, vendor_name, _req$body$vendor_ofii, vendor_ofiice_address, _req$body$vendor_stat, vendor_state, _req$body$vendor_lga, vendor_lga, _req$body$vendor_phon, vendor_phone, _req$body$vendor_emai, vendor_email, _req$body$vendor_tin, vendor_tin, _req$body$vendor_prof, vendor_profile, _req$body$vendor_bn_r, vendor_bn_rc, _req$body$contact_nam, contact_name, _req$body$contact_add, contact_address, _req$body$contact_sta, contact_state, _req$body$contact_pas, contact_password, _req$body$contact_pho, contact_phone, _req$body$contact_ema, contact_email, _req$body$contact_lga, contact_lga, _req$body$vendor_id, vendor_id, hashedContactPassword, resp;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, _req$body$query_type = _req$body.query_type, query_type = _req$body$query_type === undefined ? 'insert' : _req$body$query_type, _req$body$id = _req$body.id, id = _req$body$id === undefined ? null : _req$body$id, _req$body$vendor_name = _req$body.vendor_name, vendor_name = _req$body$vendor_name === undefined ? null : _req$body$vendor_name, _req$body$vendor_ofii = _req$body.vendor_ofiice_address, vendor_ofiice_address = _req$body$vendor_ofii === undefined ? null : _req$body$vendor_ofii, _req$body$vendor_stat = _req$body.vendor_state, vendor_state = _req$body$vendor_stat === undefined ? null : _req$body$vendor_stat, _req$body$vendor_lga = _req$body.vendor_lga, vendor_lga = _req$body$vendor_lga === undefined ? null : _req$body$vendor_lga, _req$body$vendor_phon = _req$body.vendor_phone, vendor_phone = _req$body$vendor_phon === undefined ? null : _req$body$vendor_phon, _req$body$vendor_emai = _req$body.vendor_email, vendor_email = _req$body$vendor_emai === undefined ? null : _req$body$vendor_emai, _req$body$vendor_tin = _req$body.vendor_tin, vendor_tin = _req$body$vendor_tin === undefined ? null : _req$body$vendor_tin, _req$body$vendor_prof = _req$body.vendor_profile, vendor_profile = _req$body$vendor_prof === undefined ? null : _req$body$vendor_prof, _req$body$vendor_bn_r = _req$body.vendor_bn_rc, vendor_bn_rc = _req$body$vendor_bn_r === undefined ? null : _req$body$vendor_bn_r, _req$body$contact_nam = _req$body.contact_name, contact_name = _req$body$contact_nam === undefined ? null : _req$body$contact_nam, _req$body$contact_add = _req$body.contact_address, contact_address = _req$body$contact_add === undefined ? null : _req$body$contact_add, _req$body$contact_sta = _req$body.contact_state, contact_state = _req$body$contact_sta === undefined ? null : _req$body$contact_sta, _req$body$contact_pas = _req$body.contact_password, contact_password = _req$body$contact_pas === undefined ? null : _req$body$contact_pas, _req$body$contact_pho = _req$body.contact_phone, contact_phone = _req$body$contact_pho === undefined ? null : _req$body$contact_pho, _req$body$contact_ema = _req$body.contact_email, contact_email = _req$body$contact_ema === undefined ? null : _req$body$contact_ema, _req$body$contact_lga = _req$body.contact_lga, contact_lga = _req$body$contact_lga === undefined ? null : _req$body$contact_lga, _req$body$vendor_id = _req$body.vendor_id, vendor_id = _req$body$vendor_id === undefined ? null : _req$body$vendor_id;

            if (contact_password) {
              _context.next = 3;
              break;
            }

            return _context.abrupt('return', res.status(400).json({ success: false, error: 'Contact password is required' }));

          case 3:
            _context.prev = 3;
            _context.next = 6;
            return bcrypt.hash(contact_password, 10);

          case 6:
            hashedContactPassword = _context.sent;
            _context.next = 9;
            return db.sequelize.query('CALL vendors(\n        :query_type, \n        :id, \n        :vendor_name, \n        :vendor_ofiice_address, \n        :vendor_state, \n        :vendor_lga, \n        :vendor_phone, \n        :vendor_email, \n        :vendor_tin, \n        :vendor_profile, \n        :vendor_bn_rc, \n        :contact_name, \n        :contact_address, \n        :contact_state, \n        :contact_password, \n        :contact_phone, \n        :contact_email, \n        :contact_lga, \n        :vendor_id)', {
              replacements: {
                query_type: query_type,
                id: id,
                vendor_name: vendor_name,
                vendor_ofiice_address: vendor_ofiice_address,
                vendor_state: vendor_state,
                vendor_lga: vendor_lga,
                vendor_phone: vendor_phone,
                vendor_email: vendor_email,
                vendor_tin: vendor_tin,
                vendor_profile: vendor_profile,
                vendor_bn_rc: vendor_bn_rc,
                contact_name: contact_name,
                contact_address: contact_address,
                contact_state: contact_state,
                contact_password: hashedContactPassword,
                contact_phone: contact_phone,
                contact_email: contact_email,
                contact_lga: contact_lga,
                vendor_id: vendor_id
              }
            });

          case 9:
            resp = _context.sent;


            res.status(200).json({ success: true, results: resp });
            _context.next = 17;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context['catch'](3);

            console.error(_context.t0);
            res.status(500).json({ success: false, error: 'Failed to create vendor' });

          case 17:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[3, 13]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

module.exports.getVendors = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$query, _req$query$query_type, query_type, _req$query$id, id, _req$query$vendor_nam, vendor_name, _req$query$vendor_ofi, vendor_ofiice_address, _req$query$vendor_sta, vendor_state, _req$query$vendor_lga, vendor_lga, _req$query$vendor_pho, vendor_phone, _req$query$vendor_ema, vendor_email, _req$query$vendor_tin, vendor_tin, _req$query$vendor_pro, vendor_profile, _req$query$vendor_bn_, vendor_bn_rc, _req$query$contact_na, contact_name, _req$query$contact_ad, contact_address, _req$query$contact_st, contact_state, _req$query$contact_pa, contact_password, _req$query$contact_ph, contact_phone, _req$query$contact_em, contact_email, _req$query$contact_lg, contact_lga, _req$query$vendor_id, vendor_id, resp;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$query = req.query, _req$query$query_type = _req$query.query_type, query_type = _req$query$query_type === undefined ? 'select' : _req$query$query_type, _req$query$id = _req$query.id, id = _req$query$id === undefined ? null : _req$query$id, _req$query$vendor_nam = _req$query.vendor_name, vendor_name = _req$query$vendor_nam === undefined ? null : _req$query$vendor_nam, _req$query$vendor_ofi = _req$query.vendor_ofiice_address, vendor_ofiice_address = _req$query$vendor_ofi === undefined ? null : _req$query$vendor_ofi, _req$query$vendor_sta = _req$query.vendor_state, vendor_state = _req$query$vendor_sta === undefined ? null : _req$query$vendor_sta, _req$query$vendor_lga = _req$query.vendor_lga, vendor_lga = _req$query$vendor_lga === undefined ? null : _req$query$vendor_lga, _req$query$vendor_pho = _req$query.vendor_phone, vendor_phone = _req$query$vendor_pho === undefined ? null : _req$query$vendor_pho, _req$query$vendor_ema = _req$query.vendor_email, vendor_email = _req$query$vendor_ema === undefined ? null : _req$query$vendor_ema, _req$query$vendor_tin = _req$query.vendor_tin, vendor_tin = _req$query$vendor_tin === undefined ? null : _req$query$vendor_tin, _req$query$vendor_pro = _req$query.vendor_profile, vendor_profile = _req$query$vendor_pro === undefined ? null : _req$query$vendor_pro, _req$query$vendor_bn_ = _req$query.vendor_bn_rc, vendor_bn_rc = _req$query$vendor_bn_ === undefined ? null : _req$query$vendor_bn_, _req$query$contact_na = _req$query.contact_name, contact_name = _req$query$contact_na === undefined ? null : _req$query$contact_na, _req$query$contact_ad = _req$query.contact_address, contact_address = _req$query$contact_ad === undefined ? null : _req$query$contact_ad, _req$query$contact_st = _req$query.contact_state, contact_state = _req$query$contact_st === undefined ? null : _req$query$contact_st, _req$query$contact_pa = _req$query.contact_password, contact_password = _req$query$contact_pa === undefined ? null : _req$query$contact_pa, _req$query$contact_ph = _req$query.contact_phone, contact_phone = _req$query$contact_ph === undefined ? null : _req$query$contact_ph, _req$query$contact_em = _req$query.contact_email, contact_email = _req$query$contact_em === undefined ? null : _req$query$contact_em, _req$query$contact_lg = _req$query.contact_lga, contact_lga = _req$query$contact_lg === undefined ? null : _req$query$contact_lg, _req$query$vendor_id = _req$query.vendor_id, vendor_id = _req$query$vendor_id === undefined ? null : _req$query$vendor_id;
            _context2.prev = 1;
            _context2.next = 4;
            return db.sequelize.query('CALL vendors(\n        :query_type, \n        :id, \n        :vendor_name, \n        :vendor_ofiice_address, \n        :vendor_state, \n        :vendor_lga, \n        :vendor_phone, \n        :vendor_email, \n        :vendor_tin, \n        :vendor_profile, \n        :vendor_bn_rc, \n        :contact_name, \n        :contact_address, \n        :contact_state, \n        :contact_password, \n        :contact_phone, \n        :contact_email, \n        :contact_lga, \n        :vendor_id)', {
              replacements: {
                query_type: query_type,
                id: id,
                vendor_name: vendor_name,
                vendor_ofiice_address: vendor_ofiice_address,
                vendor_state: vendor_state,
                vendor_lga: vendor_lga,
                vendor_phone: vendor_phone,
                vendor_email: vendor_email,
                vendor_tin: vendor_tin,
                vendor_profile: vendor_profile,
                vendor_bn_rc: vendor_bn_rc,
                contact_name: contact_name,
                contact_address: contact_address,
                contact_state: contact_state,
                contact_password: contact_password,
                contact_phone: contact_phone,
                contact_email: contact_email,
                contact_lga: contact_lga,
                vendor_id: vendor_id
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
            res.status(500).json({ success: false, error: 'Failed to get vendors' });

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
//# sourceMappingURL=vendors.js.map