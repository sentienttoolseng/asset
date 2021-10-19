module.exports ={
    HOST:"localhost",
    USER: "root",
    PASSWORD: "ToEdmonton1!",
    DB:"home",
    dialect: "mariadb",
    pool: 
    {
        max:5,
        min:0,
        acquire: 30000,
        idle: 10000
    }
}