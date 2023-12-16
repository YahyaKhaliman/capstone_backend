const express = require("express");
const userController = require("../controllers/user.js");
const router = express.Router();

router.get("/user/all", userController.getAllUser);
router.post("/user", userController.createUser);

module.exports = router;
