"use strict";

var db = require("../models");

module.exports.registered_rides = function (req, res) {
  // const {  } = req.body;
  var _req$body = req.body,
      _req$body$id = _req$body.id,
      id = _req$body$id === undefined ? null : _req$body$id,
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
      name_of_company = _req$body$name_of_com === undefined ? null : _req$body$name_of_com;
  var _req$query$query_type = req.query.query_type,
      query_type = _req$query$query_type === undefined ? "create" : _req$query$query_type;

  db.sequelize.query("call registered_rides(:id,:query_type,:name,:middle_name,:surname,:gender,:status,:nationality,:state_of_origin,:lg,:date_of_birth,:place_of_birth,:phone_no,:blood_group,:genotype,:address,:NIN_number,:next_of_king,:next_of_king_address,:phone_no2,:plate_number,:classes_number,:side_number,:phone_no3,:name_of_company,:qrcode)", {
    replacements: {
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
      query_type: query_type
    }
  }).then(function (results) {
    return res.json({ success: true, results: results });
  }).catch(function (err) {
    console.log(err);
    res.status(500).json({ success: false });
  });
};

module.exports.getregistered_rides = function (req, res) {
  // const {  } = req.body;
  var _req$body2 = req.body,
      _req$body2$id = _req$body2.id,
      id = _req$body2$id === undefined ? null : _req$body2$id,
      _req$body2$name = _req$body2.name,
      name = _req$body2$name === undefined ? null : _req$body2$name,
      _req$body2$middle_nam = _req$body2.middle_name,
      middle_name = _req$body2$middle_nam === undefined ? null : _req$body2$middle_nam,
      _req$body2$surname = _req$body2.surname,
      surname = _req$body2$surname === undefined ? null : _req$body2$surname,
      _req$body2$gender = _req$body2.gender,
      gender = _req$body2$gender === undefined ? null : _req$body2$gender,
      _req$body2$status = _req$body2.status,
      status = _req$body2$status === undefined ? null : _req$body2$status,
      _req$body2$nationalit = _req$body2.nationality,
      nationality = _req$body2$nationalit === undefined ? null : _req$body2$nationalit,
      _req$body2$state_of_o = _req$body2.state_of_origin,
      state_of_origin = _req$body2$state_of_o === undefined ? null : _req$body2$state_of_o,
      _req$body2$lg = _req$body2.lg,
      lg = _req$body2$lg === undefined ? null : _req$body2$lg,
      _req$body2$date_of_bi = _req$body2.date_of_birth,
      date_of_birth = _req$body2$date_of_bi === undefined ? null : _req$body2$date_of_bi,
      _req$body2$place_of_b = _req$body2.place_of_birth,
      place_of_birth = _req$body2$place_of_b === undefined ? null : _req$body2$place_of_b,
      _req$body2$phone_no = _req$body2.phone_no,
      phone_no = _req$body2$phone_no === undefined ? null : _req$body2$phone_no,
      _req$body2$blood_grou = _req$body2.blood_group,
      blood_group = _req$body2$blood_grou === undefined ? null : _req$body2$blood_grou,
      _req$body2$genotype = _req$body2.genotype,
      genotype = _req$body2$genotype === undefined ? null : _req$body2$genotype,
      _req$body2$address = _req$body2.address,
      address = _req$body2$address === undefined ? null : _req$body2$address,
      _req$body2$NIN_number = _req$body2.NIN_number,
      NIN_number = _req$body2$NIN_number === undefined ? null : _req$body2$NIN_number,
      _req$body2$next_of_ki = _req$body2.next_of_king,
      next_of_king = _req$body2$next_of_ki === undefined ? null : _req$body2$next_of_ki,
      _req$body2$next_of_ki2 = _req$body2.next_of_king_address,
      next_of_king_address = _req$body2$next_of_ki2 === undefined ? null : _req$body2$next_of_ki2,
      _req$body2$phone_no2 = _req$body2.phone_no2,
      phone_no2 = _req$body2$phone_no2 === undefined ? null : _req$body2$phone_no2,
      _req$body2$plate_numb = _req$body2.plate_number,
      plate_number = _req$body2$plate_numb === undefined ? null : _req$body2$plate_numb,
      _req$body2$classes_nu = _req$body2.classes_number,
      classes_number = _req$body2$classes_nu === undefined ? null : _req$body2$classes_nu,
      _req$body2$side_numbe = _req$body2.side_number,
      side_number = _req$body2$side_numbe === undefined ? null : _req$body2$side_numbe,
      _req$body2$phone_no3 = _req$body2.phone_no3,
      phone_no3 = _req$body2$phone_no3 === undefined ? null : _req$body2$phone_no3,
      _req$body2$name_of_co = _req$body2.name_of_company,
      name_of_company = _req$body2$name_of_co === undefined ? null : _req$body2$name_of_co;
  var _req$query$query_type2 = req.query.query_type,
      query_type = _req$query$query_type2 === undefined ? "create" : _req$query$query_type2;

  db.sequelize.query("call registered_rides(:id,:query_type,:name,:middle_name,:surname,:gender,:status,:nationality,:state_of_origin,:lg,:date_of_birth,:place_of_birth,:phone_no,:blood_group,:genotype,:address,:NIN_number,:next_of_king,:next_of_king_address,:phone_no2,:plate_number,:classes_number,:side_number,:phone_no3,:name_of_company,:qrcode)", {
    replacements: {
      id: id,
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
      query_type: query_type
    }
  }).then(function (results) {
    return res.json({ success: true, results: results });
  }).catch(function (err) {
    console.log(err);
    res.status(500).json({ success: false });
  });
};
//# sourceMappingURL=registered_rides.js.map