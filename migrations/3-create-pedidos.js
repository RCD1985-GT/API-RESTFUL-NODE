'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pedidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      peliculaId: {
        type: Sequelize.INTEGER
      },
      usuarioID: {
        type: Sequelize.INTEGER
      },
      precio: {
        type: Sequelize.INTEGER
      },
      fechaAlquiler: {
        type: Sequelize.DATE
      },
      fechaDevolucion: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pedidos');
  }
};