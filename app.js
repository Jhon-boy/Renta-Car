const express = require('express')
const morgan = require('morgan')
const rutasController = require('./app/Routers/Rutas.routes')
const cors = require('cors')


const app = express()

//que entienda el puerto a escuchar
try {
    //Permite la comunicacion entre BACK y FRONT 
    app.use(cors());
    
    // Para que escuche cada cambio
    app.use(morgan('dev'))

    //Para que entienda que tiene que pasar archivos JSON
    app.use(express.json())

    //Que entienda el enrutado de los Links
    app.use(rutasController);


    app.listen(4000);
    console.log('****CONEXION CORRECTA EN PUERTO 4000*****');
} catch (error) {
    console.log('====Error en Conexion=======' + error.message);
}