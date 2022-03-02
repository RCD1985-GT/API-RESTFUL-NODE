const express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth");
const isAdmin = require("../middlewares/isAdmin");

const UsuarioController = require('../controllers/UsuarioController');

//CRUD 

//Leer todos los usuarios-READ
router.get('/', auth, isAdmin,  UsuarioController.traeUsuarios); 
//http://localhost:3000/usuarios


//Registro-CREATE
router.post('/registro', UsuarioController.registraUsuario);
//http://localhost:3300/usuarios/registro

//Modificar datos de un Usuario-UPDATE
router.put('/actualizar', auth, UsuarioController.actualizaPerfil); 
//http://localhost:3300/usuarios/actualizar

//Borramos a todos los usuarios-DELETE
router.delete('/borrar', auth, isAdmin, UsuarioController.borraUsuarios);
//http://localhost:3300/usuarios/borrar

//Borramos usuarios por id-DELETE
router.delete('/:id', auth, isAdmin, UsuarioController.borraUsuarioPorId); 
//http://localhost:3300/borrarId


//Login
router.post('/login', UsuarioController.loginUsuario);
//https://localhost:3000/usuarios/login


module.exports = router;