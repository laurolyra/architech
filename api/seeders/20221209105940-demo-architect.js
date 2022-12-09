"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("architects", [
      {
        first_name: "Arquiteto",
        last_name: "teste",
        email: "arch@arch.com",
        password:
          "$2a$10$dG2K/xcxIRh6UGErPSkUhet8g3GEBNzzv1wZBX9uu4Oz8DjJ.4WLG",
        phone: "12345678901",
        gender: 1,
        age: 35,
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("architects", null, {});
  },
};
