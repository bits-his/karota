
const { dashboardCards } = require("../controllers/dashboard_queries");

module.exports = (app) => {
// fetch all dashboard card
    app.get('/fetchallcards'
    ,dashboardCards);
}



