import { Link } from "react-router-dom";
import "../styles/global.css";

const Dashboard = () => {
  return (
    <div className="page-container">
      <h2>Panel Principal</h2>

      <div className="dashboard-grid">
        <Link to="/customers" className="dash-btn">Lista de Clientes</Link>
        <Link to="/sales/create" className="dash-btn">Registrar Venta</Link>
        <Link to="/sales" className="dash-btn">Listado de Ventas</Link>
        <Link to="/customers/search" className="dash-btn">Buscar Cliente</Link>
        <Link to="/sales/report" className="dash-btn">Reporte de Ventas</Link>
      </div>
    </div>
  );
};

export default Dashboard;
