const db = require('../models');


module.exports.fetchTH= (req, res) => {
    const {
        query_type = null,
        vehicle_id = null,
        agent_id = null,
        super_agent_id = null,
        vendor_id = null


    } = req.body
    db.sequelize.query(`CALL transaction_history(
            :query_type,
            :vehicle_id,
            :agent_id,
            :super_agent_id,
            :vendor_id 
        )`, {
        replacements: {
            query_type,
            vehicle_id,
            agent_id,
            super_agent_id,
            vendor_id
          

        }
    })
        .then((resp) => {
            res.status(200).json({ success: true, data: resp });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ success: false, error: 'Operation Failed' });
        });
}




// module.exports.transactionHistory = (req, res) => {
//     const {
//         query_type = "select-all",
//         id = null,
//         user_id = null,
//         name = null,
//         address = null,
//         phone = null,
//         email = null,
//         state = null,
//         lga = null,
   
//     } = req.query
//     db.sequelize.query(`CALL vehicle_owners(
//             :query_type,
//             :user_id,
//             :name,
//             :address,
//             :phone,
//             :email,
//             :state,
//             :lga
            
//         )`, {
//         replacements: {
//             query_type,
//             id,
//             user_id,
//             name,
//             address,
//             phone,
//             email,
//             state,
//             lga
//         }
//     })
//         .then((resp) => {
//             res.status(200).json({ success: true, data: resp });
//         })
//         .catch(err => {
//             console.error(err);
//             res.status(500).json({ success: false, error: 'Operation Failed ' });
//         });

