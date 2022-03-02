const express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth");
const PedidosController = require('../controllers/PedidosController');

// Nuevo pedido
router.post('/nuevoPedido', auth, PedidosController.nuevoPedido);
//http://localhost:3300/nuevoPedido


// Total de pedidos
router.get('/totalPedidos', auth, PedidosController.totalPedidos);
//http://localhost:3300/totalPedidos

module.exports = router;