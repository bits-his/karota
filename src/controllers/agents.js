// const bcrypt = require ('bcryptjs';)
const db = require('../models');

module.exports.createAgent = async (req, res) => {
  const {
    query_type = 'insert',
    id = null,
    name = null,
    phone_no = null,
    email = null,
    address = null,
    super_agent = 1,
    state = null,
    lga = null,
    service_location = null,
    balance = null,
    password = null,
  } = req.body;

  if (!password) {
    return res.status(400).json({ success: false, error: 'Password is required' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const resp = await db.sequelize.query(
      `CALL agents(:query_type, 
        :id, 
        :name,
        :phone_no,
        :email,
        :address,
        :super_agent,
        :state,
        :lga,
        :service_location,
        :password,
        :balance)`,
      {
        replacements: {
          query_type,
          id,
          name,
          phone_no,
          email,
          address,
          super_agent,
          state,
          lga,
          service_location,
          password: hashedPassword,
          balance
        }
      }
    );

    res.status(200).json({ success: true, results: resp });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Failed to register agent' });
  }
};

//  @ Get all superagent
//  @route GET /superagent 
module.exports.fetchAgent = async (req, res) => {
  const {
    query_type = 'select',
    id = null,
    name = null,
    phone_no = null,
    email = null,
    address = null,
    super_agent = null,
    state = null,
    lga = null,
    service_location = null,
    balance = null,
    password = null
  } = req.query;

  try {
    const resp = await db.sequelize.query(
      `CALL agents(:query_type, 
        :id, 
        :name,
        :phone_no,
        :email,
        :address,
        :super_agent,
        :state,
        :lga,
        :service_location,
        :password,
        :balance)`,
      {
        replacements: {
          query_type,
          id,
          name,
          phone_no,
          email,
          address,
          super_agent,
          state,
          lga,
          service_location,
          password,
          balance
        }
      }
    );

    res.status(200).json({ success: true, results: resp });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Failed to fetch agent' });
  }
};







// http://localhost:34567/superagent?id=2&query_type=select