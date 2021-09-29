const { DATE } = require("sequelize");
const sequelize = require("sequelize");

module.exports = (sequelize,DataTypes) => {
    const BudgetModel = sequelize.define('bugets',{
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
        Date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        time: {
            type: DataTypes.TIME,
            allowNull: false
        },
        amount: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        started_at:{
            type: DataTypes.DATE,
            allowNull: false
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false
        }
    },{
        createAt: 'created_at',
        updatedAT: 'updated_at',
        freezeTableName: true
    })
    return BudgetModel;
}