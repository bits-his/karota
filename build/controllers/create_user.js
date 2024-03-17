"use strict";

var db = require("../models");

module.exports.create_user = function (req, res) {
  // const {  } = req.body;
  var _req$body = req.body,
      _req$body$id = _req$body.id,
      id = _req$body$id === undefined ? null : _req$body$id,
      _req$body$vehicle_id = _req$body.vehicle_id,
      vehicle_id = _req$body$vehicle_id === undefined ? null : _req$body$vehicle_id,
      _req$body$name = _req$body.name,
      name = _req$body$name === undefined ? null : _req$body$name,
      _req$body$middle_name = _req$body.middle_name,
      middle_name = _req$body$middle_name === undefined ? null : _req$body$middle_name,
      _req$body$surname = _req$body.surname,
      surname = _req$body$surname === undefined ? null : _req$body$surname,
      _req$body$gender = _req$body.gender,
      gender = _req$body$gender === undefined ? null : _req$body$gender,
      _req$body$status = _req$body.status,
      status = _req$body$status === undefined ? null : _req$body$status,
      _req$body$nationality = _req$body.nationality,
      nationality = _req$body$nationality === undefined ? null : _req$body$nationality,
      _req$body$state_of_or = _req$body.state_of_origin,
      state_of_origin = _req$body$state_of_or === undefined ? null : _req$body$state_of_or,
      _req$body$lg = _req$body.lg,
      lg = _req$body$lg === undefined ? null : _req$body$lg,
      _req$body$date_of_bir = _req$body.date_of_birth,
      date_of_birth = _req$body$date_of_bir === undefined ? null : _req$body$date_of_bir,
      _req$body$place_of_bi = _req$body.place_of_birth,
      place_of_birth = _req$body$place_of_bi === undefined ? null : _req$body$place_of_bi,
      _req$body$phone_no = _req$body.phone_no,
      phone_no = _req$body$phone_no === undefined ? null : _req$body$phone_no,
      _req$body$blood_group = _req$body.blood_group,
      blood_group = _req$body$blood_group === undefined ? null : _req$body$blood_group,
      _req$body$genotype = _req$body.genotype,
      genotype = _req$body$genotype === undefined ? null : _req$body$genotype,
      _req$body$address = _req$body.address,
      address = _req$body$address === undefined ? null : _req$body$address,
      _req$body$NIN_number = _req$body.NIN_number,
      NIN_number = _req$body$NIN_number === undefined ? null : _req$body$NIN_number,
      _req$body$next_of_kin = _req$body.next_of_king,
      next_of_king = _req$body$next_of_kin === undefined ? null : _req$body$next_of_kin,
      _req$body$next_of_kin2 = _req$body.next_of_king_address,
      next_of_king_address = _req$body$next_of_kin2 === undefined ? null : _req$body$next_of_kin2,
      _req$body$phone_no2 = _req$body.phone_no2,
      phone_no2 = _req$body$phone_no2 === undefined ? null : _req$body$phone_no2,
      _req$body$plate_numbe = _req$body.plate_number,
      plate_number = _req$body$plate_numbe === undefined ? null : _req$body$plate_numbe,
      _req$body$classes_num = _req$body.classes_number,
      classes_number = _req$body$classes_num === undefined ? null : _req$body$classes_num,
      _req$body$side_number = _req$body.side_number,
      side_number = _req$body$side_number === undefined ? null : _req$body$side_number,
      _req$body$phone_no3 = _req$body.phone_no3,
      phone_no3 = _req$body$phone_no3 === undefined ? null : _req$body$phone_no3,
      _req$body$name_of_com = _req$body.name_of_company,
      name_of_company = _req$body$name_of_com === undefined ? null : _req$body$name_of_com,
      _req$body$qrcode = _req$body.qrcode,
      qrcode = _req$body$qrcode === undefined ? null : _req$body$qrcode;
  var _req$query$query_type = req.query.query_type,
      query_type = _req$query$query_type === undefined ? "create" : _req$query$query_type;

  db.sequelize.query("call create_user(:id,:vehicle_id,:query_type,:name,:middle_name,:surname,:gender,:status,:nationality,:state_of_origin,:lg,:date_of_birth,:place_of_birth,:phone_no,:blood_group,:genotype,:address,:NIN_number,:next_of_king,:next_of_king_address,:phone_no2,:plate_number,:classes_number,:side_number,:phone_no3,:name_of_company,:qrcode)", {
    replacements: {
      id: id,
      vehicle_id: vehicle_id,
      query_type: query_type,
      name: name,
      middle_name: middle_name,
      surname: surname,
      gender: gender,
      status: status,
      nationality: nationality,
      state_of_origin: state_of_origin,
      lg: lg,
      date_of_birth: date_of_birth,
      place_of_birth: place_of_birth,
      phone_no: phone_no,
      blood_group: blood_group,
      genotype: genotype,
      address: address,
      NIN_number: NIN_number,
      next_of_king: next_of_king,
      next_of_king_address: next_of_king_address,
      phone_no2: phone_no2,
      plate_number: plate_number,
      classes_number: classes_number,
      side_number: side_number,
      phone_no3: phone_no3,
      name_of_company: name_of_company,
      qrcode: qrcode
    }
  }).then(function (results) {
    return res.json({ success: true, results: results });
  }).catch(function (err) {
    console.log(err);
    res.status(500).json({ success: false });
  });
};

