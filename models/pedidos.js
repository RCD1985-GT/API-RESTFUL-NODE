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
      this.belongsTo(models.Peliculas, {
        foreignKey: 'peliculaId'
      });
      this.belongsTo(models.Usuario, {
        foreignKey: 'usuarioId'
      });
    }
  };

  Pedidos.init({
    peliculaId: DataTypes.INTEGER,
    usuarioId: DataTypes.INTEGER,
    precio: DataTypes.INTEGER, 
    fechaAlquiler: DataTypes.DATE, 
    fechaDevolucion: DataTypes.DATE 
  }, {
    sequelize,
    modelName: 'Pedidos',
  });
  return Pedidos;
};