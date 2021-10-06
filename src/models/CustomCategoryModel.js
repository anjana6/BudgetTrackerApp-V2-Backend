const sequelize = require("sequelize");

module.exports = (sequelize,DataTypes) => {
    const CustomCategoryModel = sequelize.define('custom_categories',{
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
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
    });

    CustomCategoryModel.associate = function (models) {
        CustomCategoryModel.belongsTo(models.users, {foreignKey: "user_id"});
      };

    return CustomCategoryModel;
}