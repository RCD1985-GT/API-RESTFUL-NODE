const express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth");/* AL ACTIVAR ESTAS 2 LINEAS FALLA*/
const isAdmin = require("../middlewares/isAdmin");

const UsuarioController = require('../controllers/UsuarioController');

//CRUD 

//Leer todos los usuarios-READ
router.get('/', auth,  UsuarioController.traeUsuarios); 
//http://localhost:3000/usuarios


router.get('/email/:email', auth, UsuarioController.traerUsuarioEmail);
router.get('/:id', auth, UsuarioController.traerUsuarioId);

//Registro-CREATE
router.post('/', UsuarioController.registraUsuario);
//http://localhost:3000/usuarios

//Modificar datos de un Usuario-UPDATE
router.put('/newpassword', auth, UsuarioController.updatePassword);
router.put('/:id', auth, UsuarioController.updateProfile);


//Borramos a todos los usuarios-DELETE
router.delete('/', isAdmin, UsuarioController.deleteAll);

//Borramos a todos los usuarios-DELETE
router.delete('/:id', auth, UsuarioController.deleteById);



//Login
router.post('/login', UsuarioController.logUsuario);
//https://localhost:3000/usuarios/login


module.exports = router;