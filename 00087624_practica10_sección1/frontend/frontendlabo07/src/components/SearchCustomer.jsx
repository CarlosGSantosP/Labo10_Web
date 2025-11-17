import React, { useState } from "react";
import "../styles/global.css";

const SearchCustomer = () => {
  const [code, setCode] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!code.trim()) {
      alert("Debes ingresar un código");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3100/api/customers/search?code=${code}`
      );

      const data = await response.json();
      setResults(data);

    } catch (error) {
      console.error("Error buscando cliente:", error);
    }
  };

  return (
    <div className="page-container">
      <h2>Buscar Cliente por Código</h2>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Ej: C001"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      <br />

      {results.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Dirección</th>
              <th>Teléfono</th>
              <th>Código</th>
            </tr>
          </thead>
          <tbody>
            {results.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.address}</td>
                <td>{customer.phone}</td>
                <td>{customer.code}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="error">No hay resultados...</p>
      )}
    </div>
  );
};

export default SearchCustomer;
