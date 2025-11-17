import React, { useEffect, useState } from "react";

const SalesList = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3100/api/sales")
      .then(res => res.json())
      .then(data => setSales(data))
      .catch(err => console.error("Error:", err));
  }, []);

  return (
    <div>
      <h2>Listado de Ventas</h2>

      <table border="1">
        <thead>
          <tr>
            <th>ID Venta</th>
            <th>Monto</th>
            <th>Fecha</th>
            <th>Cliente</th>
          </tr>
        </thead>

        <tbody>
          {sales.map(s => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.amount}</td>
              <td>{new Date(s.created_at).toLocaleString()}</td>
              <td>{s.customer_name}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default SalesList;
