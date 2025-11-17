import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="dashboard-container">
      <h1>Panel Principal</h1>

      <div className="dashboard-buttons">

        <Link to="/customers">
          <button>📋 Listar Clientes</button>
        </Link>

        <Link to="/customers/search">
          <button>🔎 Buscar Cliente</button>
        </Link>

        <Link to="/sales/create">
          <button>➕ Registrar Venta</button>
        </Link>

        <Link to="/sales">
          <button>🧾 Listar Ventas</button>
        </Link>

        <Link to="/sales/report">
          <button>📊 Reporte Ventas</button>
        </Link>

        <button onClick={logout} className="logout-btn">Cerrar Sesión</button>

      </div>
    </div>
  );
}
