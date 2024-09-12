const bcrypt = require('bcryptjs');
const db = require('../models');
const { User } = require('../models');

module.exports.createVendor = async (req, res) => {
  const {
    query_type = 'insert',
    id = null,
    vendor_name = null,
    vendor_ofiice_address = null,
    vendor_state = null,
    vendor_lga = null,
    vendor_phone = null,
    vendor_email = null,
    vendor_tin = null,
    vendor_profile = null,
    vendor_bn_rc = null,
    contact_name = null,
    contact_address = null,
    contact_state = null,
    contact_phone = null,
    contact_email = null,
    contact_lga = null,
    vendor_id = null,

  } = req.body;

  // if (!contact_password) {
  //   return res.status(400).json({ success: false, error: 'Contact password is required' });
  // }

  try {
    // const hashedContactPassword = await bcrypt.hash(contact_password, 10);

    const resp = await db.sequelize.query(
      `CALL vendors(
        :query_type, 
        :id, 
        :vendor_name, 
        :vendor_ofiice_address, 
        :vendor_state, 
        :vendor_lga, 
        :vendor_phone, 
        :vendor_email, 
        :vendor_tin, 
        :vendor_profile, 
        :vendor_bn_rc, 
        :contact_name, 
        :contact_address, 
        :contact_state, 
        :contact_phone, 
        :contact_email, 
        :contact_lga,
        :vendor_id,
        :contact_password)`,

      {
        replacements: {
          query_type,
          id,
          vendor_name,
          vendor_ofiice_address,
          vendor_state,
          vendor_lga,
          vendor_phone,
          vendor_email,
          vendor_tin,
          vendor_profile,
          vendor_bn_rc,
          contact_name,
          contact_address,
          contact_state,
          contact_password:'', // hashedContactPassword,
          contact_phone,
          contact_email,
          contact_lga,
          vendor_id

        }
      }
    );

    res.status(200).json({ success: true, results: resp });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Failed to create vendor' });
  }
};

// module.exports.createUserAdmin = async (req, res) => {
//   const {
//     query_type = 'insert_user',
//     id = null,
//     vendor_ofiice_address = null,
//     vendor_state = null,
//     vendor_lga = null,
//     vendor_phone = null,
//     vendor_email = null,
//     vendor_tin = null,
//     vendor_profile = null,
//     vendor_bn_rc = null,
//     contact_name = null,
//     contact_address = null,
//     contact_state = null,
//     contact_password = null,
//     contact_phone = null,
//     contact_email = null,
//     contact_lga = null,
//     vendor_id = null,
//     user_name= null,
//     accessTo = null,
//     functionalities = null

//   } = req.body;

//   try {

//     const resp = await db.sequelize.query(
//       `CALL vendors(
//         :query_type, 
//         :id, 
//         :vendor_ofiice_address, 
//         :vendor_state, 
//         :vendor_lga, 
//         :vendor_phone, 
//         :vendor_email, 
//         :vendor_tin, 
//         :vendor_profile, 
//         :vendor_bn_rc, 
//         :contact_name, 
//         :contact_address, 
//         :contact_state, 
//         :contact_password,
//         :contact_phone, 
//         :contact_email, 
//         :contact_lga,
//         :vendor_id,
//         :user_name,
//         :accessTo,
//         :functionalities
//         )`,

//       {
//         replacements: {
//           query_type,
//           id,
//           vendor_ofiice_address,
//           vendor_state,
//           vendor_lga,
//           vendor_phone,
//           vendor_email,
//           vendor_tin,
//           vendor_profile,
//           vendor_bn_rc,
//           contact_name,
//           contact_address,
//           contact_state,
//           contact_password, 
//           contact_phone,
//           contact_email,
//           contact_lga,
//           vendor_id,
//           user_name,
//           accessTo,
//           functionalities

//         }
//       }
//     );

//     res.status(200).json({ success: true, results: resp });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ success: false, error: 'Failed to create vendor' });
//   }
// };

exports.createUserAdmin = async (req, res) => {
  try {
    const {
      contact_name,
      user_name,
      contact_email,
      contact_phone,
      contact_password,
      vendor_id,
      accessTo,
      functionalities
    } = req.body;

    // Ensure the password is not undefined
    if (!contact_password) {
      return res.status(400).json({ message: 'Password is required' });
    }

    // Hash password (use 10 salt rounds)
    const hashedPassword = await bcrypt.hash(contact_password, 10);

    // Call the stored procedure
    await db.sequelize.query(
      `CALL createUser(:contact_name, :user_name, :contact_email, :contact_phone, :contact_password, :vendor_id, :accessTo, :functionalities)`,
      {
        replacements: {
          contact_name,
          user_name,
          contact_email,
          contact_phone,
          contact_password: hashedPassword,
          vendor_id: vendor_id || null,  // Handle null values
          accessTo: accessTo || "",
          functionalities: functionalities || ""
        },
        type: db.sequelize.QueryTypes.RAW
      }
    );

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Error creating user', error });
  }
};

exports.getAllUsers = async (req, res, next) => {
  try {
    // Fetch all users from the database
    const users = await User.findAll();

    // Send users as the response
    res.status(200).json({
      success: true,
      results: users
    });
  } catch (error) {
    // Pass the error to the next middleware (e.g., error handler)
    next(error);
  }
};


module.exports.getVendors = async (req, res) => {
  const {
    query_type = "",
    id = null,
    vendor_name = null,
    vendor_ofiice_address = null,
    vendor_state = null,
    vendor_lga = null,
    vendor_phone = null,
    vendor_email = null,
    vendor_tin = null,
    vendor_profile = null,
    vendor_bn_rc = null,
    contact_name = null,
    contact_address = null,
    contact_state = null,
    contact_phone = null,
    contact_email = null,
    contact_lga = null,
    vendor_id = null,
    contact_password = null
  } = req.query;
  try {
    const resp = await db.sequelize.query(
      `CALL vendors(
        :query_type, 
        :id, 
        :vendor_name, 
        :vendor_ofiice_address, 
        :vendor_state, 
        :vendor_lga, 
        :vendor_phone, 
        :vendor_email, 
        :vendor_tin, 
        :vendor_profile, 
        :vendor_bn_rc, 
        :contact_name, 
        :contact_address, 
        :contact_state, 
        :contact_phone, 
        :contact_email, 
        :contact_lga,
        :vendor_id,
        :contact_password)`,
      {
        replacements: {
          query_type,
          id,
          vendor_name,
          vendor_ofiice_address,
          vendor_state,
          vendor_lga,
          vendor_phone,
          vendor_email,
          vendor_tin,
          vendor_profile,
          vendor_bn_rc,
          contact_name,
          contact_address,
          contact_state,
          contact_phone,
          contact_email,
          contact_lga,
          vendor_id,
          contact_password
        }
      }
    );

    res.status(200).json({ success: true, results: resp });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Failed to get vendors' });
  }
};
