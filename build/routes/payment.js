"use strict";

var _require = require("../controllers/payment"),
  payment = _require.payment,
  getPayment = _require.getPayment;
var config = require("../config/config");
// const { payment } = require("../controllers/payment");

module.exports = function (app) {
  app.post("/payments",
  //    config.authRequest
  payment);
  app.get("/getpayment",
  //    config.authRequest
  getPayment);
};
//# sourceMappingURL=payment.js.map