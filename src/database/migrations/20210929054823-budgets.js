'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('budgets',{
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: true
  },
  budget_type: {
      type: Sequelize.ENUM('expense','income'),
      allowNull: false
  },
  category: {
      type: Sequelize.STRING(100),
      allowNull: false
  },
  Date: {
      type: Sequelize.DATE,
      allowNull: false
  },
  time: {
      type: Sequelize.TIME,
      allowNull: false
  },
  amount: {
      type: Sequelize.DECIMAL(10,2),
      allowNull: false
  },
  started_at:{
      type: Sequelize.DATE,
      allowNull: false
  },
  updated_at: {
      type: Sequelize.DATE,
      allowNull: false
  }
   })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('budgets')
  }
};
