const db = require('../models');
const moment = require('moment')

// Create Super Agent Top-Up
module.exports.createTopUp = async (req, res) => {
  const { query_type = null, source_id = null, destination_id = null, type_of_top_up = null,
    amount = null, date_from = null, date_to = null, balance = null } = req.body;
  console.log(req.body, 'iojdtkgdklg');
  try {
    const resp = await db.sequelize.query(
      `CALL top_up(
          :query_type, 
          :source_id,
          :type_of_top_up,
          :destination_id,
          :amount,
          :t_date,
          :date_from,
          :date_to,
          :balance
        )`,
      {
        replacements: {
          query_type,
          source_id,
          destination_id,
          type_of_top_up,
          amount,
          date_from,
          date_to,
          t_date: moment().format('YYYY-MM-DD'),
          balance

        }
      }
    );
    //const transactionIdResp = await db.sequelize.query('SELECT @transaction_id AS transaction_id');
    //const transactionId = resp[0].transaction_id;

    res.status(200).json({ success: true, result: resp });
    //res.status(200).json({ success: true, results: resp });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Failed to create super agent top up' });
  }
};


// Fetch Super Agent Top-Up
module.exports.fetchTopUp = async (req, res) => {
  const { query_type = null, source_id = null, date_from = null, date_to = null } = req.body;

  try {
    const resp = await db.sequelize.query(
      `CALL top_up_history(
        :query_type, 
        :source_id,
        :date_from,
        :date_to
        )`,
      {
        replacements: {
          query_type,
          source_id,
          date_from,
          date_to
        }
      }
    );

    res.status(200).json({ success: true, results: resp });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Failed to fetch vehicle topup' });
  }
};

// Fetch Super Agent Top-Up
module.exports.fetchBalance = async (req, res) => {
  const { query_type = null, source_id = null, date_from = null, date_to = null } = req.query;

  try {
    const resp = await db.sequelize.query(
      `CALL top_up_history(
        :query_type, 
        :source_id,
        :date_from,
        :date_to
        )`,
      {
        replacements: {
          query_type,
          source_id,
          date_from,
          date_to
        }
      }
    );
    console.log(resp);
    res.status(200).json({ success: true, results: resp });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Failed to fetch vehicle topup' });
  }
};

module.exports.newTopUp = async (req, res) => {
  try {
    const resp = await db.sequelize.query(
      `CALL daily_top_up()`,
      {
        replacements: {}
      }
    );

    res.status(200).json({ success: true, results: resp, message: "vehicles debitted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Failed to fetch vehicle topup' });
  }
};
