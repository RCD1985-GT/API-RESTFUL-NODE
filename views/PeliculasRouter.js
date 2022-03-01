
const { Router } = require('express');
const express = require('express');
const router = express.Router();

const PeliculasController = require('../controllers/PeliculasController');


//CRUD 

//Registro de una peli nueva-CREATE
router.post('/registrarPelicula', PeliculasController.registraPelicula); // necesito auth¿?
//http://localhost:3300/registrarPelicula

//Leer todas las peliculas-READ
router.get('/peliculas', PeliculasController.traePeliculas);// necesito auth¿?
//http://localhost:3300/peliculas



module.exports = router;