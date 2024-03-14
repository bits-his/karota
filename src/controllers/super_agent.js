// const bcrypt = require ('bcryptjs';)
const db = require('../models');
const User = db.User;


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

//   @ Fetch a single super agent by ID
//   @route GET /api/superagent/:id
module.exports.fetchSuperAgent = async (req, res) => {
    const {
      query_type = "select",
      id = null,
      name = null,
      phone=null,
      email=null,
      address=null,
      vendor=null,
      state=null,
      lga=null,
    } = req.query;
  
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
  }