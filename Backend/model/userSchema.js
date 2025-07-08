const { DataTypes } = require("sequelize");
const { sequelize } = require("../Database/db");

const Users = sequelize.define("Users", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

(async () => {
  try {
    await Users.sync(); // optionally use { force: true } to reset
    console.log("Users table created or updated successfully.");
  } catch (error) {
    console.error("Error syncing Users table:", error.message);
  }
})();

module.exports = Users;
