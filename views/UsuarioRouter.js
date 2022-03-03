const express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth"); // DICE QUE auth utilice el middleware auth
const isAdmin = require("../middlewares/isAdmin");// DICE QUE isAdmin utilice el middleware isAdmin

const UsuarioController = require('../controllers/UsuarioController'); // 

//CRUD 

//Leer todos los usuarios-READ
router.get('/', auth, isAdmin,  UsuarioController.traeUsuarios); 
//http://localhost:3000/usuarios

//Registro un usuario-CREATE
router.post('/registro', UsuarioController.registraUsuario);
//http://localhost:3300/usuarios/registro

//Modificar un Usuario-UPDATE
router.put('/actualizar', auth, UsuarioController.actualizaPerfil); 
//http://localhost:3300/usuarios/actualizar

//Borrar todos los usuarios-DELETE
router.delete('/borrar', auth, isAdmin, UsuarioController.borraUsuarios);
//http://localhost:3300/usuarios/borrar

//Borrar usuarios por id-DELETE
router.delete('/:id', auth, isAdmin, UsuarioController.borraUsuarioPorId); 
//http://localhost:3300/usuarios/id


//Login
router.post('/login', UsuarioController.loginUsuario);
//https://localhost:3000/usuarios/login


module.exports = router;