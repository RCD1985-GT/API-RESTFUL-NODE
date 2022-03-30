
const { Router } = require('express');
const express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth");
const isAdmin = require("../middlewares/isAdmin");
const PeliculasController = require('../controllers/PeliculasController');




//Registro de una peli nueva   ...FUNCIONA CON AUTH
router.post('/registrarPelicula', auth, PeliculasController.registraPelicula); 
//http://localhost:3300/peliculas/registrarPelicula

//Leer todas las peliculas...FUNCIONA 
router.get('/', PeliculasController.traePeliculas);
//http://localhost:3300/peliculas

//Leer peliculas por genero...FUNCIONA 
router.get('/:genero', PeliculasController.traePeliculasGenero);
//http://localhost:3300/peliculas/:genero

//Leer peliculas Top20...FUNCIONA ..DA FALLO
router.get('/top20', PeliculasController.traeTop20);
//http://localhost:3300/peliculas/top20

//Leer peliculas Novedades...FUNCIONA ..DA FALLO
router.get('/novedades', PeliculasController.traeNovedades);
//http://localhost:3300/peliculas/novedades




module.exports = router;