const router = require('express').Router();

const res = require('express/lib/response'); //¿ QUE ES ESTO ?

const UsuarioRouter = require('./views/UsuarioRouter'); // DICE A UsuarioRouter QUE REQUIERA LAS VISTAS DE UsuarioRouter
const PeliculasRouter = require('./views/PeliculasRouter');// DICE A PeliculasRouter QUE REQUIERA LAS VISTAS DE PeliculasRouter
const PedidosRouter = require('./views/PedidosRouter');// DICE A PedidosRouter QUE REQUIERA LAS VISTAS DE PeliculasRouter

router.use('/usuarios', UsuarioRouter); // DICE A ROUTER QUE EN /usuarios USE UsuarioRouter
router.use('/peliculas', PeliculasRouter); // DICE A ROUTER QUE EN /peliculas USE PeliculasRouter
router.use('/pedidos', PedidosRouter); // DICE A ROUTER QUE en /pedidos USE PedidosRouter

module.exports = router; //¿ QUE ES ESTO ?