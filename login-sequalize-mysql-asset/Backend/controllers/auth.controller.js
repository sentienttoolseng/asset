const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.createUser = (req, res) => {
    // Validate request
    if (!req.body.firstName) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a user
    const user = {
  
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      password:  hashSync(req.body.password, 10) 
    };
  
    // Save user in the database
    User.create(user)
      .then(user => {
       if(req.body.roles){
         Role.findAll({
           where: {
             name : {
               [Op.or]: req.body.roles
             }
           }
         }). then(roles => {
           user.setRoles(roles).then(() => {
             res.send({
               message: "User was registered successfully!"
              }); 
           });
         });
       } else 
       {
         user.setRoles([1]).then (() => {
           res.send({
             message: "User was registed sucessfully!"
           });
         });
       }
      }).catch(err => 
        {
          res.status(500).send({message: err.message});
        });
      };



exports.login =  (req,res) => {

    User.findOne ({
      where : {
        Email: req.body.email

      }
    })
    .then(user => {
      if(!user) {
        return res.status(404).send({message: "User Not Found."});
      }
        var passwordIsValid = compareSync (
          req.body.password,
          user.password
        );

        if(!passwordIsValid) {
          return res.status(401).send({
         accessToken: null,
         message: "Invalid Password!"       
          });
        }

    var token = jwt.sign ({id:user.id}, config.secret, {expiresIn:86400 }); //24 hrs 
    var authorities = [];

    user.getRoles().then(roles => {
      for ( let i=0; i < roles.length; i++)
      {
        authorities.push("ROLE_"+roles[i].name.toUpperCase());
      }

      res.status(200).send({
        id:user.id, 
        email: user.email,
        roles:authorities,
        accessToken:token
      });
    });
    })
    .catch (err => {
      res.status(500).send ({
        message: err.message
      });
    });

  };