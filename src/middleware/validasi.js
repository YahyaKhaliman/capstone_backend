const jwt = require("jsonwebtoken");
const dbPool = require("../config/database");

const generateToken = (user) => {
  return jwt.sign({ email: user.email }, "secret_key", { expiresIn: "1h" });
};

const loginUser = async (req, res) => {
  try {
    const user = req.user;

    const token = generateToken(user);

    res.status(200).json({ token: token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const validateLogin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const sqlQuery = `SELECT * FROM user WHERE email = ?`;
    const [rows] = await dbPool.execute(sqlQuery, [email]);

    if (rows.length === 0) {
      return res.status(401).json({ error: "Invalid email" });
    }

    const user = rows[0];
    const passwordMatch = password === user.password;

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid password" });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { loginUser, validateLogin };
