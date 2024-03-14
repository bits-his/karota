import db from '../models';


module.exports.vehicleReg = (req, res) => {
    const {
        query_type = null,
        id = null,
        owers_name = null,
        owners_addrss = null,
        owners_phone = null,
        owners_email = null,
        owners_state = null,
        owners_lga = null,
        owners_dob = null,
        vehicle_id = null,
        owner_id = null,
        engine_n = null,
        plate_no = null,
        purchase_date = null,
        registered_lg = null,
    } = req.body
    db.sequelize.query(`CALL vehicles_registration
        (:query_type,
        :id,
        :owers_name,
        :owners_addrss,
        :owners_phone,
        :owners_email,
        :owners_state,
        :owners_lga,
        :owners_dob ,
        :vehicle_id,
        :owner_id,
        :engine_n,
        :plate_no,
        :purchase_date,
        :registered_lg
        )`, {
        replacements: {
            query_type,
            id,
            owers_name,
            owners_addrss,
            owners_phone,
            owners_email,
            owners_state,
            owners_lga,
            owners_dob,
            vehicle_id,
            owner_id,
            engine_n,
            plate_no,
            purchase_date,
            registered_lg,
        }
    })
        .then((resp) => {
            res.status(200).json({ success: true, data: resp });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ success: false, error: 'Failed to create vendor' });
        });
}
