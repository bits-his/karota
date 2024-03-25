const db = require('../models');
const moment = require('moment')

// Create Super Agent Top-Up
module.exports.createTopUp = async (req, res) => {
  const {query_type =null, source_id = null, destination_id = null,type_of_top_up = null, amount = null , } = req.query;
  console.log(req.query);
  try {
    const resp = await db.sequelize.query(
      `CALL top_up(
          :query_type, 
          :source_id,
          :destination_id,
          :type_of_top_up,
          :description,
          :debit,
          :credit,
          :t_date
        )`,
      {
        replacements: {
          query_type,
          source_id,
          destination_id,
          type_of_top_up,
          description,
          debit,
          amount,
          t_date: moment().format('YYYY-MM-DD')
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
