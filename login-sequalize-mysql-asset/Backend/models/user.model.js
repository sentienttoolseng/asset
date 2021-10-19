
'use strict';

module.exports = (sequelize, Sequelize ) => {


const User = sequelize.define('user', {
  // Model attributes are defined here
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true // Automatically gets converted to SERIAL for postgres
    
    // allowNull defaults to true
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
    // allowNull defaults to true
  },
  email: {
    type: Sequelize.STRING
    // allowNull defaults to true
  },
  phoneNumber:{
    type: Sequelize.STRING
    // allowNull defaults to true
  },
  password : {
    type: Sequelize.STRING
    // allowNull defaults to true
  }

 
});
return User;
};
