import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

class UserModel extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate({ UserModel, CaloriesPerDayModel }) {
    // define association here
    UserModel.hasMany(CaloriesPerDayModel, {
      foreignKey: 'userId',
    });
  }
}
UserModel.init({
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'User',
});

export default UserModel;
