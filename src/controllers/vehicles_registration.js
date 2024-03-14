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
      `CALL vehicles_registration(:query_type, 
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
module.exports.getAllVehicles = async (req, res) => {
  db.sequelize
    .query(`select * from vehicle_registration`)
    .then((resp) => res.status(200).json({ success: true, data: resp[0] }))
    .catch((err) => res.status(500).json({ success: false }));

};

//@   Get single vendor by id
//@route  GET /vendors/:id
// const findById = (req, res) => {
//   const id = req.params.userId;

//   User.findAll({ where: { id } })
//     .then(user => {
//       if(!user.length) {
//         return res.json({ msg: 'user not found'})
//       }
//       res.json({ user })
//     })
//     .catch(err => res.status(500).json({ err }));
// };




