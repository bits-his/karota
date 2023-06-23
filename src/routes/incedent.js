const config = require('../config/config');
const { create_incident, getIncident } = require('../controllers/incident');

module.exports = (app) => {
    app.post(
        "/api/create_incident",
        create_incident
    )
    
    app.get(
        "/api/getIncident",
        getIncident
    )
}