import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const featuredProducts = [
  {
    id: "nike-air-max-1",
    name: "Air Max 1",
    price: 459,
    category: "Shoes",
    gender: "Men",
    description: "Classic everyday sneakers with modern comfort.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900",
    stock: 10,
  },
  {
    id: "runner-black",
    name: "Performance Runner",
    price: 399,
    category: "Shoes",
    gender: "Men",
    description: "Lightweight running shoes built for performance.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900",
    stock: 8,
  },
  {
    id: "essential-hoodie",
    name: "Essential Hoodie",
    price: 249,
    category: "Clothing",
    gender: "Unisex",
    description: "Premium heavyweight hoodie for everyday wear.",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=900",
    stock: 15,
  },
  {
    id: "sport-tshirt",
    name: "Dri-FIT Sport T-Shirt",
    price: 149,
    category: "Clothing",
    gender: "Men",
    description: "Breathable performance t-shirt for training.",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900",
    stock: 20,
  },
];

function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="home-hero">

        <div className="home-hero-overlay"></div>

        <div className="home-hero-content">

          <span className="hero-small-title">
            NEW COLLECTION 2026
          </span>

          <h1>
            MOVE
            <br />
            DIFFERENT.
          </h1>

          <p>
            Performance meets everyday style.
            Discover the latest sportswear collection.
          </p>

          <div className="hero-buttons">

            <Link
              to="/products"
              className="hero-button primary"
            >
              SHOP COLLECTION
            </Link>

            <Link
              to="/products?category=Men"
              className="hero-button secondary"
            >
              EXPLORE MEN
            </Link>

          </div>

        </div>

      </section>


      {/* CATEGORIES */}
      <section className="home-categories">

        <div className="section-heading">

          <span>
            SHOP BY CATEGORY
          </span>

          <h2>
            Find your style.
          </h2>

        </div>

        <div className="category-grid">

          <Link
            to="/products?category=Men"
            className="category-card men"
          >
            <div>
              <span>01</span>
              <h3>MEN</h3>
              <p>Explore collection →</p>
            </div>
          </Link>

          <Link
            to="/products?category=Women"
            className="category-card women"
          >
            <div>
              <span>02</span>
              <h3>WOMEN</h3>
              <p>Explore collection →</p>
            </div>
          </Link>

          <Link
            to="/products?category=Kids"
            className="category-card kids"
          >
            <div>
              <span>03</span>
              <h3>KIDS</h3>
              <p>Explore collection →</p>
            </div>
          </Link>

        </div>

      </section>


      {/* FEATURED PRODUCTS */}
      <section className="home-products">

        <div className="section-heading section-heading-row">

          <div>
            <span>
              FEATURED
            </span>

            <h2>
              Latest drops.
            </h2>
          </div>

          <Link to="/products">
            VIEW ALL →
          </Link>

        </div>

        <div className="products-grid">

          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </section>


      {/* PROMO */}
      <section className="home-promo">

        <div className="home-promo-content">

          <span>
            PERFORMANCE / STYLE / CULTURE
          </span>

          <h2>
            BUILT TO
            <br />
            MOVE.
          </h2>

          <p>
            Designed for training.
            Made for everyday life.
          </p>

          <Link to="/products">
            SHOP NOW →
          </Link>

        </div>

      </section>


      {/* BENEFITS */}
      <section className="home-benefits">

        <div className="benefit">
          <strong>01</strong>
          <h3>FAST DELIVERY</h3>
          <p>
            Quick delivery across Tunisia.
          </p>
        </div>

        <div className="benefit">
          <strong>02</strong>
          <h3>SECURE PAYMENT</h3>
          <p>
            Safe and secure checkout.
          </p>
        </div>

        <div className="benefit">
          <strong>03</strong>
          <h3>EASY RETURNS</h3>
          <p>
            Simple return process.
          </p>
        </div>

        <div className="benefit">
          <strong>04</strong>
          <h3>SUPPORT</h3>
          <p>
            Customer support when you need it.
          </p>
        </div>

      </section>

    </main>
  );
}

export default Home;