'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pak extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pak.belongsTo(models.User, {
        foreignKey: 'userId',
        alias: 'pakOwner',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Pak.hasMany(models.Item, {
        foreignKey: 'pakId',
        as: 'pakItems',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Pak.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'userId',
      onDelete: 'CASCADE',
      reference: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Pak',
    tableName: 'paks'
  });
  return Pak;
};