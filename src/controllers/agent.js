// const bcrypt = require ('bcryptjs';)
const db = require('../models');

module.exports.createAgent = async (req, res) => {
  const {
    query_type = 'insert',
    id = null,
    name= null,
    phone_no= null,
    email= null,
    address= null,
    super_agent= null,
    state= null,
    lga=null,
  } = req.body;

  try {
    const resp = await db.sequelize.query(
      `CALL agent(:query_type, 
        :id, 
        :name,
        :phone_no,
        :email,
        :address,
        :super_agent,
        :state,
        :lga)`,
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
          lga
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
    name= null,
    phone_no= null,
    email= null,
    address= null,
    super_agent= null,
    state= null,
    lga=null,
  } = req.query;

  try {
    const resp = await db.sequelize.query(
      `CALL agent(:query_type, 
        :id, 
        :name,
        :phone_no,
        :email,
        :address,
        :super_agent,
        :state,
        :lga)`,
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
          lga
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