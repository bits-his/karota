const express = require("express");
const passport = require("passport");
const bodyParser = require("body-parser");
const cors = require("cors");
const models = require("./models");
// const express = require('express');
// const passport = require('passport');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const models = require('./models')

const app = express();

app.use(bodyParser.json());

let port = process.env.PORT || 44405;

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + "/public"));

app.use(cors());

// force: true will drop the table if it already exits
// models.sequelize.sync({ force: true }).then(() => {
models.sequelize.sync().then(() => {
  console.log("Drop and Resync with {force: true}");
});

// passport middleware
app.use(passport.initialize());

// passport config
require("./config/passport")(passport);

//default route
app.get('/', (req, res) => res.send('Hello my World'));

require('./routes/user.js')(app);
require('./routes/create_user.js')(app);
require('./routes/incedent.js')(app);
require('./routes/payment.js')(app);
require('./routes/vendors.js')(app);
require('./routes/vehicles_registration.js')(app);
require('./routes/drivers.js')(app);
require('./routes/super_agents.js')(app);
require('./routes/agents.js')(app);
require('./routes/vehicle_owners.js')(app);
//require('./routes/vehicle_top_up.js')(app);
require('./routes/dashboard_queries.js')(app);
require('./routes/top_up.js')(app);
require('./routes/transaction_history.js')(app);
//require('./routes/agent_top_up.js')(app);


// any routes not specified get sent here
app.all("/*", function (req, res) {
  res.status(404).send("This route does not exist");
});

//create a server
var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("App listening at http://%s:%s", host, port);
});