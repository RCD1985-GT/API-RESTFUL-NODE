const express = require('express');
const router = express.Router();

const PedidosController = require('../controllers/PedidosController');

// Nuevo pedido
router.post('/nuevopedido', PedidosController.nuevoPedido );
//http://localhost:3300/nuevoPedido


// Total de pedidos
router.get('/totalPedidos', PedidosController.totalPedidos);
//http://localhost:3300/totalPedidos

module.exports = router;