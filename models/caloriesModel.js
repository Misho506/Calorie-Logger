import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

class CaloriesModel extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate({ CaloriesModel, UserModel }) {
    // define association here
    CaloriesModel.userId = CaloriesModel.belongsTo(UserModel);
  }
}
CaloriesModel.init({
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  burned: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Calories',
});

export default CaloriesModel;
