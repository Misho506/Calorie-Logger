import { Model } from 'sequelize';
import sequelize from '../config/database.js';

class CaloriesPerDayModel extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate({ CaloriesPerDayModel, UserModel }) {
    // define association here
    CaloriesPerDayModel.userId = CaloriesPerDayModel.belongsTo(UserModel);
  }
}
CaloriesPerDayModel.init({
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
  modelName: 'CaloriesPerDayModel',
});

export default CaloriesPerDayModel;
