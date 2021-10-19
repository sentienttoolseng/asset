'use strict';

module.exports = (sequelize, Sequelize ) => {

    const Role = sequelize.define('role', {
      // Model attributes are defined here
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true // Automatically gets converted to SERIAL for postgres
        
        // allowNull defaults to true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      }
     
    });
    return Role;
    };
    