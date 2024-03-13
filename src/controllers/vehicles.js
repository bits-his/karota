import db from '../models';


module.exports.vehicleReg = (req, res) => {
    db.sequelize.query(`CALL vehicle_registration()`)
}