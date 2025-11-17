// src/ app.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login.jsx";
import Protected from "./Protected.jsx";

import CustomerList from "./components/CustomerList";
import CreateSale from "./components/CreateSale.jsx";
import SalesList from "./components/SalesList.jsx";
import SearchCustomer from "./components/SearchCustomer.jsx";
import SalesReport from "./components/SalesReport.jsx";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/protected" element={<Protected />} />

      <Route path="/customers" element={<CustomerList />} />
      <Route path="/sales/create" element={<CreateSale />} />
      <Route path="/sales" element={<SalesList />} />
      <Route path="/customers/search" element={<SearchCustomer />} />
      <Route path="/sales/report" element={<SalesReport />} />
    </Routes>
  </Router>
);

export default App;