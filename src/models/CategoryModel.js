const sequelize = require("sequelize");

module.exports = (sequelize,DataTypes) => {
    const CategoryModel = sequelize.define('categories',{
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
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
        updatedAT: 'updated_at',
        freezeTableName: true
    })

    return CategoryModel;
}