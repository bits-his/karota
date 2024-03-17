// const bcrypt = require ('bcryptjs';)
const db = require('../models');

module.exports.createAgent = async (req, res) => {
  const {
    query_type = 'insert',
    id = null,
    name = null,
    phone = null,
    email = null,
    address = null,
    super_agent = null,
    state = null,
    lga = null,
    password = null,
    balance = null,
    service_location = null
  } = req.body;

  try {
    const resp = await db.sequelize.query(
      `CALL agents(
      :query_type,
      :id,
      :name,
      :phone,
      :email,
      :address,
      :super_agent,
      :state,
      :lga,
      :password,
      :balance,
      :service_location)`,
      {
        replacements: {
          query_type,
          id,
          name,
          phone,
          email,
          address,
          super_agent,
          state,
          lga,
          password,
          balance,
          service_location
        }
      }
    );

    res.status(200).json({ success: true, results: resp });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Failed to fetch agent' });
  }
};

//  @ Get all superagent
//  @route GET /superagent 
module.exports.fetchAgent = async (req, res) => {
  const {
    query_type = 'select',
    id = null,
    name = null,
    phone = null,
    email = null,
    address = null,
    super_agent = null,
    state = null,
    lga = null,
    password = null,
    balance = null,
    service_location = null
  } = req.query;

  try {
    const resp = await db.sequelize.query(
      `CALL agents(
      :query_type,
      :id,
      :name,
      :phone,
      :email,
      :address,
      :super_agent,
      :state,
      :lga,
      :password,
      :balance,
      :service_location)`,
      {
        replacements: {
          query_type,
          id,
          name,
          phone,
          email,
          address,
          super_agent,
          state,
          lga,
          password,
          balance,
          service_location
        }
      }
    );

    res.status(200).json({ success: true, results: resp });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Failed to fetch agent' });
  }
};
