export default function Home() {
  return (
    <main>
      <header
        style={{
          background: "#7A0019",
          color: "#fff",
          padding: "18px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Poojan Paradise</h2>

        <nav style={{ display: "flex", gap: "20px" }}>
          <span>Home</span>
          <span>Shop</span>
          <span>About</span>
          <span>Contact</span>
          <span>🛒 Cart</span>
        </nav>
      </header>

      <section
        style={{
          minHeight: "85vh",
          background: "linear-gradient(135deg,#7A0019,#D4AF37)",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <h1 style={{ fontSize: "60px", marginBottom: "20px" }}>
          Poojan Paradise
        </h1>

        <p
          style={{
            maxWidth: "700px",
            fontSize: "22px",
            marginBottom: "30px",
          }}
        >
          Premium Pooja Items for Every Festival, Temple and Home.
        </p>

        <button className="btn">
          Shop Now
        </button>
      </section>
    </main>
  );
}
