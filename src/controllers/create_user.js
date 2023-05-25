import db from "../models";

const create_user = (req, res) => {
  // const {  } = req.body;
  const {
    id = null,
    // query_type=null,
    name = null,
    middle_name = null,
    surname = null,
    gender = null,
    status = null,
    natinality = null,
    state_of_origin = null,
    date_of_birth = null,
    place_of_birth = null,
    phone_number = null,
    next_of_king = null,
    next_of_king_address = null,
    phone_no2 = null,
    plate_number = null,
    classes_number = null,
    phone_no3 = null,
    name_of_company,
  } = req.body;
  const { query_type = "" } = req.query;
  db.sequelize
    .query(
      `call location_route(:id,:query_type,:name,:middle_name,:surname,:gender,:status,:natinality,:state_of_origin,:date_of_birth,:place_of_birth,:phone_number,:next_of_king,:next_of_king_address,:phone_no2,:plate_number,:classes_number,:phone_no3,:name_of_company)`,
      {
        replacements: {
          id,
          query_type,
          name,
          middle_name,
          surname,
          gender,
          status,
          natinality,
          state_of_origin,
          date_of_birth,
          place_of_birth,
          phone_number,
          next_of_king,
          next_of_king_address,
          phone_no2,
          plate_number,
          classes_number,
          phone_no3,
          name_of_company,
        },
      }
    )
    .then((results) => res.json({ success: true, results }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ success: false });
    });
};

// const getCreate_user = (req, res) => {
//   db.sequelize
//     .query(`SELECT id,query_type,location,route`)

//     .then((results) => res.json({ success: true, results }))
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({ success: false });
//     });
// };

export { create_user, getCreate_user };
