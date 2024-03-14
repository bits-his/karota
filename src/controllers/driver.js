// const bcrypt = require ('bcryptjs';)
const db = require('../models');

module.exports.registerDriver = async (req, res) => {
  const {
    query_type = 'insert',
    driver_id =null,
    name=null,
    nin=null,
    phone=null,
    email=null,
    address=null,
    dob=null,
    state=null,
    lga=null,
    next_of_kin=null,
    vehicle_id=null,
  } = req.body;

  try {
    const resp = await db.sequelize.query(
      `CALL drivers(:query_type, 
        :driver_id, 
        :name,
            :nin,
            :phone,
            :email,
            :address,
            :dob,
            :state,
            :lga,
           	:next_of_kin,
            :vehicle_id)`,
      {
        replacements: {
          query_type,
          driver_id,
          name,
          nin,
          phone,
          email,
          address,
          dob,
          state,
          lga,
          next_of_kin,
          vehicle_id
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
module.exports.getAllDriver = async (req, res) => {
  const {
    query_type = 'select',
    driver_id =null,
    name=null,
    nin=null,
    phone=null,
    email=null,
    address=null,
    dob=null,
    state=null,
    lga=null,
    next_of_kin=null,
    vehicle_id=null,
  } = req.query;

  try {
    const resp = await db.sequelize.query(
      `CALL drivers(:query_type, 
        :driver_id, 
        :name,
            :nin,
            :phone,
            :email,
            :address,
            :dob,
            :state,
            :lga,
           	:next_of_kin,
            :vehicle_id)`,
      {
        replacements: {
          query_type,
          driver_id,
          name,
          nin,
          phone,
          email,
          address,
          dob,
          state,
          lga,
          next_of_kin,
          vehicle_id
        }
      }
    );

    res.status(200).json({ success: true, results: resp });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Failed to fetch vehicle' });
  }
};


// };


