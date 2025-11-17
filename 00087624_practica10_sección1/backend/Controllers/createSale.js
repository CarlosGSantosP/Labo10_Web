import { pool } from "../Data/connection.js";

export const createSale = async (req, res) => {
  try {
    const { amount, id_customer } = req.body;

    if (!amount || !id_customer) {
      return res.status(400).json({ message: "amount e id_customer son requeridos" });
    }

    // Validar que el cliente exista
    const customerCheck = await pool.query(
      "SELECT * FROM customers WHERE id = $1",
      [id_customer]
    );

    if (customerCheck.rows.length === 0) {
      return res.status(404).json({ message: "El cliente no existe" });
    }

    // Insertar la venta
    const result = await pool.query(
      `INSERT INTO sales (amount, created_at, id_customer)
       VALUES ($1, NOW(), $2) RETURNING *`,
      [amount, id_customer]
    );

    return res.status(201).json({
      message: "Venta registrada correctamente",
      sale: result.rows[0]
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error servidor" });
  }
};
