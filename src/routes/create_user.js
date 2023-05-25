const { create_user, getCreate_user } = require("../controllers/create_user");
const config = require("../config/config");

module.exports = (app) => {
  app.post(
    "/api/create_users",
    //    config.authRequest
    create_user
  );
  app.get(
    "/api/get_create_users",
    //    config.authRequest
    getCreate_user
  );
};
