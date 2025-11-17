import { pool } from "../Data/connection.js";

const createUser = (request, response) => {
  const { name, email, passwd } = request.body

  pool.query('INSERT INTO users (name, email, passwd) VALUES ($1, $2, $3) RETURNING *', [name, email, passwd], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${results.rows[0].id}`)
  })
}

export { createUser };
