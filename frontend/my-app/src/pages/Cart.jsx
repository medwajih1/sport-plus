import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  removeFromCart,
  updateQuantity,
  clearCart,
} from "../redux/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const items = useSelector(
    (state) => state.cart?.items || []
  );

  const itemCount = items.reduce(
    (count, item) => count + Number(item.quantity || 1),
    0
  );

  const subtotal = items.reduce(
    (total, item) =>
      total +
      Number(item.price || 0) *
        Number(item.quantity || 1),
    0
  );

  const shipping = subtotal >= 300 || subtotal === 0
    ? 0
    : 15;

  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <main className="cart-page">

        <div className="empty-cart">

          <span>
            YOUR BAG
          </span>

          <h1>
            Your bag is empty.
          </h1>

          <p>
            Discover our latest products and find
            something you'll love.
          </p>

          <Link
            to="/products"
            className="black-button"
          >
            SHOP NOW
          </Link>

        </div>

      </main>
    );
  }

  return (
    <main className="cart-page">

      <div className="cart-container">

        {/* LEFT */}
        <section className="cart-products">

          <div className="cart-heading">

            <div>
              <span>
                SHOPPING BAG · {itemCount} {itemCount === 1 ? "ITEM" : "ITEMS"}
              </span>

              <h1>
                Your Cart
              </h1>
            </div>

            <button
              onClick={() => dispatch(clearCart())}
              className="clear-cart"
            >
              CLEAR BAG
            </button>

          </div>


          {items.map((item) => {

            const itemId =
              item._id || item.id;

            const image =
              item.image ||
              item.images?.[0];

            return (
              <div
                className="cart-item"
                key={itemId}
              >

                <img
                  src={image}
                  alt={item.name}
                />

                <div className="cart-item-info">

                  <span>
                    {item.category}
                  </span>

                  <h3>
                    {item.name}
                  </h3>

                  <strong>
                    {Number(item.price).toFixed(2)} TND
                  </strong>

                </div>


                <div className="cart-item-actions">

                  <div className="cart-quantity">

                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: itemId,
                            quantity:
                              Math.max(
                                1,
                                item.quantity - 1
                              ),
                          })
                        )
                      }
                    >
                      −
                    </button>

                    <span>
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: itemId,
                            quantity:
                              item.quantity + 1,
                          })
                        )
                      }
                    >
                      +
                    </button>

                  </div>

                  <button
                    className="remove-item"
                    onClick={() =>
                      dispatch(
                        removeFromCart(itemId)
                      )
                    }
                  >
                    REMOVE
                  </button>

                </div>

              </div>
            );
          })}

        </section>


        {/* SUMMARY */}
        <aside className="cart-summary">

          <span>
            ORDER SUMMARY
          </span>

          <h2>
            Summary
          </h2>

          <div className="summary-row">
            <span>
              Subtotal
            </span>

            <strong>
              {subtotal.toFixed(2)} TND
            </strong>
          </div>

          <div className="summary-row">
            <span>
              Shipping
            </span>

            <strong>
              {shipping === 0
                ? "FREE"
                : `${shipping.toFixed(2)} TND`}
            </strong>
          </div>

          <div className="summary-total">

            <span>
              Total
            </span>

            <strong>
              {total.toFixed(2)} TND
            </strong>

          </div>

          <button
            className="checkout-button"
            onClick={() => navigate("/checkout")}
          >
            CHECKOUT
          </button>

          <Link
            to="/products"
            className="continue-shopping"
          >
            ← Continue shopping
          </Link>

        </aside>

      </div>

    </main>
  );
}

export default Cart;
