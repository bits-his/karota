const bcrypt = require('bcryptjs')
const db = require('../models');
const User = db.User;


module.exports.superAgent = async (req, res) => {
  const {
    query_type = "insert",
    id = null,
    name = null,
    phone = null,
    email = null,
    address = null,
    vendor = null,
    state = null,
    lga = null,
    nin = null
  } = req.body;
  console.log(req.body)


  try {
    const resp = await db.sequelize.query(
      `CALL super_agents(:query_type, 
        :id, 
        :name,
            :phone,
            :email,
            :address,
            :vendor,
            :state,
            :lga,
            :nin)`,
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
          nin
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
  // } catch (err) {
  //   res.status(500).json({ success: false, error: "Internal error occured." });
  // }
}

//   @ Fetch a single super agent by ID
//   @route GET /api/superagent/:id
module.exports.fetchSuperAgent = async (req, res) => {
  const {
    query_type = "select_all",
    id = null,
    name = null,
    phone = null,
    email = null,
    address = null,
    vendor = null,
    state = null,
    lga = null,
    nin = null
  } = req.query;

  try {
    const resp = await db.sequelize.query(
      `CALL super_agents(:query_type, 
        :id, 
        :name,
            :phone,
            :email,
            :address,
            :vendor,
            :state,
            :lga,
            :nin)`,
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
          nin
        },
      }
    );


    res.json({ success: true, results: resp });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ success: false, error: "Failed to fetch super agent" });
  }
}