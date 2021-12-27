'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ProductCategory.init({
    categoryId: DataTypes.UUID,
    productId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'ProductCategory',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  });
  return ProductCategory;
};