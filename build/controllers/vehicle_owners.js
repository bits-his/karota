"use strict";

var db = require('../models');
module.exports.saveVehicleOwners = function (req, res) {
  var _req$body = req.body,
    _req$body$query_type = _req$body.query_type,
    query_type = _req$body$query_type === void 0 ? null : _req$body$query_type,
    _req$body$id = _req$body.id,
    id = _req$body$id === void 0 ? null : _req$body$id,
    _req$body$user_id = _req$body.user_id,
    user_id = _req$body$user_id === void 0 ? null : _req$body$user_id,
    _req$body$name = _req$body.name,
    name = _req$body$name === void 0 ? null : _req$body$name,
    _req$body$address = _req$body.address,
    address = _req$body$address === void 0 ? null : _req$body$address,
    _req$body$phone = _req$body.phone,
    phone = _req$body$phone === void 0 ? null : _req$body$phone,
    _req$body$email = _req$body.email,
    email = _req$body$email === void 0 ? null : _req$body$email,
    _req$body$state = _req$body.state,
    state = _req$body$state === void 0 ? null : _req$body$state,
    _req$body$lga = _req$body.lga,
    lga = _req$body$lga === void 0 ? null : _req$body$lga,
    _req$body$password = _req$body.password,
    password = _req$body$password === void 0 ? null : _req$body$password;
  db.sequelize.query("CALL vehicles_owners(\n            :query_type,\n            :id,\n            :user_id,\n            :name,\n            :address,\n            phone,\n            :email,\n            :state,\n            :lga,\n            :password\n        )", {
    replacements: {
      query_type: query_type,
      id: id,
      user_id: user_id,
      name: name,
      address: address,
      phone: phone,
      email: email,
      state: state,
      lga: lga,
      password: password
    }
  }).then(function (resp) {
    res.status(200).json({
      success: true,
      data: resp
    });
  })["catch"](function (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: 'Operation Failed'
    });
  });
};
module.exports.getVehicleOwners = function (req, res) {
  var _req$body2 = req.body,
    _req$body2$query_type = _req$body2.query_type,
    query_type = _req$body2$query_type === void 0 ? "select-all" : _req$body2$query_type,
    _req$body2$id = _req$body2.id,
    id = _req$body2$id === void 0 ? null : _req$body2$id,
    _req$body2$user_id = _req$body2.user_id,
    user_id = _req$body2$user_id === void 0 ? null : _req$body2$user_id,
    _req$body2$name = _req$body2.name,
    name = _req$body2$name === void 0 ? null : _req$body2$name,
    _req$body2$address = _req$body2.address,
    address = _req$body2$address === void 0 ? null : _req$body2$address,
    _req$body2$phone = _req$body2.phone,
    phone = _req$body2$phone === void 0 ? null : _req$body2$phone,
    _req$body2$email = _req$body2.email,
    email = _req$body2$email === void 0 ? null : _req$body2$email,
    _req$body2$state = _req$body2.state,
    state = _req$body2$state === void 0 ? null : _req$body2$state,
    _req$body2$lga = _req$body2.lga,
    lga = _req$body2$lga === void 0 ? null : _req$body2$lga,
    _req$body2$password = _req$body2.password,
    password = _req$body2$password === void 0 ? null : _req$body2$password;
  db.sequelize.query("CALL vehicles_owners(\n            :query_type,\n            :id,\n            :user_id,\n            :name,\n            :address,\n            :phone,\n            :email,\n            :state,\n            :lga\n        )", {
    replacements: {
      query_type: query_type,
      id: id,
      user_id: user_id,
      name: name,
      address: address,
      phone: phone,
      email: email,
      state: state,
      lga: lga
    }
  }).then(function (resp) {
    res.status(200).json({
      success: true,
      data: resp
    });
  })["catch"](function (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: 'Operation Failed '
    });
  });
};
//# sourceMappingURL=vehicle_owners.js.map