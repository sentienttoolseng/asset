const dbConfig = require("../config/db.config");
const Sequelize = require ("sequelize");

try {
const sequelize = new Sequelize (dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD,
    {
        host:dbConfig.HOST,
        port: 3303,
        dialect: dbConfig.dialect,
        dialectOptions: {connectTimeout: 1000} ,
        operatorsAliases: false,
        pool: {
            max:dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle:dbConfig.pool.idle
        }
    });

   
        sequelize.authenticate();
        console.log('Database Connection has been established successfully.');
      
    const db={};
    db.Sequelize = Sequelize;
    db.sequelize= sequelize;

    db.User = require ("./user.model")(sequelize,Sequelize);
    db.Role = require ("./role.model")(sequelize,Sequelize);
    db.Book = require ("./book.model")(sequelize,Sequelize);

    db.User.belongsToMany(db.Role,{ through: 'User_Profiles' });
    db.Role.belongsToMany(db.User,{ through: 'User_Profiles' });
    
    db.User.hasMany(db.Book, {foreignKey: 'userId'});
    db.Book.belongsTo(db.User);
   

    module.exports = db;
    } 
    catch (error) {
        console.error('Unable to connect to the database:', error);
      }
