const dbPool = require("../config/database");

const userExists = async (req, res, next) => {
  try {
    const { email } = req.body;
    const sqlQuery = `SELECT * FROM user WHERE email = ?`;
    const [rows] = await dbPool.execute(sqlQuery, [email]);

    if (rows.length === 0) {
      return res.status(404).json({ error: "Pengguna tidak ditemukan" });
    }

    req.user = rows[0];
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { userExists };
