// import bcrypt from 'bcryptjs';
import db from '../models';

export const registerVehicle = async (req, res) => {
  const {
    query_type = 'insert',
    id = '',
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
  } = req.body;

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
    res.status(500).json({ success: false, error: 'Failed to register vehicle' });
  }
};

//  @ Get all vendors
//  @route GET /api/vendors 
export const getAllVehicle = async (req, res) => {
  db.sequelize
    .query(`select * from vehicle_registration`)
    .then((resp) => res.status(500).json({ success: true, resp }))
    .catch((err) => res.status(200).json({ success: false }));

};

//@   Get single vendor by id
//@route  GET /api/vendors/:id
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




