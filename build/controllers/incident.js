"use strict";

var db = require("../models");
module.exports.create_incident = function (req, res) {
  var _req$body = req.body,
    _req$body$id = _req$body.id,
    id = _req$body$id === void 0 ? null : _req$body$id,
    _req$body$user_name = _req$body.user_name,
    user_name = _req$body$user_name === void 0 ? null : _req$body$user_name,
    _req$body$type_of_inc = _req$body.type_of_incident,
    type_of_incident = _req$body$type_of_inc === void 0 ? null : _req$body$type_of_inc,
    _req$body$description = _req$body.description,
    description = _req$body$description === void 0 ? null : _req$body$description;
  var _req$query$query_type = req.query.query_type,
    query_type = _req$query$query_type === void 0 ? "create" : _req$query$query_type;
  db.sequelize.query("call incident(:id,:query_type,:user_name,:type_of_incident,:description)", {
    replacements: {
      id: id,
      query_type: query_type,
      user_name: user_name,
      type_of_incident: type_of_incident,
      description: description
    }
  }).then(function (results) {
    console.log(results);
    res.json({
      success: true,
      results: results
    });
  })["catch"](function (err) {
    console.log(err);
    res.status(500).json({
      success: false
    });
  });
};
module.exports.getIncident = function (req, res) {
  var _req$query = req.query,
    _req$query$id = _req$query.id,
    id = _req$query$id === void 0 ? null : _req$query$id,
    _req$query$user_name = _req$query.user_name,
    user_name = _req$query$user_name === void 0 ? null : _req$query$user_name,
    _req$query$type_of_in = _req$query.type_of_incident,
    type_of_incident = _req$query$type_of_in === void 0 ? null : _req$query$type_of_in,
    _req$query$descriptio = _req$query.description,
    description = _req$query$descriptio === void 0 ? null : _req$query$descriptio;
  var _req$query$query_type2 = req.query.query_type,
    query_type = _req$query$query_type2 === void 0 ? "create" : _req$query$query_type2;
  db.sequelize.query("call incident(:id,:query_type,:user_name,:type_of_incident,:description)", {
    replacements: {
      id: id,
      query_type: query_type,
      user_name: user_name,
      type_of_incident: type_of_incident,
      description: description
    }
  }).then(function (results) {
    console.log(results);
    res.json({
      success: true,
      results: results
    });
  })["catch"](function (err) {
    console.log(err);
    res.status(500).json({
      success: false
    });
  });
};
//# sourceMappingURL=incident.js.map