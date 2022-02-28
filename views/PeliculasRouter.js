
const { Router } = require('express');
const express = require('express');
const router = express.Router();

const PeliculasController = require('../controllers/PeliculasController');


//CRUD 

//Registro de una peli nueva-CREATE
router.post('/', PeliculasController.registraPelicula);
//http://localhost:3000/peliculas

//Leer todas las peliculas-READ
router.get('/', PeliculasController.traePeliculas);
//http://localhost:3000/peliculas




module.exports = router;