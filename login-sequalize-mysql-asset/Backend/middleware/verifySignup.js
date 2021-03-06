const db = require("../models");
const userModel = require("../models/user.model");
const ROLES = db.Role;
const User=db.User;

checkDuplicateEmail = (req,res, next) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if(user){
            res.status(400).send ({
                message: "Failed Email is already in use!"
            })
            return; 
        }
        next(); 
    });
};


checkRoleExisted = (req, res, next) => {
    if(req.body.roles) {
        for(let i=0; i < req.body.roles.length; i++){
            if(!ROLES.includes(req.body.roles[i])) {
                res.status(400).send ({
                    message: "Failed! Role does not exist = " + req.body.roles[i]
                });
                return;
            }
        }
    }
    next();
}; 

const verifySignUp = {
    checkDuplicateEmail: checkDuplicateEmail,
    checkRoleExisted: checkRoleExisted
}

module.exports = verifySignUp; 