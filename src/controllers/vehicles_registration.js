// const bcrypt from 'bcryptjs';
const db = require('../models');

module.exports.registerVehicle = async (req, res) => {
  const {
    query_type = 'insert',
    owner_id = null,
    lg_reg_no = null,
    engine_no = null,
    plate_no = null,
    vehicle_make = null,
    vehicle_model = null,
    engine_capacity = null ,
    chasis_no = null,
    date_issued = null ,
    state_registered = null,
    purchased_date = null,
    registered_lg = null,
    color = null,
    expiry_date = null,
  } = req.body;

  try {
    const resp = await db.sequelize.query(
      `CALL vehicles(
        :query_type,  
        :owner_id, 
        :lg_reg_no,
        :chasis_no, 
        :date_issued,
        :engine_no,
        :plate_no,
        :vehicle_make,
        :vehicle_model,
        :engine_capacity,
        :state_registered,
        :purchased_date,
        :registered_lg,
        :color,
        :expiry_date
      )`,
      {
        replacements: {
          query_type,
          owner_id,
          lg_reg_no,
          chasis_no,
          date_issued,
          engine_no,
          plate_no,
          vehicle_make,
          vehicle_model,
          engine_capacity,
          state_registered,
          purchased_date,
          registered_lg,
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
    lg_reg_no = null,
    engine_no = null,
    plate_no = null,
    vehicle_make = null,
    vehicle_model = null,
    engine_capacity = null ,
    chasis_no = null,
    date_issued = null ,
    state_registered = null,
    purchased_date = null,
    registered_lg = null,
    color = null,
    expiry_date = null,
  } = req.body;
  console.log(req.body,req.query)
const {query_type,vehicle_id=null,owner_id=null} = req.query
  try {
    const resp = await db.sequelize.query(
      `CALL vehicles(
        :query_type,  
        :owner_id, 
        :lg_reg_no,
        :engine_no, 
        :plate_no,
        :vehicle_make,
        :vehicle_model,
        :engine_capacity,
        :chasis_no,
        :date_issued,
        :state_registered,
        :purchased_date,
        :registered_lg,
        :color,
        :expiry_date
      )`,
      {
        replacements: {
          query_type,
          owner_id ,
          lg_reg_no,
          engine_no,
          plate_no,
          color,
          vehicle_make,
          vehicle_model,
          engine_capacity,
          chasis_no,
          date_issued,
          purchased_date,
          state_registered,
          registered_lg,
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
