// const bcrypt = require ('bcryptjs';)
const db = require("../models");

module.exports.superAgent = async (req, res) => {
  const {
    query_type = "insert",
    id = "",
    name,
    phone,
    email,
    address,
    vendor,
    state,
    lga,
  } = req.body;

  try {
    const resp = await db.sequelize.query(
      `CALL super_agent(:query_type, 
        :id, 
        :name,
            :phone,
            :email,
            :address,
            :vendor,
            :state,
            :lga)`,
      {
        replacements: {
          query_type,
          id,
          name,
          phone,
          email,
          address,
          vendor,
          state,
          lga,
        },
      }
    );

    res.status(200).json({ success: true, results: resp });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ success: false, error: "Failed to register super agent" });
  }
};

//  @ Get all superagent
//  @route GET /api/superagent
module.exports.getAllSuperAgent = async (req, res) => {
  db.sequelize
    .query(`select * from super_agent`)
    .then((resp) => res.status(500).json({ success: true, resp }))
    .catch((err) =>
      res
        .status(200)
        .json({ success: false, error: "failed to fetch super agent" })
    );
};
