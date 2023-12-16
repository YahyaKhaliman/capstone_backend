const express = require("express");
const router = express.Router();
const { loginUser, validateLogin } = require("../middleware/validasi");

router.post("/login", validateLogin, loginUser);

module.exports = router;
