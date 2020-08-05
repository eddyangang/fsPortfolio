var express = require("express");
// Requiring our models for syncing
var db = require("./models");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Set Handlebars.
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({
//     defaultLayout: "main"
// }));

// app.set("view engine", "handlebars");

require("./route/html-route.js")(app);
require("./route/api-route.js")(app);
db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on http://localhost:" + PORT);
    });
  });