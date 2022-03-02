const { default: axios } = require("axios");
const { Pelicula } = require('../models/index'); // ¿PORQUE LLAMA A MODELS/INDEX.JS?
const { Op } = require("sequelize");
const { compareSync } = require("bcrypt");


const PeliculasController = {};


//Funcion traePeliculas
PeliculasController.traePeliculas = (req, res) => { // VERIFICAR FORMULA
    Pelicula.findAll().then((Peliculas) => res.json(Peliculas));
};


// Funcion registraPelicula
PeliculasController.registraPelicula = (req, res) => { // VERIFICAR FORMULA

};


module.exports = PeliculasController;