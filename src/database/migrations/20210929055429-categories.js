'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('categories',{
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    category_type: {
      type: Sequelize.ENUM('expense','income'),
      allowNull: false
  },
    name: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    created_at: {
        type: Sequelize.DATE,
        allowNull: false
    },
    updated_at: {
        type: Sequelize.DATE,
        allowNull:false
    }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('categories')
  }
};
