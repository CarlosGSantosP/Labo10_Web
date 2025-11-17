import { Link } from "react-router-dom";
import "../styles/global.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Inicio</Link>
      <Link to="/customers">Clientes</Link>
      <Link to="/sales/create">Registrar Venta</Link>
      <Link to="/sales">Ventas</Link>
      <Link to="/customers/search">Buscar Cliente</Link>
      <Link to="/sales/report">Reporte</Link>
    </nav>
  );
};

export default Navbar;
