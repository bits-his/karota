const { saveVehicleOwners, getVehicleOwners } = require('../controllers/vehicle_owners')

module.exports = (app) => {
    // create a new vehicle-owner
    app.post(
        '/vehicle-owners/create',
        saveVehicleOwners
    );
    // select all vehicle-owners from the database.
    app.get('/vehicle-owners',
        getVehicleOwners);
};
