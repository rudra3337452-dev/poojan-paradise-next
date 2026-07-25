import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">

      <header className="header">
        <h1>🪔 Poojan Paradise</h1>
        <nav>
          <span>Home</span>
          <span>Shop</span>
          <span>About</span>
          <span>Contact</span>
        </nav>
      </header>

      <section className="hero">

  <div className="hero-text">
    <h2>Pure & Divine Pooja Essentials</h2>
    <p>
      Premium quality pooja items delivered to your doorstep.
    </p>
    <button>Shop Now</button>
  </div>

  <img 
    src="https://images.unsplash.com/photo-1602924357228-91a4daadcfea"
    alt="Pooja"
    className="hero-img"
  />

</section>


      <section className="categories">
        <h2>Our Categories</h2>

        <div className="cards">
          <div className="card">🟡 Pooja Kapda</div>
          <div className="card">🪔 Diya & Ghee</div>
          <div className="card">🌿 Dhoop & Agarbatti</div>
          <div className="card">🔥 Hawan Samagri</div>
        </div>
      </section>


      <section className="products">
        <h2>Premium Products</h2>

        <div className="cards">
          <div className="product">
            <h3>Pure Kapoor</h3>
            <p>₹199</p>
            <button>Add Cart</button>
          </div>

          <div className="product">
            <h3>Cow Ghee Diya</h3>
            <p>₹299</p>
            <button>Add Cart</button>
          </div>

          <div className="product">
            <h3>Hawan Samagri</h3>
            <p>₹249</p>
            <button>Add Cart</button>
          </div>
        </div>
      </section>


      <section className="why">
        <h2>Why Choose Us?</h2>
        <p>✔ Pure Quality Products</p>
        <p>✔ Secure Payments</p>
        <p>✔ Fast Delivery</p>
      </section>


      <footer>
        <h3>Poojan Paradise</h3>
        <p>© 2026 All Rights Reserved</p>
      </footer>

    </div>
  );
}

export default App;
