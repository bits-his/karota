// const bcrypt from 'bcryptjs';
const db = require('../models');

module.exports.registerVehicle = async (req, res) => {
  const {
    query_type = 'insert',
    id = null,
    owner_id = null,
    lg_reg_no= null,
    pin= null,
    engine_no= null,
    plate_no= null,
    color= null,
    vehicle_make= null,
    vehicle_model= null,
    engine_capacity= null,
    chasis_no= null,
    date_issued= null,
    purchased_date= null,
    state_registered= null,
    registered_lg= null,
    expiry_date= null,
  } = req.body;

  try {
    const resp = await db.sequelize.query(
      `CALL vehicles(
        :query_type,  
        :id, 
        :owner_id, 
        :lg_reg_no,
        :engine_no, 
        :plate_no,
        :color,
        :pin, 
        :vehicle_make,
        :vehicle_model,
        :state_registered,
        :purchased_date,
        :registered_lg,
        :balance,
        :expiry_date
      )`,
      {
        replacements: {
          query_type,
          id,
          owner_id,
          lg_reg_no,
          engine_no,
          plate_no,
          pin,
          vehicle_make,
          vehicle_model,
          state_registered,
          purchased_date,
          registered_lg,
          balance,
          color,
          expiry_date
        }
      }
    );

    res.status(200).json({ success: true, data: resp });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Failed to register vehicle' });
  }
};

// Get all registered vehicles
module.exports.getRegVehicles = async (req, res) => {
  const {
    query_type = 'select',
    id = null,
    vehicle_id = null,
    owner_id = null,
    lg_reg_no = null,
    engine_no = null,
    plate_no = null,
    pin = null,
    vehicle_make = null,
    vehicle_model = null,
    state_registered = null,
    purchased_date = null,
    registered_lg = null,
    balance = null,
    color = null,
    expiry_date = null,
  } = req.query;

  try {
    const resp = await db.sequelize.query(
      `CALL vehicles(
        :query_type,
        :id,  
        :vehicle_id, 
        :owner_id, 
        :lg_reg_no,
        :engine_no,
        :plate_no, 
        :pin,
        :vehicle_make,
        :vehicle_model,
        :state_registered,
        :purchased_date,
        :registered_lg,
        :balance,
        :color,
        :expiry_date
      )`,
      {
        replacements: {
          query_type,
          id,
          vehicle_id,
          owner_id,
          lg_reg_no,
          engine_no,
          plate_no,
          pin,
          vehicle_make,
          vehicle_model,
          state_registered,
          purchased_date,
          registered_lg,
          balance,
          color,
          expiry_date
        }
      }
    );

    res.status(200).json({ success: true, data: resp });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Unable to fetch vehicle' });
  }
};
