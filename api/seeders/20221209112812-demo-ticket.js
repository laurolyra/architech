"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("tickets", [
      {
        description: "descrição de um serviço",
        price: 100.0,
        client_id: 1,
        architect_id: 1,
        status: 0,
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("tickets", null, {});
  },
};
