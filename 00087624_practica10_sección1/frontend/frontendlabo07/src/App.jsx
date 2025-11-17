import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Login";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";

import CustomerList from "./components/CustomerList";
import CreateSale from "./components/CreateSale";
import SalesList from "./components/SalesList";
import SearchCustomer from "./components/SearchCustomer";
import SalesReport from "./components/SalesReport";

import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>

        {/* Rutas públicas */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Rutas protegidas */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/customers"
          element={
            <ProtectedRoute>
              <CustomerList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/customers/search"
          element={
            <ProtectedRoute>
              <SearchCustomer />
            </ProtectedRoute>
          }
        />

        <Route
          path="/sales"
          element={
            <ProtectedRoute>
              <SalesList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/sales/create"
          element={
            <ProtectedRoute>
              <CreateSale />
            </ProtectedRoute>
          }
        />

        <Route
          path="/sales/report"
          element={
            <ProtectedRoute>
              <SalesReport />
            </ProtectedRoute>
          }
        />

        {/* Si no existe ruta → redirige a login */}
        <Route path="*" element={<Login />} />

      </Routes>
    </Router>
  );
}

export default App;
