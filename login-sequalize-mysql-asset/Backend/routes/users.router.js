const { authJwt } = require ("../middleware");
const  controller  = require ("../controllers/user.controller");
const controllerAut = require("../controllers/auth.controller")
const  controllerAutView  = require ("../controllers/user.view.controller");


module.exports = function (app) {
    app.use(function(req, res, next) 
    {
      res.header (
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    }); 
    

    //Authorization

    app.get("/users/all", controllerAutView.allAccess);
    app.get("/users/user", controllerAutView.userBoard);
    app.get("/users/mod", controllerAutView.moderatorBoard);
    app.get("/users/admin", controllerAutView.adminBoard); 

    // Routes 

    app.post("/", controllerAut.createUser);
    app.get("/users", controller.findAllusers);
    app.get("/users/:id", controller.findOneUser);
    app.put("/users/:id", controller.UpdateUserInfo);
    app.delete("/users/:id", controller.deleteuser);
    app.delete("/users", controller.deleteAllusers);

  };