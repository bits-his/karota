import db from "../models";

export const create_incident = (req, res) => {
    const {
        id= null,
        user_name= null,
        type_of_incident= null,
        description= null,
    } = req.body;
    const { query_type= "create" } = req.query;
    db.sequelize
      .query(
        `call incident(:id,:query_type,:user_name,:type_of_incident,:description)`,
        {
            replacements: {
                id,
                query_type,
                user_name,
                type_of_incident,
                description,
            }
        }
      ) 
      .then((results) => {
        console.log(results)
        res.json({ success: true, results })})
      .catch((err) => {
        console.log(err);
        res.status(500).json({ success: false });
      });
};

export const getIncident = (req, res) => {
  const {
        id= null,
        user_name= null,
        type_of_incident= null,
        description= null,
  } = req.query;
  const { query_type= "create" } = req.query;
    db.sequelize
      .query(
        `call incident(:id,:query_type,:user_name,:type_of_incident,:description)`,
        {
            replacements: {
                id,
                query_type,
                user_name,
                type_of_incident,
                description,
            }
        }
      ) 
      .then((results) => {
        console.log(results)
        res.json({ success: true, results })})
      .catch((err) => {
        console.log(err);
        res.status(500).json({ success: false });
      });
};