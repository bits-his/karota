
const { stolen, fetchStolen } = require("../controllers/stolen_report");

module.exports = (app) => {
  // create a new superagent
  app.post(
    '/stolen/report',
    stolen
  );

    app.get('/stolen'
    ,fetchStolen);
}
