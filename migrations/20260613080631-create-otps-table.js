'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('otps', {
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        primaryKey: true
      },
      purpose: {
        type: Sequelize.ENUM('RESET_PASSWORD'),
        allowNull: false,
        primaryKey: true
      },
      otp: {
        type: Sequelize.STRING(6),
        allowNull: false,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      expires_at: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('otps');
  }
};
