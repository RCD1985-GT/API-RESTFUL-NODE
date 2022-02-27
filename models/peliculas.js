'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Peliculas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Peliculas.init({
    titulo: DataTypes.STRING,
    año: DataTypes.STRING,
    popularidad: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Peliculas',
  });
  return Peliculas;
};