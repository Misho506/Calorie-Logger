'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CaloriesPerDay extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.CaloriesPerDay.userId = models.CaloriesPerDay.belongsTo(User);
    }
  }
  CaloriesPerDay.init({
    amount: DataTypes.INTEGER,
    burned: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'CaloriesPerDay',
  });
  return CaloriesPerDay;
};