module.exports = app => {
    const users = require("../controllers/user.controller");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", users.createUser);
    router.get("/", users.findAllusers);
    router.get("/:id", users.findOneUser);
    router.put("/:id", users.UpdateUserInfo);
    router.delete("/:id", users.deleteuser);
    router.delete("/", users.deleteAllusers);
  
    app.use('/users', router);
  };