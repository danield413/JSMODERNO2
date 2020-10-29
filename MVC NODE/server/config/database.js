const Sequelize = require('sequelize');

module.exports = new Sequelize('mvc', 'root', '', {
    host: '127.0.0.1',
    port: 3306 ,
    dialect: 'mysql',
    define : {
        timestamps: false
    },
    pool : {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 1000
    },
    operatosAliases : false
})