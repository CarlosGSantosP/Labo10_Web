import React, { useEffect, useState } from "react";

const SalesReport = () => {
  const [report, setReport] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3100/api/sales/report")
      .then(res => res.json())
      .then(data => setReport(data))
      .catch(err => console.error("Error:", err));
  }, []);

  return (
    <div>
      <h2>Reporte de Ventas por Cliente</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Total Ventas</th>
          </tr>
        </thead>

        <tbody>
          {report.map((r, index) => (
            <tr key={index}>
              <td>{r.name}</td>
              <td>${Number(r.total_sales).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesReport;
