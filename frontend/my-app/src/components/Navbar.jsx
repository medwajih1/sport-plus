import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart?.items || []);

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  const cartCount = cartItems.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  const handleSearch = (e) => {
    e.preventDefault();

    if (search.trim()) {
      navigate(`/products?search=${encodeURIComponent(search.trim())}`);
      setSearch("");
      setSearchOpen(false);
      setMenuOpen(false);
    }
  };

  return (
    <header className="store-navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <Link to="/" className="store-logo">
          SPORT<span>+</span>
        </Link>

        {/* DESKTOP MENU */}
        <nav className={`store-nav ${menuOpen ? "mobile-open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link to="/products" onClick={() => setMenuOpen(false)}>
            New Arrivals
          </Link>

          <Link
            to="/products?gender=Men"
            onClick={() => setMenuOpen(false)}
          >
            Men
          </Link>

          <Link
            to="/products?gender=Women"
            onClick={() => setMenuOpen(false)}
          >
            Women
          </Link>

          <Link
            to="/products?gender=Kids"
            onClick={() => setMenuOpen(false)}
          >
            Kids
          </Link>

          <Link
            to="/products?sale=true"
            className="sale-link"
            onClick={() => setMenuOpen(false)}
          >
            Sale
          </Link>
        </nav>

        {/* RIGHT SIDE */}
        <div className="navbar-actions">

          {/* SEARCH */}
          <button
            className="nav-icon-btn"
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Search"
          >
            🔍
          </button>

          {/* ACCOUNT */}
          <Link
            to="/login"
            className="nav-icon-btn desktop-only"
            aria-label="Account"
          >
            👤
          </Link>

          {/* CART */}
          <Link
            to="/cart"
            className="cart-button"
            aria-label="Shopping cart"
          >
            🛒

            {cartCount > 0 && (
              <span className="cart-count">
                {cartCount}
              </span>
            )}
          </Link>

          {/* MOBILE MENU */}
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* SEARCH BAR */}
      {searchOpen && (
        <div className="navbar-search">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              autoFocus
            />

            <button type="submit">
              Search
            </button>
          </form>
        </div>
      )}
    </header>
  );
}

export default Navbar;