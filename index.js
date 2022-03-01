const express = require('express'); // DECLARO EXPRESS
const app = express(); // DECLARO QUE APP USE EXPRESS
const cors = require('cors'); // DECLARO CORS
const db = require('./db.js'); 

const PORT = 3300; // DECLARO ROUTER

const router = require('./router'); 

let corsOptions = {//CONFIGURO OPCIONES DE CORS
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
};

//Middleware
app.use(express.json()); //PUEDO OBTENER JSON DEL BODY
app.use(cors(corsOptions));  //USO CORS


app.use(router);


db.then(()=>{
    app.listen(PORT, ()=> console.log(`Server on port ${PORT}`)); //Conectado a la base de datos
})
.catch((err)=> console.log(err.message));
