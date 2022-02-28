const express = require('express');
const router = express.Router();

const PedidosController = require('../controllers/PedidosController');

// Nuevo pedido
router.post('/', PedidosController.nuevoPedido );

// Total de pedidos
router.get('/', PedidosController.totalPedidos);

module.exports = router;