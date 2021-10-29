const { verifySignUp } = require ("../middleware");
const controller = require("../controllers/user.controller");
const controllerAuth = require("../controllers/auth.controller")

module.exports = function(app){
    app.use(function(req, res, next){
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin,Content-Type,Accept"
        );
        next();
    });

    app.post(
        "/users",
        [
            verifySignUp.checkDuplicateEmail,
            verifySignUp.checkRoleExisted
        ],
        controllerAuth.createUser
        );

        
        app.post("/auth/login", controllerAuth.login);
}