var db = require("../models");

module.exports = function(app) {
  // Find all Authors and return them to the user with res.json
 app.get("/api/projects", (req, res) => {
    
    db.Projects.findAll({order: [
        ["date", "DESC"]
      ]}).then( data => res.json(data))
 })

 app.post("/api/post", (req, res) => {
    db.Projects.create( req.body ).then( () => res.sendStatus(200))
 })

};
