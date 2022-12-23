'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      subCategory: {
        type: Sequelize.STRING
      },
      count: {
        type: Sequelize.INTEGER,
        defaultValue: null
      },
      packed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      pakId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'pakId',
        onDelete: 'CASCADE',
        reference: {
          model: 'paks',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('items');
  }
};