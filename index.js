const express = require('express'); // DECLARO EXPRESS 
const app = express(); // DECLARO QUE APP USE EXPRESS
const cors = require('cors'); // ¿CORS PERMITE HACER PETICIONES AL SERVIDOR?--> VERIFICAR
const db = require('./db.js'); // ¿ QUE ES ESTO ?

const PORT = 3300; // DECLARO ROUTER

const router = require('./router'); 

let corsOptions = {// AQUI SE CONFIGURA LAS OPCIONES DE CORS
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
};

//Middleware
app.use(express.json()); // LE DICE A APP QUE LE PERMITA LEER FORMATO JSON
app.use(cors(corsOptions));  // LE DICE A APP QUE USE LAS OPCIONES DE CORS "GET,HEAD,PUT,PATCH,POST,DELETE


app.use(router); // LE DICE A APP QUE USE ROUTER


db.then(()=>{ // ¿ QUE ES ESTO ?
    app.listen(PORT, ()=> console.log(`Server on port ${PORT}`)); // AQUI CONECTA EN EL PUERTO 3300
})
.catch((err)=> console.log(err.message));
