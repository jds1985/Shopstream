"use client";

import { useState } from "react";

export default function NewProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log({ name, price });
    alert("Product added (for now)");
  }

  return (
    <main style={{
      minHeight: "100vh",
      background: "black",
      color: "white",
      padding: "40px"
    }}>
      <h1>Add Product</h1>

      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <input
          placeholder="Product Name"
          value={name}
          onChange={e => setName(e.target.value)}
        /><br /><br />

        <input
          placeholder="Price"
          value={price}
          onChange={e => setPrice(e.target.value)}
        /><br /><br />

        <button type="submit">
          Save Product
        </button>
      </form>
    </main>
  );
}
