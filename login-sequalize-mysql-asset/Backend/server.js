const express = require("express");
const cors = require ("cors");
const bcrypt = require("bcrypt"); 
const app = express();
 

const db = require("./models");
const User=db.User; 
//const Role = db.Role;


var corsOptions = {
    origin: "http://localhost:8080"
}

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const  Role = require ("./models/role.model");

db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });

let fname="hello";
let lname = "hello1";
let emails = "test@test.ca";
let phone = "7807807801";
let pwd = "12345678";

// Create a user
const user = {

    firstName: fname,
    lastName: lname,
    email: emails,
    phoneNumber: phone,
    password:  bcrypt.hashSync(pwd, 10) 
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


require('./routes/users.router')(app);

const PORT = process.env.PORT || 8080; 

app.listen(PORT, ()=> {console.log(`Server is running on PORT: ${PORT}`)});