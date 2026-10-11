
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const API_URL = "https://sport-plus-1.onrender.com/api";


function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // =========================
  // GET PRODUCT FROM BACKEND
  // =========================
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `${API_URL}/products/${id}`
        );

        if (!response.ok) {
          throw new Error("Product not found");
        }

        const data = await response.json();

        setProduct(data);
      } catch (error) {
        console.error("Product details error:", error);
        setError("Product not found");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // =========================
  // LOADING
  // =========================
  if (loading) {
    return (
      <main className="not-found-page">
        <h1>Loading product...</h1>
        <p>Please wait.</p>
      </main>
    );
  }

  // =========================
  // ERROR
  // =========================
  if (error || !product) {
    return (
      <main className="not-found-page">
        <h1>Product not found</h1>

        <p>
          The product you're looking for doesn't exist.
        </p>

        <Link to="/products">
          ← Back to products
        </Link>
      </main>
    );
  }

  // =========================
  // QUANTITY
  // =========================
  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity((prev) => prev + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  // =========================
  // ADD TO CART
  // =========================
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...product,
        id: product._id,
        quantity,
      })
    );
  };

  return (
    <main className="product-details-page">
      <div className="product-details-container">

        {/* PRODUCT IMAGE */}

        <div className="product-details-image">
          <img
            src={product.image}
            alt={product.name}
          />
        </div>

        {/* PRODUCT INFORMATION */}

        <div className="product-details-info">

          <span className="product-details-category">
            {product.gender} / {product.category}
          </span>

          <h1>
            {product.name}
          </h1>

          <div className="product-details-price">
            {Number(product.price).toFixed(2)} TND
          </div>

          <p className="product-details-description">
            {product.description}
          </p>

          {/* STOCK */}

          <div className="stock-info">
            {product.stock > 0 ? (
              <>
                <span className="stock-dot"></span>

                <span>
                  In stock — {product.stock} available
                </span>
              </>
            ) : (
              <span>
                Out of stock
              </span>
            )}
          </div>

          {/* QUANTITY */}

          {product.stock > 0 && (
            <div className="quantity-section">

              <span className="quantity-label">
                Quantity
              </span>

              <div className="quantity-control">

                <button
                  type="button"
                  onClick={decreaseQuantity}
                  disabled={quantity <= 1}
                >
                  −
                </button>

                <span>
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={increaseQuantity}
                  disabled={
                    quantity >= product.stock
                  }
                >
                  +
                </button>

              </div>

            </div>
          )}

          {/* ADD TO CART */}

          <button
            type="button"
            className="details-add-button"
            onClick={handleAddToCart}
            disabled={product.stock === 0}
          >
            {product.stock > 0
              ? "ADD TO BAG"
              : "SOLD OUT"}
          </button>

          {/* BENEFITS */}

          <div className="product-info-list">

            <div>
              <strong>
                FREE DELIVERY
              </strong>

              <span>
                Available across Tunisia.
              </span>
            </div>

            <div>
              <strong>
                SECURE PAYMENT
              </strong>

              <span>
                Your payment information is protected.
              </span>
            </div>

            <div>
              <strong>
                EASY RETURNS
              </strong>

              <span>
                Simple return process.
              </span>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}

export default ProductDetails;

