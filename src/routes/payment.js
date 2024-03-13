const { payment, getPayment } = require("../controllers/payment");
const config = require("../config/config");
// const { payment } = require("../controllers/payment");

module.exports = (app) => {
  app.post(
    "/payments",
    //    config.authRequest
    payment
  );
  app.get(
    "/getpayment",
    //    config.authRequest
    getPayment
  );

};
