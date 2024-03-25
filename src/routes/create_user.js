const { create_user, state_and_local_gvt, getCreate_user } = require("../controllers/create_user");
const config = require("../config/config");

module.exports = (app) => {
  app.post(
    "/create_users",
    //    config.authRequest
    create_user
  );
  app.get(
    "/getCreate_user",
    //    config.authRequest
    getCreate_user
  );
  app.post(
    "/state_and_local_gvt",
    //    config.authRequest
    state_and_local_gvt
  );
};
