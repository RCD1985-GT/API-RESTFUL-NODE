
const { Order } = require('../models/index');


const PedidosController = {};

PedidosController.nuevoPedido = (req,res) => {
    
    let body = req.body;

    console.log("este es body",body)

    Pedidos.create({
        precio: body.precio,
        peliculaId: body.peliculaId,
        usuarioId: body.usuarioId,
        fecha: body.fecha
    })
    .then(pedidos => {
        if(pedidos){
            res.send(pedido)
        }else{
            res.send("La creación de un nuevo pedido ha fallado");
        }
    })
    .catch((error => {
        res.send(error)
    }))
}

PedidosController.allOrders = async (req,res) => {

    let consulta = `SELECT usuarios.name AS nombre, peliculas.titulo AS titulo , peliculas.popularity AS top_rated, usuarios.nickname AS Nick, usuarios.email AS correo
    FROM usuarios INNER JOIN orders 
    ON usuarios.id = orders.usuarioId INNER JOIN peliculas 
    ON peliculas.id = orders.peliculaId WHERE popularity > 6 AND name LIKE '%Ra%' ORDER BY top_rated DESC`; 

    let resultado = await pedido.sequelize.query(consulta,{
        type: pedido.sequelize.QueryTypes.SELECT});

    if(resultado){
        res.send(resultado);
    }

}
module.exports = PedidosController;