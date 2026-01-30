"use client";

import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../lib/firebase";

export default function ShopSignup() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();

    try {
      await addDoc(collection(db, "shops"), {
        name,
        city,
        email,
        createdAt: Date.now()
      });

      alert("Thanks! We'll reach out soon.");
      window.location.href = "/shop/dashboard";
    } catch (error) {
      console.error("Error saving shop:", error);
      alert("Something went wrong. Please try again.");
    }
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
