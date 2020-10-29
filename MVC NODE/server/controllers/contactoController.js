const Contacto = require('../models/Contacto');


exports.enviarMensaje = (req, res) => {

    let {correo, mensaje} = req.body
    console.log(req.body);

    let errores = [];
    if(!correo) {
        errores.push({'mensaje' : 'Agrega tu Correo'})
    }
    if(!mensaje) {
        errores.push({'mensaje' : 'Agrega tu Mensaje'})
    }

    //revisar por errores
    if(errores.length > 0){
        //muestra la vista con errores
        res.render('contacto', {
            errores,
            correo,
            mensaje
        })
    } else {
    //almacena en la BD
    Contacto.create({
        correo ,
        mensaje 
    })
    .then(contacto => res.redirect('/contacto'))
    .catch(error => console.log(error))
    }
}