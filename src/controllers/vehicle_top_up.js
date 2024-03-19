// const bcrypt = require ('bcryptjs';)
const db = require('../models');
const moment = require('moment')

module.exports.createTopUp = async (req, res) => {
   const {
     agent_id = null,
     vehicle_id = null,
     amount =null
 
    } = req.body;
 console.log(req.body)
  try {
    const resp = await db.sequelize.query(
      `CALL vehicle_top_up(
      :agent_id,
      :amount,
      :t_date,
    
      :vehicle_id
     )`,
      {
        replacements: {
          agent_id,
          amount,
          t_date:moment().format('YYYY-MM-DD'),
          vehicle_id
        }
      }
    );

    res.status(200).json({ success: true, results: resp });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Failed to create topup' });
  }
};

//  @ Get all superagent
//  @route GET /superagent 
module.exports.fetchTopUp = async (req, res) => {
  const {
    id = null,
    name = null,

    super_agent = null,

  } = req.query;

  try {
    const resp = await db.sequelize.query(
      `CALL agents(
      :id,
      :name,
      :super_agent,
      )`,
      {
        replacements: {
          query_type,
          id,
          name,
       
          super_agent,
         
        }
      }
    );

    res.status(200).json({ success: true, results: resp });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Failed to fetch vehicle topup' });
  }
};
