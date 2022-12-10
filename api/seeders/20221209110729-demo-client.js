"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("clients", [
      {
        first_name: "cliente",
        last_name: "preferencial",
        email: "cliente@cliente.com",
        password:
          "$2a$10$0dTM3k92EC63mphk6wInq.4BlIMWGF1olHEm4nTGcQkrEuJJCdBFe",
        phone: "12345678901",
        gender: 1,
        age: 35,
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("clients", null, {});
  },
};
