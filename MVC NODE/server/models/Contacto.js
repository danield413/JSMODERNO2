const Sequelize = require('sequelize');

const db = require('../config/database');

const Contacto = db.define('mensaje',{

 
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    }
})

module.exports = Contacto;