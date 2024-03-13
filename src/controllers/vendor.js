const bcrypt = require ('bcryptjs');
const db = require ('../models');

export const createVendor = async (req, res) => {
  const {
    query_type = 'insert',
    id = '',
    vendor_name = '',
    vendor_ofiice_address = '',
    vendor_state = '',
    vendor_lga = '',
    vendor_org_phone = '',
    vendor_org_email = '',
    vendor_tin = '',
    vendor_profile = '',
    vendor_bn_rc = '',
    contact_name = '',
    contact_address = '',
    contact_dob = '',
    contact_state = '',
    contact_password = '',
    contact_phone = '',
    contact_email = '',
    contact_lga = '',
    contact_vendor = ''
  } = req.body;

  try {
    const hashedContactPassword = await bcrypt.hash(contact_password, 10);

    const resp = await db.sequelize.query(
      `CALL vendors(:query_type, :id, :vendor_name, :vendor_ofiice_address, :vendor_state, :vendor_lga, :vendor_org_phone, :vendor_org_email, :vendor_tin, :vendor_profile, :vendor_bn_rc, :contact_name, :contact_address, :contact_dob, :contact_state, :contact_password, :contact_phone, :contact_email, :contact_lga, :contact_vendor)`,
      {
        replacements: {
          query_type,
          id,
          vendor_name,
          vendor_ofiice_address,
          vendor_state,
          vendor_lga,
          vendor_org_phone,
          vendor_org_email,
          vendor_tin,
          vendor_profile,
          vendor_bn_rc,
          contact_name,
          contact_address,
          contact_dob,
          contact_state,
          contact_password: hashedContactPassword,
          contact_phone,
          contact_email,
          contact_lga,
          contact_vendor
        }
      }
    );

    res.status(200).json({ success: true, results: resp });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Failed to create vendor' });
  }
};

//  @ Get all vendors
//  @route GET /api/vendors 
export const getAllVendors = async (req, res) => {
  db.sequelize
    .query(`select * from vendors`)
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





// export const getSingleVendor = async (req, res) => {
//   const { id } = req.params;

//   // Validate ID format
//   if (!ValidateIdFormat.test(id)) return res.status(400).json({ success: false, error: "Invalid ID Format" });
//   if (!ValidateIdFormat.validate(id)) return res.status(400).json({ success: false, error: "Invalid ID Format" });
//   if (!ValidateIdFormat.validate(id)) {
//     return res.status(400).json({
//       success: false,
//       error: "Invalid ID Format",
//     });
// }
// }
// export const fetchVendor = (req, res) => {
//     db.sequelize
//       .query(`select * from vendors`)
//       .then((resp) => res.status(500).json({ success: true, resp }))
//       .catch((err) => res.status(200).json({ success: false }));
//   };
