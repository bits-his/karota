const db = require ("../models");

const payment = (req, res) => {
  // const {  } = req.body;
  const {
    id = null,
    vehicle_id = null,
    amount = null,
    card_number = null,
    cvv = null,
    expiry_date = null,
  
  } = req.body;
  const { query_type = "create" } = req.query;
  db.sequelize
    .query(
      `call payment(:id,:query_type,:vehicle_id,:amount,:card_number,:cvv,:expiry_date)`,
      {
        replacements: {
          id,
          vehicle_id,
          query_type,
          amount,
          card_number,
          cvv,
          expiry_date,
        },
      }
    )
    .then((results) => res.json({ success: true, results }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ success: false });
    });
};

const getPayment = (req, res) => {
  // const {  } = req.body;
  const {
    id = null,
    vehicle_id = null,
    amount = null,
    card_number = null,
    cvv = null,
    expiry_date = null,
  
  } = req.query;
  const { query_type = "create" } = req.query;
  db.sequelize
    .query(
      `call payment(:id,:query_type,:vehicle_id,:amount,:card_number,:cvv,:expiry_date)`,
      {
        replacements: {
          id,
          vehicle_id,
          query_type,
          amount,
          card_number,
          cvv,
          expiry_date,
        },
      }
    )
    .then((results) => res.json({ success: true, results }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ success: false });
    });

};

export { payment, getPayment };
