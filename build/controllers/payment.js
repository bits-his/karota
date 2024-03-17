"use strict";

var db = require("../models");

module.exports.payment = function (req, res) {
  // const {  } = req.body;
  var _req$body = req.body,
      _req$body$id = _req$body.id,
      id = _req$body$id === undefined ? null : _req$body$id,
      _req$body$vehicle_id = _req$body.vehicle_id,
      vehicle_id = _req$body$vehicle_id === undefined ? null : _req$body$vehicle_id,
      _req$body$amount = _req$body.amount,
      amount = _req$body$amount === undefined ? null : _req$body$amount,
      _req$body$card_number = _req$body.card_number,
      card_number = _req$body$card_number === undefined ? null : _req$body$card_number,
      _req$body$cvv = _req$body.cvv,
      cvv = _req$body$cvv === undefined ? null : _req$body$cvv,
      _req$body$expiry_date = _req$body.expiry_date,
      expiry_date = _req$body$expiry_date === undefined ? null : _req$body$expiry_date;
  var _req$query$query_type = req.query.query_type,
      query_type = _req$query$query_type === undefined ? "create" : _req$query$query_type;

  db.sequelize.query("call payment(:id,:query_type,:vehicle_id,:amount,:card_number,:cvv,:expiry_date)", {
    replacements: {
      id: id,
      vehicle_id: vehicle_id,
      query_type: query_type,
      amount: amount,
      card_number: card_number,
      cvv: cvv,
      expiry_date: expiry_date
    }
  }).then(function (results) {
    return res.json({ success: true, results: results });
  }).catch(function (err) {
    console.log(err);
    res.status(500).json({ success: false });
  });
};

module.exports.getPayment = function (req, res) {
  // const {  } = req.body;
  var _req$query = req.query,
      _req$query$id = _req$query.id,
      id = _req$query$id === undefined ? null : _req$query$id,
      _req$query$vehicle_id = _req$query.vehicle_id,
      vehicle_id = _req$query$vehicle_id === undefined ? null : _req$query$vehicle_id,
      _req$query$amount = _req$query.amount,
      amount = _req$query$amount === undefined ? null : _req$query$amount,
      _req$query$card_numbe = _req$query.card_number,
      card_number = _req$query$card_numbe === undefined ? null : _req$query$card_numbe,
      _req$query$cvv = _req$query.cvv,
      cvv = _req$query$cvv === undefined ? null : _req$query$cvv,
      _req$query$expiry_dat = _req$query.expiry_date,
      expiry_date = _req$query$expiry_dat === undefined ? null : _req$query$expiry_dat;
  var _req$query$query_type2 = req.query.query_type,
      query_type = _req$query$query_type2 === undefined ? "create" : _req$query$query_type2;

  db.sequelize.query("call payment(:id,:query_type,:vehicle_id,:amount,:card_number,:cvv,:expiry_date)", {
    replacements: {
      id: id,
      vehicle_id: vehicle_id,
      query_type: query_type,
      amount: amount,
      card_number: card_number,
      cvv: cvv,
      expiry_date: expiry_date
    }
  }).then(function (results) {
    return res.json({ success: true, results: results });
  }).catch(function (err) {
    console.log(err);
    res.status(500).json({ success: false });
  });
};
//# sourceMappingURL=payment.js.map