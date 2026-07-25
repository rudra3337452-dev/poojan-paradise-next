export default function ShopPage() {
  const products = [
    {
      id: 1,
      name: "Pure Kapoor",
      price: "₹199",
      image: "https://via.placeholder.com/250"
    },
    {
      id: 2,
      name: "Cow Ghee Diya",
      price: "₹299",
      image: "https://via.placeholder.com/250"
    },
    {
      id: 3,
      name: "Hawan Samagri",
      price: "₹249",
      image: "https://via.placeholder.com/250"
    },
    {
      id: 4,
      name: "Roli",
      price: "₹99",
      image: "https://via.placeholder.com/250"
    },
    {
      id: 5,
      name: "Kalava",
      price: "₹79",
      image: "https://via.placeholder.com/250"
    },
    {
      id: 6,
      name: "Cotton Batti",
      price: "₹149",
      image: "https://via.placeholder.com/250"
    }
  ];

  return (
    <div style={{ padding: "30px", background: "#faf6ef", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", color: "#8B4513" }}>
        🛍️ Poojan Paradise Shop
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginTop: "30px"
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              background: "#fff",
              borderRadius: "15px",
              padding: "15px",
              textAlign: "center",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                borderRadius: "10px"
              }}
            />

            <h3>{product.name}</h3>

            <p
              style={{
                fontWeight: "bold",
                color: "#B8860B"
              }}
            >
              {product.price}
            </p>

            <button
              style={{
                background: "#B8860B",
                color: "#fff",
                border: "none",
                padding: "10px 20px",
                borderRadius: "25px",
                cursor: "pointer"
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
