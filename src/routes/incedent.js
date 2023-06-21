const config = require('../config/config');
const { create_incident } = require('../controllers/incident');

module.exports = (app) => {
    app.post(
        "/api/create_incident",
        create_incident
    )
}