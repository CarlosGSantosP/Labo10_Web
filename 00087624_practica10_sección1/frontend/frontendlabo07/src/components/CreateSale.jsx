import React, { useState } from "react";

const CreateSale = () => {
  const [amount, setAmount] = useState("");
  const [idCustomer, setIdCustomer] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      amount: Number(amount),
      id_customer: Number(idCustomer)
    };

    const res = await fetch("http://localhost:3100/api/sales", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    const data = await res.json();

    if (res.status === 201) {
      setMessage("Venta registrada con éxito");
      setAmount("");
      setIdCustomer("");
    } else {
      setMessage(data.message || "Error");
    }
  };

  return (
    <div>
      <h2>Registrar Venta</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Monto: </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        <div>
          <label>ID Cliente: </label>
          <input
            type="number"
            value={idCustomer}
            onChange={(e) => setIdCustomer(e.target.value)}
            required
          />
        </div>

        <button type="submit">Guardar Venta</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default CreateSale;
