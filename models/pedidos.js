'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedidos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pedidos.init({
    peliculaId: DataTypes.STRING,
    usuarioId: DataTypes.STRING,
    precio: DataTypes.INTEGER, 
    fechaAlquiler: DataTypes.DATE, // ¿DATE ES CORRECTO?...CÓMO ESCRIBO UN DATE EN POSTAM¿?
    fechaDevolucion: DataTypes.STRING // ¿DATE ES CORRECTO?...CÓMO ESCRIBO UN DATE EN POSTAM¿?
  }, {
    sequelize,
    modelName: 'Pedidos',
  });
  return Pedidos;
};