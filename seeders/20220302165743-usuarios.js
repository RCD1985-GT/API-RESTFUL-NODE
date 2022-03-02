'use strict';
 
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('usuarios', [ // QUITO BCRYPT PARA COMPROBAR QUE FUNCIONA "password":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds))
      {"nombre":"Katleen","apellido":"Tomasello","email":"ktomasello0@tripadvisor.com","edad":10,"password":"1234","rol":true,"createdAt":"2021-12-17","updatedAt":"2021-05-31"},
      {"nombre":"Aleece","apellido":"Bernon","email":"abernon1@posterous.com","edad":100,"password":"1234","rol":true,"createdAt":"2021-12-29","updatedAt":"2021-11-26"},
      {"nombre":"Renault","apellido":"Fluit","email":"rfluit2@google.fr","edad":63,"password":"1234","rol":false,"createdAt":"2021-05-18","updatedAt":"2022-02-11"},
      {"nombre":"Clevey","apellido":"Probyn","email":"cprobyn3@ask.com","edad":58,"password":"1234","rol":false,"createdAt":"2021-12-04","updatedAt":"2021-07-16"},
      {"nombre":"Christan","apellido":"Plewes","email":"cplewes4@skyrock.com","edad":22,"password":"1234","rol":true,"createdAt":"2021-11-03","updatedAt":"2021-03-20"}
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
