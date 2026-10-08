import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  if (!product) {
    return null;
  }

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...product,
        quantity: 1,
      })
    );
  };

  return (
    <article className="product-card">

      {/* IMAGE */}
      <div className="product-image-container">

        <Link to={`/products/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
        </Link>

        {/* BADGE */}
        {product.stock <= 5 && product.stock > 0 && (
          <span className="product-badge">
            LOW STOCK
          </span>
        )}

        {product.stock === 0 && (
          <span className="product-badge sold-out">
            SOLD OUT
          </span>
        )}

        {/* QUICK ADD */}
        {product.stock > 0 && (
          <button
            className="quick-add"
            onClick={handleAddToCart}
          >
            + Add to Cart
          </button>
        )}
      </div>

      {/* INFORMATION */}
      <div className="product-info">

        <div className="product-category">
          {product.gender} · {product.category}
        </div>

        <Link
          to={`/products/${product.id}`}
          className="product-name"
        >
          {product.name}
        </Link>

        <p className="product-description">
          {product.description}
        </p>

        <div className="product-bottom">

          <strong className="product-price">
            {product.price} TND
          </strong>

          <Link
            to={`/products/${product.id}`}
            className="view-product"
          >
            View →
          </Link>

        </div>

      </div>
    </article>
  );
}

export default ProductCard;