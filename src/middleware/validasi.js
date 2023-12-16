const jwt = require("jsonwebtoken");

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;

  if (email === body.email && password === body.password) {
    req.body = {
      email: email,
      password: password,
    };
    next();
  } else {
    res.status(401).json({ error: "Login failed" });
  }
};

module.exports = validateLogin;
