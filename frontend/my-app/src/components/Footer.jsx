import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="store-footer">

      {/* NEWSLETTER */}
      <section className="footer-newsletter">

        <div className="newsletter-content">

          <div>
            <span className="newsletter-label">
              STAY IN THE LOOP
            </span>

            <h2>
              Get the latest drops.
            </h2>

            <p>
              Subscribe for new products, exclusive offers
              and special releases.
            </p>
          </div>

          <form
            className="newsletter-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for subscribing!");
            }}
          >
            <input
              type="email"
              placeholder="Your email address"
              required
            />

            <button type="submit">
              Subscribe
            </button>
          </form>

        </div>

      </section>

      {/* MAIN FOOTER */}
      <div className="footer-main">

        {/* BRAND */}
        <div className="footer-brand">

          <Link to="/" className="footer-logo">
            SPORT<span>+</span>
          </Link>

          <p>
            Premium sportswear designed for movement,
            performance and everyday life.
          </p>

          <div className="social-links">

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              IG
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              FB
            </a>

            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
            >
              TK
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              YT
            </a>

          </div>

        </div>

        {/* SHOP */}
        <div className="footer-column">

          <h3>SHOP</h3>

          <Link to="/products">All Products</Link>

          <Link to="/products?gender=Men">
            Men
          </Link>

          <Link to="/products?gender=Women">
            Women
          </Link>

          <Link to="/products?gender=Kids">
            Kids
          </Link>

          <Link to="/products?sale=true">
            Sale
          </Link>

        </div>

        {/* HELP */}
        <div className="footer-column">

          <h3>HELP</h3>

          <Link to="/orders">
            Order Status
          </Link>

          <Link to="/contact">
            Contact Us
          </Link>

          <Link to="/shipping">
            Shipping
          </Link>

          <Link to="/returns">
            Returns
          </Link>

          <Link to="/faq">
            FAQ
          </Link>

        </div>

        {/* ABOUT */}
        <div className="footer-column">

          <h3>ABOUT</h3>

          <Link to="/about">
            About Us
          </Link>

          <Link to="/careers">
            Careers
          </Link>

          <Link to="/stores">
            Store Locator
          </Link>

          <Link to="/privacy">
            Privacy
          </Link>

          <Link to="/terms">
            Terms
          </Link>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">

        <p>
          © {currentYear} SPORT+. All rights reserved.
        </p>

        <div className="footer-bottom-links">
          <span>🇹🇳 Tunisia</span>
          <span>Secure Shopping</span>
          <span>Fast Delivery</span>
        </div>

      </div>

    </footer>
  );
}

export default Footer;