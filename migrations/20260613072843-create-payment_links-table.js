'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('payment_links', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      payment_link: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true
      },
      expiry_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM('PENDING', 'EXPIRED', 'PAID', 'CANCELLED'),
        allowNull: false,
        defaultValue: 'PENDING'
      },
      service_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });

    await queryInterface.addConstraint('payment_links', {
      fields: ['service_id'],
      type: 'foreign key',
      name: 'fk_payment_links_service_id',
      references: {
        table: 'services',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('payment_links');
  }
};