module.exports.getCreate_user = function (req, res) {
  // const {  } = req.body;
  var _req$query = req.query,
      _req$query$id = _req$query.id,
      id = _req$query$id === undefined ? null : _req$query$id,
      _req$query$vehicle_id = _req$query.vehicle_id,
      vehicle_id = _req$query$vehicle_id === undefined ? null : _req$query$vehicle_id,
      _req$query$name = _req$query.name,
      name = _req$query$name === undefined ? null : _req$query$name,
      _req$query$middle_nam = _req$query.middle_name,
      middle_name = _req$query$middle_nam === undefined ? null : _req$query$middle_nam,
      _req$query$surname = _req$query.surname,
      surname = _req$query$surname === undefined ? null : _req$query$surname,
      _req$query$gender = _req$query.gender,
      gender = _req$query$gender === undefined ? null : _req$query$gender,
      _req$query$status = _req$query.status,
      status = _req$query$status === undefined ? null : _req$query$status,
      _req$query$nationalit = _req$query.nationality,
      nationality = _req$query$nationalit === undefined ? null : _req$query$nationalit,
      _req$query$state_of_o = _req$query.state_of_origin,
      state_of_origin = _req$query$state_of_o === undefined ? null : _req$query$state_of_o,
      _req$query$lg = _req$query.lg,
      lg = _req$query$lg === undefined ? null : _req$query$lg,
      _req$query$date_of_bi = _req$query.date_of_birth,
      date_of_birth = _req$query$date_of_bi === undefined ? null : _req$query$date_of_bi,
      _req$query$place_of_b = _req$query.place_of_birth,
      place_of_birth = _req$query$place_of_b === undefined ? null : _req$query$place_of_b,
      _req$query$phone_no = _req$query.phone_no,
      phone_no = _req$query$phone_no === undefined ? null : _req$query$phone_no,
      _req$query$blood_grou = _req$query.blood_group,
      blood_group = _req$query$blood_grou === undefined ? null : _req$query$blood_grou,
      _req$query$genotype = _req$query.genotype,
      genotype = _req$query$genotype === undefined ? null : _req$query$genotype,
      _req$query$address = _req$query.address,
      address = _req$query$address === undefined ? null : _req$query$address,
      _req$query$NIN_number = _req$query.NIN_number,
      NIN_number = _req$query$NIN_number === undefined ? null : _req$query$NIN_number,
      _req$query$next_of_ki = _req$query.next_of_king,
      next_of_king = _req$query$next_of_ki === undefined ? null : _req$query$next_of_ki,
      _req$query$next_of_ki2 = _req$query.next_of_king_address,
      next_of_king_address = _req$query$next_of_ki2 === undefined ? null : _req$query$next_of_ki2,
      _req$query$phone_no2 = _req$query.phone_no2,
      phone_no2 = _req$query$phone_no2 === undefined ? null : _req$query$phone_no2,
      _req$query$plate_numb = _req$query.plate_number,
      plate_number = _req$query$plate_numb === undefined ? null : _req$query$plate_numb,
      _req$query$classes_nu = _req$query.classes_number,
      classes_number = _req$query$classes_nu === undefined ? null : _req$query$classes_nu,
      _req$query$side_numbe = _req$query.side_number,
      side_number = _req$query$side_numbe === undefined ? null : _req$query$side_numbe,
      _req$query$phone_no3 = _req$query.phone_no3,
      phone_no3 = _req$query$phone_no3 === undefined ? null : _req$query$phone_no3,
      _req$query$name_of_co = _req$query.name_of_company,
      name_of_company = _req$query$name_of_co === undefined ? null : _req$query$name_of_co,
      _req$query$qrcode = _req$query.qrcode,
      qrcode = _req$query$qrcode === undefined ? null : _req$query$qrcode;
  var _req$query$query_type2 = req.query.query_type,
      query_type = _req$query$query_type2 === undefined ? "create" : _req$query$query_type2;

  db.sequelize.query("call create_user(:id,:vehicle_id,:query_type,:name,:middle_name,:surname,:gender,:status,:nationality,:state_of_origin,:lg,:date_of_birth,:place_of_birth,:phone_no,:blood_group,:genotype,:address,:NIN_number,:next_of_king,:next_of_king_address,:phone_no2,:plate_number,:classes_number,:side_number,:phone_no3,:name_of_company,:qrcode)", {
    replacements: {
      id: id,
      vehicle_id: vehicle_id,
      query_type: query_type,
      name: name,
      middle_name: middle_name,
      surname: surname,
      gender: gender,
      status: status,
      nationality: nationality,
      state_of_origin: state_of_origin,
      lg: lg,
      date_of_birth: date_of_birth,
      place_of_birth: place_of_birth,
      phone_no: phone_no,
      blood_group: blood_group,
      genotype: genotype,
      address: address,
      NIN_number: NIN_number,
      next_of_king: next_of_king,
      next_of_king_address: next_of_king_address,
      phone_no2: phone_no2,
      plate_number: plate_number,
      classes_number: classes_number,
      side_number: side_number,
      phone_no3: phone_no3,
      name_of_company: name_of_company,
      qrcode: qrcode
    }
  }).then(function (results) {
    return res.json({ success: true, results: results });
  }).catch(function (err) {
    console.log(err);
    res.status(500).json({ success: false });
  });
};

module.exports.state_and_local_gvt = function (req, res) {
  // const {  } = req.body;
  var _req$body2 = req.body,
      _req$body2$type = _req$body2.type,
      type = _req$body2$type === undefined ? null : _req$body2$type,
      _req$body2$state = _req$body2.state,
      state = _req$body2$state === undefined ? null : _req$body2$state,
      _req$body2$local_gvt = _req$body2.local_gvt,
      local_gvt = _req$body2$local_gvt === undefined ? null : _req$body2$local_gvt;
  var _req$query$query_type3 = req.query.query_type,
      query_type = _req$query$query_type3 === undefined ? "insert" : _req$query$query_type3;

  db.sequelize.query("call state_and_local_gvt(:query_type,:type,:state,:local_gvt)", {
    replacements: {
      query_type: query_type,
      type: type,
      state: state,
      local_gvt: local_gvt
    }
  }).then(function (results) {
    return res.json({ success: true, results: results });
  }).catch(function (err) {
    console.log(err);
    res.status(500).json({ success: false });
  });
};
//# sourceMappingURL=create_user.js.map