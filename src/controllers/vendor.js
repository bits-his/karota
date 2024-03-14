const bcrypt = require('bcryptjs');
const db = require('../models');

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
    contact_dob = null,
    contact_state = null,
    contact_password = null,
    contact_phone = null,
    contact_email = null,
    contact_lga = null,
  } = req.body;

  if (!contact_password) {
    return res.status(400).json({ success: false, error: 'Contact password is required' });
  }

  try {
    const hashedContactPassword = await bcrypt.hash(contact_password, 10);

    const resp = await db.sequelize.query(
      `CALL vendors(:query_type, :id, :vendor_name, :vendor_ofiice_address, :vendor_state, :vendor_lga, :vendor_phone, :vendor_email, :vendor_tin, :vendor_profile, :vendor_bn_rc, :contact_name, :contact_address, :contact_dob, :contact_state, :contact_password, :contact_phone, :contact_email, :contact_lga, :contact_vendor)`,
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

module.exports.getVendors = async (req, res) => {
  const {
    query_type = 'select',
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
    contact_dob = null,
    contact_state = null,
    contact_password = null,
    contact_phone = null,
    contact_email = null,
    contact_lga = null,
  } = req.query;

  if (!contact_password) {
    return res.status(400).json({ success: false, error: 'Contact password is required' });
  }

  try {
    const hashedContactPassword = await bcrypt.hash(contact_password, 10);

    const resp = await db.sequelize.query(
      `CALL vendors(:query_type, :id, :vendor_name, :vendor_ofiice_address, :vendor_state, :vendor_lga, :vendor_phone, :vendor_email, :vendor_tin, :vendor_profile, :vendor_bn_rc, :contact_name, :contact_address, :contact_dob, :contact_state, :contact_password, :contact_phone, :contact_email, :contact_lga, :contact_vendor)`,
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
          contact_dob,
          contact_state,
          contact_password: hashedContactPassword,
          contact_phone,
          contact_email,
          contact_lga,
          contact_vendor,
        }
      }
    );

    res.status(200).json({ success: true, results: resp });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Failed to get vendors' });
  }
};
