const db = require("../models"); // models path depend on your structure
const {genSaltSync, hashSync, compareSync}  = require('bcrypt');
const jwt = require("jsonwebtoken");
const { userController} = require("./createRole.controller");
const dbConfig = require("../config/db.config");
const config = require("../config/auth.config");
const { Role } = require("../models");

const User = db.User;
const Op = db.Sequelize.Op; 

exports.getUser = (req, res) => {
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
      password: req.body.password
    };
  
    // Save user in the database
    User.create(user)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  };

  exports.findAllusers = (req,res) => {

    const fullName = req.query.FullName;
    var condition = fullName ? {fullName: { [Op.like] : `%${fullName}%`}}: null;
    
    User.findAll ({where : condition})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send ({
            message:
            err.message || "Some error occurred while retreiving user"
        });
    });
    
    };
    
    exports.findOneUser = (req,res) => {

        
        const id = req.params.id;
    
        User.findByPk(id)
        .then(data => {
        if(data)
        {
            res.send(data);
        }
        else {
            res.status(404).send({
                message: `cannot find user with id=${id}`
            });
        }
        })
        .catch(err => {
            res.status(500).send({
                message:"Error retrieving user with id =" +id
            });
        });
    
    };

    exports.UpdateUserInfo = (req, res) => {

        const id = req.params.id;
        URLSearchParams.update(req.body, {
            where: { id: id }
        })
        .then (num => {
            if(num == 1) {
    
                res.send ({
    
                    message: "User was updated sucessfully."
                });
            } else {
                res.send(500).send ({
                    message: `Cannot update user with id=${id}. Maybe user was not found or req.body is empty!`
                });
            } 
        })
        .catch(err => {
            res.status(500).send({
                message: `Error updating user with id =  + ${id}`
            });
        });
    };

    exports.deleteuser = (req, res) => {

        const id = req.params.id;
    
        User.destroy({
          where: { id: id }
        })
          .then(num => {
            if (num == 1) {
              res.send({
                message: "user was deleted successfully!"
              });
            } else {
              res.send({
                message: `Cannot delete user with id=${id}. Maybe user was not found!`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Could not delete user with id=" + id
            });
          });
    
    };

    exports.deleteAllusers = (req,res) => {

        Tutorial.destroy({
            where: {},
            truncate: false
          })
            .then(nums => {
              res.send({ message: `${nums} user were deleted successfully!` });
            })
            .catch(err => {
              res.status(500).send({
                message:
                  err.message || "Some error occurred while removing all users."
              });
            });
    
    };
  

     



