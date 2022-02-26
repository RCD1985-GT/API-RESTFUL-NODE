const router = require('express').Router();

const res = require('express/lib/response');

const UsuarioRouter = require('./views/UsuarioRouter');


router.use('/usuarios', UsuarioRouter);

module.exports = router;