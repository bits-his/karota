// const bcrypt from 'bcryptjs';
const db = require('../models');

module.exports.registerVehicle = async (req, res) => {
  const {
    query_type = 'insert',
    owners_name = null,
    owners_address = null,
    owners_phone = null,
    password = null,
    owners_email = null,
    owners_state = null,
    owners_lga = null,
    owners_dob = null,
    owners_nin = null,
    owner_next_of_kin = null,
    engine_no = null,
    plate_no = null,
    purchased_date = null,
    state_registered = null,
    registered_lg = null,
    driver_name = null,
    driver_nin = null,
    driver_phone = null,
    driver_email = null,
    driver_address = null,
    driver_dob = null,
    driver_state = null,
    driver_lga = null,
    driver_next_of_kin = null
  } = req.body;

  try {
    const resp = await db.sequelize.query(
      `CALL vehicles_registration(
        :query_type,
        :owners_name,
        :owners_address,
        :owners_phone,
        :password,
        :owners_email,
        :owners_state,
        :owners_lga,
        :owners_dob,
        :owners_nin,
        :owner_next_of_kin,
        :engine_no,
        :plate_no,
        :purchased_date,
        :state_registered,
        :registered_lg,
        :driver_name,
        :driver_nin,
        :driver_phone,
        :driver_email,
        :driver_address,
        :driver_dob,
        :driver_state,
        :driver_lga,
        :driver_next_of_kin)`,
      {
        replacements: {
          query_type,
          owners_name,
          owners_address,
          owners_phone,
          password,
          owners_email,
          owners_state,
          owners_lga,
          owners_dob,
          owners_nin,
          owner_next_of_kin,
          engine_no,
          plate_no,
          purchased_date,
          state_registered,
          registered_lg,
          driver_name,
          driver_nin,
          driver_phone,
          driver_email,
          driver_address,
          driver_dob,
          driver_state,
          driver_lga,
          driver_next_of_kin
        }
      }
    );

    res.status(200).json({ success: true, results: resp });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Failed to register vehicle' });
  }
};

//  @ Get all vendors
//  @route GET /vendors 
module.exports.getRegVehicles = async (req, res) => {
  const {
    query_type = 'select',
    id = null,
    owners_name = null,
    owners_address = null,
    owners_phone = null,
    owners_email = null,
    owners_state = null,
    owners_lga = null,
    owners_dob = null,
    vehicle_id = null,
    owner_id = null,
    engine_no = null,
    plate_no = null,
    purchased_date = null,
    registered_lg
  } = req.query;

  try {
    const resp = await db.sequelize.query(
      `CALL vehicles_registration(:query_type, 
        :id, 
        :owners_name,
        :owners_address,
         :owners_phone, 
         :owners_email, 
         :owners_state, 
         :owners_lga, 
         :owners_dob, 
         :vehicle_id,
         :owner_id,
         :engine_no,
          :plate_no, 
          :purchased_date,
          :registered_lg)`,
      {
        replacements: {
          query_type,
          id,
          owners_name,
          owners_address,
          owners_phone,
          owners_email,
          owners_state,
          owners_lga,
          owners_dob,
          vehicle_id,
          owner_id,
          engine_no,
          plate_no,
          purchased_date,
          registered_lg
        }
      }
    );

    res.status(200).json({ success: true, results: resp });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Failed to fetch vehicle' });
  }

};

//       }
//       res.json({ user })
//     })
//     .catch(err => res.status(500).json({ err }));
// };




