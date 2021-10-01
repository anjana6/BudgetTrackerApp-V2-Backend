const sequelize = require("sequelize");

module.exports = (sequelize,DataTypes) => {
    const CustomCategoryModel = sequelize.define('custom_categories',{
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        category_type: {
            type: DataTypes.ENUM('expense','income'),
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull:false
        }
    },{
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        freezeTableName: true
    })

    return CustomCategoryModel;
}