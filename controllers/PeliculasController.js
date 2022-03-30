const { default: axios } = require("axios");
const { Pelicula } = require('../models/index'); 
const { Op } = require("sequelize");
const { compareSync } = require("bcrypt");


const PeliculasController = {};

// Funcion registraPelicula..FUNCIONA
PeliculasController.registraPelicula = (req, res) => {
    let titulo = req.body.titulo;
    let año = req.body.año;
    let popularidad = req.body.popularidad;
    let genero = req.body.genero;
    let poster = req.param.poster; 
    let sinopsis = req.param.sinopsis; 
    
   
    Pelicula.findAll({
        where: { titulo: titulo }
    }).then(peliculaRepetida => {
        if (peliculaRepetida == 0) {
            Pelicula.create({

                titulo: titulo,
                año: año,
                popularidad: popularidad,
                genero: genero,
                poster: poster,
                sinopsis: sinopsis
                
            }).then(pelicula => {
                res.send(`${pelicula.titulo} ha sido registrada`)
            }).catch((error) => {
                res.send(error);
            });
        } else {
            res.send("La pelicula ya esta registrada")
        }
    }).catch(error => {
        res.send(error)
    });
}; 


//Funcion trae Peliculas...FUNCIONA
PeliculasController.traePeliculas = (req, res) => { 
    Pelicula.findAll().then((Peliculas) => res.json(Peliculas));
};

// //Funcion trae Peliculas por genero...FUNCIONA
PeliculasController.traePeliculasGenero = (req, res) => { 
    Pelicula.findAll({ where: {genero : req.params.genero}}).then((Peliculas) => res.json(Peliculas));
};

// Funcion que trae las peliculas Top20...FUNCIONA
PeliculasController.traeTop20 = (req, res) => { 
    Pelicula.findAll({ order: [["popularidad", "DESC"],], limit : 20}).then((Peliculas) => {res.json(Peliculas)});
};

// Funcion que trae las peliculas Novedades...FUNCIONA
PeliculasController.traeNovedades = (req, res) => { 
    Pelicula.findAll({ order: [["año", "DESC"],], limit : 20}).then((Peliculas) => {res.json(Peliculas)});
};




module.exports = PeliculasController;