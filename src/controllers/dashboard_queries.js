const bcrypt = require('bcryptjs')
const db = require('../models');
const User = db.User;

module.exports.dashboardCards = async (req, res) => {
  const {
    query_type = "cards-counts",
  } = req.query;

  try {
    const resp = await db.sequelize.query(
      `CALL dashboard_cards(:query_type)`,
      {
        replacements: {
            query_type
        },
      }
    );


    res.json({ success: true, data: resp });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ success: false, error: "Failed to fetch data" });
  }
}