const { DATE } = require("sequelize");
const sequelize = require("sequelize");

module.exports = (sequelize,DataTypes) => {
    const BudgetModel = sequelize.define('budgets',{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: true
        },
        budget_type: {
            type: DataTypes.ENUM('expense','income'),
            allowNull: false
        },
        category: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        time: {
            type: DataTypes.TIME,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING(100),
            allowNull: false
          },
        amount: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        created_at:{
            type: DataTypes.DATE,
            allowNull: false
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false
        }
    },{
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        freezeTableName: true
    })
    return BudgetModel;
}