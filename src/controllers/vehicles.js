import db from '../models';


export const vehicleReg = (req, res) => {
    db.sequelize.query(`CALL vehicle_registration()`)
}