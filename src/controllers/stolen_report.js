const db = require('../models');

module.exports.stolen = async (req, res) => {
    const {
      query_type = "insert",
      owners_name =null,
      owners_phone =null,
      plate_no = null,
      engine_no =null,
      chasis_no = null,
      vehicle_model =null,
      color =null,
      details= null
    } = req.body;
    console.log(req.body)
  
  
    try {
      const resp = await db.sequelize.query(
        `CALL stolen_vehicle(
            :query_type, 
            :owners_name,
            :owners_phone,
            :plate_no,
            :engine_no,
            :chasis_no,
            :vehicle_model,
            :color,
            :details)`,
        {
          replacements: {
            query_type,
            owners_name,
            owners_phone,
            plate_no,
            engine_no,
            chasis_no,
            vehicle_model,
            color,
            details
          },
        }
      );
  
      res.status(200).json({ success: true, results: resp });
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({ success: false, error: "Failed to register stolen vehicle" });
    }
    // } catch (err) {
    //   res.status(500).json({ success: false, error: "Internal error occured." });
    // }
  }

  module.exports.fetchStolen = async (req, res) => {
    const {
      query_type = "select",
      owners_name =null,
      owners_phone =null,
      plate_no = null,
      engine_no =null,
      chasis_no = null,
      vehicle_model =null,
      color =null,
      details= null
    } = req.body;
    console.log(req.body)
  
  
    try {
      const resp = await db.sequelize.query(
        `CALL stolen_vehicle(
            :query_type, 
            :owners_name,
            :owners_phone,
            :plate_no,
            :engine_no,
            :chasis_no,
            :vehicle_model,
            :color,
            :details)`,
        {
          replacements: {
            query_type,
            owners_name,
            owners_phone,
            plate_no,
            engine_no,
            chasis_no,
            vehicle_model,
            color,
            details
          },
        }
      );
  
      res.status(200).json({ success: true, results: resp });
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({ success: false, error: "Failed to register stolen vehicle" });
    }
    // } catch (err) {
    //   res.status(500).json({ success: false, error: "Internal error occured." });
    // }
  }