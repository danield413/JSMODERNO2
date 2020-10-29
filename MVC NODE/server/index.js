//importar express y algunas dependencias
const express = require('express');
const path = require('path');
const routes = require('./routes');
const bodyParser = require('body-parser')

//instanciar express
const app = express();

//conectar a la base de datos (models)
const db = require('./config/database');
db.authenticate()
    .then(() => console.log('DB conectada'))
    .catch(error => console.log(error))


//habilitar pug
app.set('view engine', 'pug');

//añadir las vistas
app.set('views' , path.join(__dirname, './views'));

//cargar una carpeta estaticas (public)
app.use(express.static('public'));

//ejecutamos el body-parser
app.use(bodyParser.urlencoded({extended: true}))

//cargar rutas
app.use('/', routes() );

app.listen(3000 , () => console.log('servidor funcionando'));

//pagina de error 404
app.get('*',function(req,res){ res.render('error404'); } );