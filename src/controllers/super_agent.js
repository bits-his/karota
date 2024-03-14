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
//   @ Fetch a single super agent by ID
//   @route GET /api/superagent/:id
module.exports.fetchSingleSuperAgent = async (req, res) => {
  const { id } = req.params;
  if (!ObjectId.isValid(id)) return res.status(404).send("Invalid Id");

  db.super_agent
    .findOne({ where: { id: ObjectId(id) } })
    .then((result) => {
      if (!result) return res.status(404).send("No user with that ID");
      res.status(200) 
        .json({ success: true, data: result });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ success: false, error: err });
    });
};

//   @ Update Super Agent Information
//   @route PUT /api/superagent/:id
module.exports.updateSuperAgentInfo = async (req, res) => { 
  const { id } = req.params;
  const updates = req.body;

  // check validation
  const validateUpdate = await superagentValidation.validateUpdate(updates);
  if (!validateUpdate.valid)
    return res.status(400).send(validateUpdate.error.message);

  // find and update the record in database
  db.super_agent.update(updates, { where: { id: ObjectId(id) } })
    .then((updatedUser) => {
      if (!updatedUser[0]) return res.status(400).send("No User Found!");
      res.status(200).json({ 
        success: true, 
        count: updatedUser[0] ?.count,  
        data: updatedUser[0]?.dataValues  
      });
    })
    .catch((err) => {
      res.status(500).json({  
        success: false,  
        error: err.toString()   
      });
    });
};
