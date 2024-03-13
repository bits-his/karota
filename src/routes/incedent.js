const config = require('../config/config');
const { create_incident, getIncident } = require('../controllers/incident');

module.exports = (app) => {
    app.post(
        "/create_incident",
        create_incident
    )

    app.get(
        "/getIncident",
        getIncident
    )
}