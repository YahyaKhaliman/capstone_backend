const dbPool = require("../config/database");

const getAllUser = () => {
  const sqlQuery = "SELECT * FROM user";

  return dbPool.execute(sqlQuery);
};

const createUser = (body) => {
  try {
    const { first_name, last_name, email, password } = body;
    const sqlQuery = `INSERT INTO user (first_name, last_name, email, password) VALUES (?, ?, ?, ?)`;
    const values = [first_name, last_name, email, password];

    return dbPool.execute(sqlQuery, values);
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  getAllUser,
  createUser,
};
