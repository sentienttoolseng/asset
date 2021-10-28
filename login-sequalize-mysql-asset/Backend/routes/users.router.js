const { authJwt } = require ("../middleware");
const  controller  = require ("../controllers/user.controller");


module.exports = function (app) {
    app.use(function(req, res, next) 
    {
      res.header (
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    }); 
  
    //var router = require("express").Router();
  
    // Create a new Tutorial
    app.post("/", controller.createUser);
    app.get("/users", controller.findAllusers);
    app.get("/users/:id", controller.findOneUser);
    app.put("/users/:id", controller.UpdateUserInfo);
    app.delete("/users/:id", controller.deleteuser);
    app.delete("/users", controller.deleteAllusers);


    
    //app.get("/", users.findAllusers);
    //app.get("/:id", users.findOneUser);
    //app.put("/:id", users.UpdateUserInfo);
    //app.delete("/:id", users.deleteuser);
    //app.delete("/", users.deleteAllusers);
    //router.post("/login",users.login);

  
    //app.use('/users', app);
  };