const express = require('express');
const router = express.Router();

//controladores 
const blogController = require('../controllers/blogController');
const contactoController = require('../controllers/contactoController');


module.exports = function() {
    router.get('/', (req,res) => {
        res.render('inicio')
    })

    router.get('/contacto', (req,res) => {
        res.render('contacto')
    })
    

    router.get('/sobre-nosotros', (req,res) => {
        res.render('sobre-nosotros')
    })

    router.get('/blog', blogController.mostrarPosts);

    router.post('/contacto' , contactoController.enviarMensaje );


    return router;
}