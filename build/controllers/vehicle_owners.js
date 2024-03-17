'use strict';

var db = require('../models');

module.exports.saveVehicleOwners = function (req, res) {
    var _req$body = req.body,
        _req$body$query_type = _req$body.query_type,
        query_type = _req$body$query_type === undefined ? null : _req$body$query_type,
        _req$body$id = _req$body.id,
        id = _req$body$id === undefined ? null : _req$body$id,
        _req$body$user_id = _req$body.user_id,
        user_id = _req$body$user_id === undefined ? null : _req$body$user_id,
        _req$body$name = _req$body.name,
        name = _req$body$name === undefined ? null : _req$body$name,
        _req$body$address = _req$body.address,
        address = _req$body$address === undefined ? null : _req$body$address,
        _req$body$phone = _req$body.phone,
        phone = _req$body$phone === undefined ? null : _req$body$phone,
        _req$body$email = _req$body.email,
        email = _req$body$email === undefined ? null : _req$body$email,
        _req$body$state = _req$body.state,
        state = _req$body$state === undefined ? null : _req$body$state,
        _req$body$lga = _req$body.lga,
        lga = _req$body$lga === undefined ? null : _req$body$lga,
        _req$body$password = _req$body.password,
        password = _req$body$password === undefined ? null : _req$body$password;

    db.sequelize.query('CALL vehicles_owners(\n            :query_type,\n            :id,\n            :user_id,\n            :name,\n            :address,\n            phone,\n            :email,\n            :state,\n            :lga,\n            :password\n        )', {
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
        res.status(200).json({ success: true, data: resp });
    }).catch(function (err) {
        console.error(err);
        res.status(500).json({ success: false, error: 'Operation Failed' });
    });
};

module.exports.getVehicleOwners = function (req, res) {
    var _req$body2 = req.body,
        _req$body2$query_type = _req$body2.query_type,
        query_type = _req$body2$query_type === undefined ? "select-all" : _req$body2$query_type,
        _req$body2$id = _req$body2.id,
        id = _req$body2$id === undefined ? null : _req$body2$id,
        _req$body2$user_id = _req$body2.user_id,
        user_id = _req$body2$user_id === undefined ? null : _req$body2$user_id,
        _req$body2$name = _req$body2.name,
        name = _req$body2$name === undefined ? null : _req$body2$name,
        _req$body2$address = _req$body2.address,
        address = _req$body2$address === undefined ? null : _req$body2$address,
        _req$body2$phone = _req$body2.phone,
        phone = _req$body2$phone === undefined ? null : _req$body2$phone,
        _req$body2$email = _req$body2.email,
        email = _req$body2$email === undefined ? null : _req$body2$email,
        _req$body2$state = _req$body2.state,
        state = _req$body2$state === undefined ? null : _req$body2$state,
        _req$body2$lga = _req$body2.lga,
        lga = _req$body2$lga === undefined ? null : _req$body2$lga,
        _req$body2$password = _req$body2.password,
        password = _req$body2$password === undefined ? null : _req$body2$password;

    db.sequelize.query('CALL vehicles_owners(\n            :query_type,\n            :id,\n            :user_id,\n            :name,\n            :address,\n            :phone,\n            :email,\n            :state,\n            :lga\n        )', {
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
        res.status(200).json({ success: true, data: resp });
    }).catch(function (err) {
        console.error(err);
        res.status(500).json({ success: false, error: 'Operation Failed ' });
    });
};
//# sourceMappingURL=vehicle_owners.js.map