import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3100/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Usuario creado. Ahora inicia sesión.");
      navigate("/login");
    } else {
      alert(data.message || "Error en registro");
    }
  };

  return (
    <div className="signup-container">
      <h2>Crear Cuenta</h2>

      <form onSubmit={handleSignUp}>
        <input type="text" placeholder="Nombre"
          value={name} onChange={(e) => setName(e.target.value)} />

        <input type="email" placeholder="Correo"
          value={email} onChange={(e) => setEmail(e.target.value)} />

        <input type="password" placeholder="Contraseña"
          value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}
