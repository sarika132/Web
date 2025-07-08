const User = require("../model/userSchema.js");

const getAllEmployee = async (req, res) => {
  console.log("Get Alls");

  try {
    const users = await User.findAll();

    return res.status(200).send({
      data: users,
      message: users.length === 0
        ? "No users found"
        : "Successfully fetched data"
    });

  } catch (error) {
    console.error("Error while fetching:", error);
    return res.status(500).json({ message: "Error while fetching data" });
  }
};

const saveAllEmployee = async (req, res) => {
  console.log(req.body);
  const { name, userId } = req.body;

  try {
    const user = await User.findOne({ where: { userId } });  
    if (user == null) {
      await User.create(req.body);
      return res.status(201).json({ message: "User added successfully" });
    }
    return res.status(400).json({ message: "User already exists" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error saving user" });
  }
};

module.exports = { getAllEmployee, saveAllEmployee };