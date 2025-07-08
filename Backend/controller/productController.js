const Products = require("./models/productSchema");

const getAllItems = async (req, res) => {
  console.log("Get All Items");
  try {
    const products = await Products.findAll();
    res.status(200).send({ data: products, message: "Successfully fetched data" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error while fetching" });
  }
};

module.exports = { getAllItems };