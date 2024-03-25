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
    service_location = null,
    balance = null
  } = req.body;
console.log(req.body)
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
      :service_location,
      :balance)`,
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
          service_location,
          balance
        }
      }
    );

    res.status(200).json({ success: true, results: resp });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Failed to create agent' });
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
    service_location = null,
    balance = null
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
      :service_location,
      :balance)`,
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
          service_location,
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
