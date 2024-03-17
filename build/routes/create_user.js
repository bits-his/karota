"use strict";

var _require = require("../controllers/create_user"),
  create_user = _require.create_user,
  state_and_local_gvt = _require.state_and_local_gvt,
  getCreate_user = _require.getCreate_user;
var config = require("../config/config");
module.exports = function (app) {
  app.post("/create_users",
  //    config.authRequest
  create_user);
  app.get("/getCreate_user",
  //    config.authRequest
  getCreate_user);
  app.post("/state_and_local_gvt",
  //    config.authRequest
  state_and_local_gvt);
};
//# sourceMappingURL=create_user.js.map