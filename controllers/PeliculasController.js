const { default: axios } = require("axios");
const { Pelicula } = require('../models/index'); 
const { Op } = require("sequelize");
const { compareSync } = require("bcrypt");


const PeliculasController = {};


//Funcion traePeliculas
PeliculasController.traePeliculas = (req, res) => { // VERIFICAR FORMULA
    Pelicula.findAll().then((Peliculas) => res.json(Peliculas));
};

//Funcion trae peliculas por genero
PeliculasController.traePeliculas = (req, res) => { // VERIFICAR FORMULA
    Pelicula.findAll().then((Peliculas) => res.json(Peliculas));
};

// Funcion registraPelicula
PeliculasController.registraPelicula = (req, res) => { // VERIFICAR FORMULA

};



module.exports = PeliculasController;