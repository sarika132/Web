const express = require("express");
const{
    getAllEmployee,
    saveAllEmployee,
}= require("../controller/userController");

const router = express.Router();

router.get("/users",getAllEmployee);
router.post("/users", saveAllEmployee);

router.get("/", getAllEmployee);
router.post("/", saveAllEmployee);

module.exports = {router};