// const bcrypt = require ('bcryptjs';)
const db = require('../models');

module.exports.createAgent = async (req, res) => {
  const {
    query_type = 'insert',
    id = '',
    name,
    phone_no,
    email,
    address,
    super_agent,
    state,
    lga
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
module.exports.getAllAgent = async (req, res) => {
  db.sequelize
    .query(`select * from agent`)
    .then((resp) => res.status(500).json({ success: true, resp }))
    .catch((err) => res.status(200).json({ success: false, error: 'failed to fetch agent' }));

};


