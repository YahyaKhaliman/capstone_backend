const jwt = require("jsonwebtoken");

const loginUser = (req, res) => {
  const token = jwt.sign({ email: req.user.email }, "secret_key", {
    expiresIn: "1h",
  });
  res.status(200).json({ token: token });
};

module.exports = loginUser;
