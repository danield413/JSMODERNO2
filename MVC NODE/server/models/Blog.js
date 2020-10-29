const Sequelize = require('sequelize');

const db = require('../config/database');

const Blog = db.define('blog' ,{
    nombre_post : {
        type: Sequelize.STRING
    },
    descripcion_post : {
        type: Sequelize.STRING
    },
    usuario_post : {
        type: Sequelize.STRING
    }
})

module.exports = Blog;