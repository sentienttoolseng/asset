'use strict';

module.exports = (sequelize, Sequelize ) => {

const Book = sequelize.define('book', {
    // Here we define our model attributes
    // Each attribute will pair to a column in our database

    // Our primaryKey, book id, our unique identifier
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true // Automatically gets converted to SERIAL for postgres
    },
    // A column for the title of our book
    title: {
        type: Sequelize.STRING,
        //allowNull: false
    },
    // A column for the author name 
    authorName: {
        type: Sequelize.STRING
        // remember allowNull defaults to true
        }
});

return Book; 
};

