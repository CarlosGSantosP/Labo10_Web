import { pool } from "../Data/connection.js";

export const getCustomers = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM customers");
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error in getCustomers:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
