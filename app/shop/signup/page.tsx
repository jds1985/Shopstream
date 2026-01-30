"use client";

import { useState } from "react";

export default function ShopSignup() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log({ name, city, email });
    alert("Thanks! We'll reach out soon.");
  }

  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "black",
      color: "white"
    }}>
      <h1>ShopStream – Shop Signup</h1>

      <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
        <input
          placeholder="Shop Name"
          value={name}
          onChange={e => setName(e.target.value)}
        /><br /><br />

        <input
          placeholder="City"
          value={city}
          onChange={e => setCity(e.target.value)}
        /><br /><br />

        <input
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        /><br /><br />

        <button type="submit">Join ShopStream</button>
      </form>
    </main>
  );
}
