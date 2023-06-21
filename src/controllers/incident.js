import db from "../models";

export const create_incident = (req, res) => {
    const {
        id= null,
        user_name= null,
        type= null,
        description= null,
    } = req.body;
    const { query_type= "create" } = req.query;
    db.sequelize
      .query(
        `call incident(:id,:query_type,:user_name,:type,:description)`,
        {
            replacements: {
                id,
                query_type,
                user_name,
                type,
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
