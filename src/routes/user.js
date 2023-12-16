const express = require("express");
const router = express.Router();
const validateLogin = require("../middleware/validasi");
const loginUser = require("../controllers/user");

// Rute untuk validasi login
router.post("/login", validateLogin, loginUser);

module.exports = router;
