import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const products = [
  {
    id: "air-max-1",
    name: "Air Max 1",
    price: 459,
    category: "Shoes",
    gender: "Men",
    description:
      "Classic everyday sneakers designed with a comfortable fit and modern sportswear aesthetic.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1000",
    stock: 10,
  },
  {
    id: "air-runner",
    name: "Air Runner",
    price: 399,
    category: "Shoes",
    gender: "Men",
    description:
      "Lightweight running shoes designed for training, running and everyday movement.",
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=1000",
    stock: 8,
  },
  {
    id: "street-shoe",
    name: "Street Essential",
    price: 329,
    category: "Shoes",
    gender: "Women",
    description:
      "Modern lifestyle sneakers for everyday movement.",
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=1000",
    stock: 12,
  },
  {
    id: "essential-hoodie",
    name: "Essential Hoodie",
    price: 249,
    category: "Clothing",
    gender: "Unisex",
    description:
      "Premium heavyweight hoodie for everyday wear.",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=1000",
    stock: 15,
  },
  {
    id: "sport-tshirt",
    name: "Dri-FIT Sport T-Shirt",
    price: 149,
    category: "Clothing",
    gender: "Men",
    description:
      "Breathable performance t-shirt for training.",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1000",
    stock: 20,
  },
  {
    id: "women-top",
    name: "Training Top",
    price: 179,
    category: "Clothing",
    gender: "Women",
    description:
      "Lightweight training top with a comfortable fit.",
    image:
      "https://images.unsplash.com/photo-1506629905607-d9c297d4e7c8?w=1000",
    stock: 9,
  },
  {
    id: "kids-runner",
    name: "Kids Runner",
    price: 279,
    category: "Shoes",
    gender: "Kids",
    description:
      "Comfortable running shoes for active kids.",
    image:
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=1000",
    stock: 7,
  },
  {
    id: "training-pants",
    name: "Training Pants",
    price: 199,
    category: "Clothing",
    gender: "Unisex",
    description:
      "Flexible training pants for everyday movement.",
    image:
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=1000",
    stock: 18,
  },
];

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  // Find the product using the URL ID
  const product = products.find(
    (item) => item.id === id
  );

  // Product doesn't exist
  if (!product) {
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

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...product,
        quantity,
      })
    );
  };

  return (
    <main className="product-details-page">

      <div className="product-details-container">

        {/* =========================
            PRODUCT IMAGE
        ========================== */}

        <div className="product-details-image">
          <img
            src={product.image}
            alt={product.name}
          />
        </div>


        {/* =========================
            PRODUCT INFORMATION
        ========================== */}

        <div className="product-details-info">

          <span className="product-details-category">
            {product.gender} / {product.category}
          </span>

          <h1>
            {product.name}
          </h1>

          <div className="product-details-price">
            {product.price.toFixed(2)} TND
          </div>

          <p className="product-details-description">
            {product.description}
          </p>


          {/* =========================
              STOCK
          ========================== */}

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


          {/* =========================
              QUANTITY
          ========================== */}

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
                  disabled={quantity >= product.stock}
                >
                  +
                </button>

              </div>

            </div>
          )}


          {/* =========================
              ADD TO CART
          ========================== */}

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


          {/* =========================
              BENEFITS
          ========================== */}

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