// const bcrypt = require ('bcryptjs';)
const db = require('../models');
const moment = require('moment')

module.exports.createTopUp = async (req, res) => {
   const {
     super_agent_id = null,
     agent_id = null,
     amount =null
 
    } = req.body;
 console.log(req.body)
  try {
    const resp = await db.sequelize.query(
      `CALL agent_top_up(
        :super_agent_id,
        :amount,
        :t_date,
        :agent_id
     )`,
      {
        replacements: {
          super_agent_id,
          amount,
          t_date:moment().format('YYYY-MM-DD'),
          agent_id
        }
      }
    );

    res.status(200).json({ success: true, results: resp });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Failed to create agent top up' });
  }
};

module.exports.fetchTopUp = async (req, res) => {
  const {
    id = null,
    name = null,
    super_agent = null,
  } = req.query;
git 
  try {
    const resp = await db.sequelize.query(
      `CALL agent_top_up(
      :id,
      :name,
      :super_agent
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
    res.status(500).json({ success: false, error: 'Failed to agent top up' });
  }
};
