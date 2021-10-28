module.exports ={
    HOST:"localhost",
    USER: "root",
    PASSWORD: "Sentient1!",
    DB:"home",
    dialect: "mysql",
    pool: 
    {
        max:5,
        min:0,
        acquire: 30000,
        idle: 10000
    }
}