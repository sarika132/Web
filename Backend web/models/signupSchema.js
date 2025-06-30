import { DataTypes } from 'sequelize';
import { sequelize } from '../../database/index.js';

export const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});
(async () => {
    try {
        await Signup.sync();  
        console.log("The Users table has been created or updated.");
    } catch (error) {
        console.error("Error syncing the Users model:", error.message);
    }
})();