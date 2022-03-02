'use strict';

module.exports = {
  //titulo,año,popularidad,createdAt,updatedAt
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('peliculas', [
      {"titulo":"Beethoven","año":"9/24/2021","popularidad":9,"createdAt":"2021/10/8","updatedAt":"2021/10/10"},
      {"titulo":"Liability, The","año":"5/19/2021","popularidad":8,"createdAt":"2021/10/8","updatedAt":"2021/10/10"},
      {"titulo":"Forever Young","año":"9/14/2021","popularidad":4,"createdAt":"2021/10/8","updatedAt":"2021/10/10"},
      {"titulo":"The Gruffalo's Child","año":"12/12/2021","popularidad":7,"createdAt":"2021/10/8","updatedAt":"2021/10/10"},
      
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
