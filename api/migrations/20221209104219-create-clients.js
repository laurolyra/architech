"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("clients", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      password: { type: Sequelize.STRING(255), allowNull: false },
      first_name: { type: Sequelize.STRING(20), allowNull: false },
      last_name: { type: Sequelize.STRING(20), allowNull: false },
      phone: { type: Sequelize.STRING(11), allowNull: false },
      gender: { type: Sequelize.INTEGER, allowNull: false },
      age: { type: Sequelize.INTEGER, allowNull: true },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("clients");
  },
};
