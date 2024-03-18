
const { dashboardCards } = require("../controllers/dashboard_queries");

module.exports = (app) => {

    app.get('/fetchallcards'
    ,dashboardCards);
}



