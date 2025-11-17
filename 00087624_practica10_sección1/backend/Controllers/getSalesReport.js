import { pool } from "../Data/connection.js";

export const getSalesReport = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        c.name,
        SUM(s.amount) AS total_sales
      FROM sales s
      JOIN customers c ON s.id_customer = c.id
      GROUP BY c.name
      ORDER BY total_sales DESC
    `);

    res.status(200).json(result.rows);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener el reporte" });
  }
};
