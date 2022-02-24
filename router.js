const router = require('express').Router();


const res = require('express/lib/response');
const UsuarioRouter = require('./views/UsuarioRouter');
/*const PeliculasRouter = require('./views/PeliculasRouter');*/
/*const OrdersRouter = require('./views/OrdersRouter');*/
res.send('hola');
router.use('/usuarios', UsuarioRouter);
/*router.use('/peliculas', PeliculasRouter);*/
/*router.use('/orders', OrdersRouter);*/

module.exports = router;