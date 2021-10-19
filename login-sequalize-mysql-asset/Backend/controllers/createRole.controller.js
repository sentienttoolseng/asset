const { Role } = require("../models/role.model")

exports.createRole= (role) => {
    return User.create ({
        name: "super admin"
    }) . then((role) => {

        console.log(">> created user:" + JSON.stringify(role, null,4));
        return role;
    }).catch((err)=> {
        console.log(">> Error while creting user: ", err);
    });
}