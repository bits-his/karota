import db from "../models";

export const createVendor = (req, res) => {
  const {
    query_type="insert",
    id="",
    vendor_name = "",
    vendor_ofiice_address = "",
    vendor_state = "",
    vendor_lga = "",
    vendor_org_phone = "",
    vendor_org_email = "", 
    vendor_tin = "", 
    vendor_profile = "", 
    vendor_bn_rc = "",
    contact_name='',
    contact_address='',
    contact_dob='',
    contact_state='',
    contact_password='',
    contact_phone='',
    contact_email='',
    contact_lga='',
    contact_vendor=''

  } = req.body;
  console.log(req.body)
  db.sequelize
    .query(
      `call vendors(:query_type,:id,:vendor_name,:vendor_ofiice_address,:vendor_state,:vendor_lga,:vendor_org_phone,:vendor_org_email,:vendor_tin,:vendor_profile,:vendor_bn_rc,:contact_name,:contact_address,:contact_dob,:contact_state,:contact_password,:contact_phone,:contact_email,:contact_lga,:contact_vendor)`,
      {
        replacements:{
            query_type,id,vendor_name,vendor_ofiice_address,vendor_state,vendor_lga,vendor_org_phone,vendor_org_email,vendor_tin,vendor_profile,vendor_bn_rc,contact_name,contact_address,contact_dob,contact_state,contact_password,contact_phone,contact_email,contact_lga,contact_vendor
        }
      })
    .then((resp) => res.status(500).json({ success: true, results: resp }))
    .catch((err) =>
      res.status(200).json(() => {
        console.log(err);
        success: 0;
      })
    );
};

