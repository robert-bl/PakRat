'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.belongsTo(models.Pak, {
        foreignKey: 'pakId',
        as: 'itemPak',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Item.init({
    name: DataTypes.STRING,
    subCategory: DataTypes.STRING,
    count: DataTypes.INTEGER,
    packed: DataTypes.BOOLEAN,
    pakId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'pakId',
      onDelete: 'CASCADE',
      reference: {
        model: 'paks',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Item',
    tableName: 'items'
  });
  return Item;
};