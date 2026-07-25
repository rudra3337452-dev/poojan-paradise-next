export default function Navbar() {
  return (
    <nav
      style={{
        background: "#6B0014",
        color: "white",
        padding: "16px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>🛕 Poojan Paradise</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/cart">🛒 Cart</a>
      </div>
    </nav>
  );
}
