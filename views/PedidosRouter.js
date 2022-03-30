const express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth");
const PedidosController = require('../controllers/PedidosController');

// Nuevo pedido
router.post('/nuevoPedido', PedidosController.nuevoPedido);
//http://localhost:3300/pedidos/nuevoPedido


// Total de pedidos
router.get('/totalPedidos', auth, PedidosController.totalPedidos);
//http://localhost:3300/pedidos/totalPedidos

module.exports = router;