"use client";

export default function ShopDashboard() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "black",
      color: "white",
      padding: "40px"
    }}>
      <h1>Shop Dashboard</h1>
      <p>Welcome to ShopStream.</p>

      <div style={{
        marginTop: "30px",
        border: "1px solid white",
        padding: "20px",
        maxWidth: "400px"
      }}>
        <h3>Your Products</h3>
        <p>No products yet.</p>

        <a href="/shop/products/new">
          <button style={{ marginTop: "10px" }}>
            Add Product
          </button>
        </a>
      </div>

      <div style={{ marginTop: "40px" }}>
        <button>
          Go Live (coming soon)
        </button>
      </div>
    </main>
  );
}
