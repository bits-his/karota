// const bcrypt from 'bcryptjs';
const db = require('../models');

module.exports.registerVehicle = async (req, res) => {
  const {
    query_type = 'insert',
    id = null,
    owner_id = null,
    lg_reg_no = null,
    engine_no = null,
    plate_no = null,
    manifacturer = null,
    manifacturing_date = null,
    purchased_date = null,
    state_registrered = null,
    registered_lg = null,
  } = req.body;

  try {
    const resp = await db.sequelize.query(
      `CALL vehicles_registration(
        :query_type,  
        :id, 
       :owner_id, 
       :lg_reg_no,
        :engine_no, 
       :plate_no, 
       :manifacturer,
        :manifacturing_date,
        :purchased_date, 
       :state_registrered,
        :registered_lg)`,
      {
        replacements: {
          query_type,
          id,
          owner_id,
          lg_reg_no,
          engine_no,
          plate_no,
          manifacturer,
          manifacturing_date,
          purchased_date,
          state_registrered,
          registered_lg
        }
      }
    );

    res.status(200).json({ success: true, data: resp });
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
    owner_id = null,
    lg_reg_no = null,
    engine_no = null,
    plate_no = null,
    manifacturer = null,
    manifacturing_date = null,
    purchased_date = null,
    state_registrered = null,
    registered_lg = null,
  } = req.query;

  try {
    const resp = await db.sequelize.query(
      `CALL vehicles_registration(
        :query_type,  
        :id, 
       :owner_id, 
       :lg_reg_no,
        :engine_no, 
       :plate_no, 
       :manifacturer,
        :manifacturing_date,
        :purchased_date, 
       :state_registrered,
        :registered_lg)`,
      {
        replacements: {
          query_type,
          id,
          owner_id,
          lg_reg_no,
          engine_no,
          plate_no,
          manifacturer,
          manifacturing_date,
          purchased_date,
          state_registrered,
          registered_lg
        }
      }
    );

    res.status(200).json({ success: true, data: resp });
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




