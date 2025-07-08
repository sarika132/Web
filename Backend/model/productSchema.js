const { DataTypes } = require("sequelize");
const { sequelize } = require("../Database/db");

const Products = sequelize.define("products", {
    productname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    productCode: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    productDescription: {
        type: DataTypes.STRING,
        allowNull: false,

    },
});

(async () => {
    try {
        await Products.sync();  // Creates or updates the "users" table
        console.log("The Users table has been created or updated.");
    } catch (error) {
        console.error("Error syncing the Users model:", error.message);
    }
})();