"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("tickets", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      architect_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "architects", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      client_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "clients", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      description: {
        type: Sequelize.STRING(1000),
        allowNull: false,
      },
      price: { type: Sequelize.DECIMAL(19, 4), allowNull: false },
      status: { type: Sequelize.INTEGER, allowNull: false },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("tickets");
  },
};
