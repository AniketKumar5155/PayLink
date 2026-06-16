'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('services', 'type', {
      type: Sequelize.ENUM('LOAN', 'ONE_TIME', 'PRODUCT'),
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('services', 'type', {
      type: Sequelize.ENUM('LOAN', 'PRODUCT'),
      allowNull: false,
    });
  }
};
