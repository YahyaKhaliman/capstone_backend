const userModel = require("../models/user.js");

const getAllUser = async (req, res) => {
  try {
    const [data] = await userModel.getAllUser(); // menggunakan await untuk menunggu data dari database

    res.json({
      message: `Connection Succes. Menampilkan ${data.length} User`,
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const createUser = async (req, res) => {
  if (req.body === null)
    return res.status(400).json({ message: "Gagal. Ulangi Lagi" });

  try {
    const { name, last_name, email, password } = req.body;
    await userModel.createUser({
      name: name,
      last_name: last_name,
      email: email,
      password: password,
    });
    res.status(201).json({ message: "Pengguna berhasil terdaftar" });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

module.exports = {
  getAllUser,
  createUser,
};
