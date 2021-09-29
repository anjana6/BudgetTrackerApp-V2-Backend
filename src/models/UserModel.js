const sequelize = require("sequelize");

module.exports = (sequelize,DataTypes) => {
    const UserModel = sequelize.define('users',{
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
          email: {
            type: DataTypes.STRING(100),
            allowNull: false
          },
          password: {
            type: DataTypes.STRING(100),
            allowNull: false
          },
          created_at: {
            type: DataTypes.DATE,
            allowNull: false
          },
          updated_at: {
            type: DataTypes.DATE,
            allowNull: false
          }
    },{
        createdAt:'created_at',
        updatedAt:'updated_at',
        freezeTabelName: true
    })

    return UserModel;
}