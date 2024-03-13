// import bcrypt from 'bcryptjs';
import db from '../models';

export const registerDriver = async (req, res) => {
  const {
    query_type = 'insert',
    driver_id = '',
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
//  @route GET /api/vendors 
export const getAllDriver = async (req, res) => {
  db.sequelize
    .query(`select * from drivers`)
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


