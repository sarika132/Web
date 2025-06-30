const Signup = require("./models/signupSchema");

const getAlldata = async (req, res) => {
  console.log("Get All Items");
  try {
    const signup = await Signup.findAll();
    res.status(200).send({ data: products, message: "Successfully fetched data" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error while fetching" });
  }
};

module.exports = { getAlldata };