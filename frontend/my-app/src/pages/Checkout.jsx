import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { clearCart } from "../redux/cartSlice";

function Checkout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const items = useSelector(
    (state) => state.cart?.items || []
  );

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const [payment, setPayment] = useState(
    "cash"
  );

  const [orderPlaced, setOrderPlaced] =
    useState(false);

  const subtotal = items.reduce(
    (total, item) =>
      total +
      Number(item.price || 0) *
        Number(item.quantity || 1),
    0
  );

  const shipping = subtotal >= 300 ? 0 : 15;

  const total = subtotal + shipping;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (items.length === 0) {
      navigate("/products");
      return;
    }

    setOrderPlaced(true);

    dispatch(clearCart());
  };

  if (orderPlaced) {
    return (
      <main className="checkout-success">

        <div>

          <div className="success-icon">
            ✓
          </div>

          <span>
            ORDER CONFIRMED
          </span>

          <h1>
            Thank you for your order.
          </h1>

          <p>
            Your order has been successfully placed.
            You will receive confirmation details soon.
          </p>

          <Link
            to="/orders"
            className="black-button"
          >
            VIEW MY ORDERS
          </Link>

        </div>

      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="empty-checkout">

        <h1>
          Your cart is empty.
        </h1>

        <Link to="/products">
          Go shopping →
        </Link>

      </main>
    );
  }

  return (
    <main className="checkout-page">

      <div className="checkout-container">

        {/* FORM */}
        <section className="checkout-form-section">

          <span>
            CHECKOUT
          </span>

          <h1>
            Delivery information
          </h1>

          <form
            onSubmit={handleSubmit}
            className="checkout-form"
          >

            <div className="form-row">

              <div className="form-group">
                <label>
                  First name
                </label>

                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  Last name
                </label>

                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>


            <div className="form-group">
              <label>
                Email
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>


            <div className="form-group">
              <label>
                Phone
              </label>

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>


            <div className="form-group">
              <label>
                Address
              </label>

              <input
                name="address"
                value={form.address}
                onChange={handleChange}
                required
              />
            </div>


            <div className="form-row">

              <div className="form-group">
                <label>
                  City
                </label>

                <input
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  Postal code
                </label>

                <input
                  name="postalCode"
                  value={form.postalCode}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>


            {/* PAYMENT */}
            <div className="payment-section">

              <h2>
                Payment method
              </h2>

              <label className="payment-option">

                <input
                  type="radio"
                  value="cash"
                  checked={payment === "cash"}
                  onChange={(e) =>
                    setPayment(e.target.value)
                  }
                />

                <div>
                  <strong>
                    Cash on delivery
                  </strong>

                  <span>
                    Pay when your order arrives.
                  </span>
                </div>

              </label>


              <label className="payment-option">

                <input
                  type="radio"
                  value="card"
                  checked={payment === "card"}
                  onChange={(e) =>
                    setPayment(e.target.value)
                  }
                />

                <div>
                  <strong>
                    Credit / Debit Card
                  </strong>

                  <span>
                    Secure online payment.
                  </span>
                </div>

              </label>

            </div>


            <button
              type="submit"
              className="checkout-submit"
            >
              PLACE ORDER — {total.toFixed(2)} TND
            </button>

          </form>

        </section>


        {/* SUMMARY */}
        <aside className="checkout-summary">

          <span>
            YOUR ORDER
          </span>

          <h2>
            Order summary
          </h2>

          {items.map((item) => (

            <div
              className="checkout-item"
              key={item._id || item.id}
            >

              <span>
                {item.name} × {item.quantity}
              </span>

              <strong>
                {(
                  item.price * item.quantity
                ).toFixed(2)} TND
              </strong>

            </div>

          ))}

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

        </aside>

      </div>

    </main>
  );
}

export default Checkout;