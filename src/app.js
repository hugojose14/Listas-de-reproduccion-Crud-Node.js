//Requeriendo el modulo de express para montar mi servidor
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

//Connect database 

mongoose.connect('mongodb://localhost/reproductor',(err)=>{

    if(err) console.log(`Error en la conexion: ${err}`);
    else console.log('Base de datos conectada');
})

//Importando rutas
const indexRoutes = require('./routes/index');

//setting
//Decirle que nuestra aplicación va a definir un puerto 
//decirle que tome el puerto del computador 
//variable('port', el valor que toma esa variable)
app.set('port',process.env.PORT || 4000);
app.set('views', path.join(__dirname,'views'));
//el motor de plantilla que vamos a utilizar
app.set('view engine', 'ejs');


//middlewares 
//requerir morgan y darle un nombre dev
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));


//routes
app.use('/',indexRoutes);

//Starting server
app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`);
})
