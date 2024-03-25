const db = require('../models');


module.exports.saveVehicleOwners = (req, res) => {
    const {
        query_type = null,
        name = null,
        address = null,
        phone = null,
        email = null,
        state = null,
        lga = null,
        user_id = null

    } = req.body
    db.sequelize.query(`CALL vehicle_owners(
            :query_type,
            :name,
            :address,
            :phone,
            :email,
            :state,
            :lga
            :user_id,
            
        )`, {
        replacements: {
            query_type,
            name,
            address,
            phone,
            email,
            state,
            lga,
            user_id

        }
    })
        .then((resp) => {
            res.status(200).json({ success: true, data: resp });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ success: false, error: 'Operation Failed' });
        });
}




module.exports.getVehicleOwners = (req, res) => {
    const {
        query_type = "select-all",
        id = null,
        user_id = null,
        name = null,
        address = null,
        phone = null,
        email = null,
        state = null,
        lga = null,
   
    } = req.query
    db.sequelize.query(`CALL vehicle_owners(
            :query_type,
            :user_id,
            :name,
            :address,
            :phone,
            :email,
            :state,
            :lga
            
        )`, {
        replacements: {
            query_type,
            id,
            user_id,
            name,
            address,
            phone,
            email,
            state,
            lga
        }
    })
        .then((resp) => {
            res.status(200).json({ success: true, data: resp });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ success: false, error: 'Operation Failed ' });
        });
}
