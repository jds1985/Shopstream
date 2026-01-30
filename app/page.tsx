export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "black",
      color: "white",
      textAlign: "center",
      padding: "20px"
    }}>
      <h1 style={{ fontSize: "3rem" }}>ShopStream</h1>
      <p style={{ fontSize: "1.2rem", marginTop: "10px" }}>
        Live shopping for local stores.
      </p>

      <p style={{ marginTop: "20px" }}>
        Go live. Show your products. Sell instantly to local customers.
      </p>

      <button style={{
        marginTop: "30px",
        padding: "12px 24px",
        fontSize: "1rem",
        cursor: "pointer"
      }}>
        Join Early Access
      </button>
    </main>
  );
}
