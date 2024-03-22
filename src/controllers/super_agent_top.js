const db = require('../models');
const moment = require('moment')

// Create Super Agent Top-Up
module.exports.createTopUp = async (req, res) => {
    const { vendor_id = null, super_agent_id = null, amount = null } = req.body;
    console.log(req.body);
    try {
      const resp = await db.sequelize.query(
        `CALL super_agent_top_up(
          :vendor_id,
          :amount,
          :t_date,
          :super_agent_id
        )`,
        {
          replacements: {
            vendor_id,
            amount,
            t_date: moment().format('YYYY-MM-DD'),
            super_agent_id
          }
        }
      );
  
      res.status(200).json({ success: true, results: resp });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, error: 'Failed to create super agent top up' });
    }
  };
  
  
  // Fetch Super Agent Top-Up
  module.exports.fetchTopUp = async (req, res) => {
    const { id = null, name = null, super_agent = null } = req.query;
  
    try {
      const resp = await db.sequelize.query(
        `CALL agents(
          :id,
          :name,
          :super_agent
        )`,
        {
          replacements: {
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
  