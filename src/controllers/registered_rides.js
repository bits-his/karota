import db from "../models";

const registered_rides = (req, res) => {
  // const {  } = req.body;
  const {
    id = null,
    name= null,
    middle_name= null,
    surname= null,
    gender= null,
    status= null,
    nationality= null,
    state_of_origin= null,
    lg= null,
    date_of_birth= null,
    place_of_birth= null,
    phone_no= null,
    blood_group= null,
    genotype= null,
    address= null,
    NIN_number= null,
    next_of_king= null,
    next_of_king_address= null,
    phone_no2= null,
    plate_number= null,
    classes_number= null,
    side_number= null,
    phone_no3= null,
    name_of_company= null,
  } = req.body;
  const { query_type = "create" } = req.query;
  db.sequelize
    .query(
      `call registered_rides(:id,:query_type,:name,:middle_name,:surname,:gender,:status,:nationality,:state_of_origin,:lg,:date_of_birth,:place_of_birth,:phone_no,:blood_group,:genotype,:address,:NIN_number,:next_of_king,:next_of_king_address,:phone_no2,:plate_number,:classes_number,:side_number,:phone_no3,:name_of_company,:qrcode)`,
      {
        replacements: {
            name,
            middle_name,
            surname,
            gender,
            status,
            nationality,
            state_of_origin,
            lg,
            date_of_birth,
            place_of_birth,
            phone_no,
            blood_group,
            genotype,
            address,
            NIN_number,
            next_of_king,
            next_of_king_address,
            phone_no2,
            plate_number,
            classes_number,
            side_number,
            phone_no3,
            name_of_company,
            query_type,
        },
      }
    )
    .then((results) => res.json({ success: true, results }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ success: false });
    });
};


const getregistered_rides = (req, res) => {
  // const {  } = req.body;
  const {
    id = null,
    name= null,
    middle_name= null,
    surname= null,
    gender= null,
    status= null,
    nationality= null,
    state_of_origin= null,
    lg= null,
    date_of_birth= null,
    place_of_birth= null,
    phone_no= null,
    blood_group= null,
    genotype= null,
    address= null,
    NIN_number= null,
    next_of_king= null,
    next_of_king_address= null,
    phone_no2= null,
    plate_number= null,
    classes_number= null,
    side_number= null,
    phone_no3= null,
    name_of_company= null,
  } = req.body;
  const { query_type = "create" } = req.query;
  db.sequelize
    .query(
      `call registered_rides(:id,:query_type,:name,:middle_name,:surname,:gender,:status,:nationality,:state_of_origin,:lg,:date_of_birth,:place_of_birth,:phone_no,:blood_group,:genotype,:address,:NIN_number,:next_of_king,:next_of_king_address,:phone_no2,:plate_number,:classes_number,:side_number,:phone_no3,:name_of_company,:qrcode)`,
      {
        replacements: {
            id,
            name,
            middle_name,
            surname,
            gender,
            status,
            nationality,
            state_of_origin,
            lg,
            date_of_birth,
            place_of_birth,
            phone_no,
            blood_group,
            genotype,
            address,
            NIN_number,
            next_of_king,
            next_of_king_address,
            phone_no2,
            plate_number,
            classes_number,
            side_number,
            phone_no3,
            name_of_company,
            query_type,
        },
      }
    )
    .then((results) => res.json({ success: true, results }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ success: false });
    });
};



