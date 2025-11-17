import { pool } from "../Data/connection.js";

export const searchCustomer = async (req, res) => {
  try {
    const { code } = req.query;

    if (!code) {
      return res.status(400).json({ message: "Debe enviar el parámetro 'code'" });
    }

    const result = await pool.query(
      "SELECT * FROM customers WHERE code = $1",
      [code]
    );

    return res.status(200).json(result.rows);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};
