import { Link } from "react-router-dom";

const orders = [
  {
    id: "ORD-2026-001",
    date: "September 25, 2026",
    status: "Delivered",
    total: 459,
    items: [
      {
        name: "Air Max 1",
        quantity: 1,
      },
    ],
  },
  {
    id: "ORD-2026-002",
    date: "September 22, 2026",
    status: "Processing",
    total: 498,
    items: [
      {
        name: "Essential Hoodie",
        quantity: 2,
      },
    ],
  },
];

function Orders() {
  return (
    <main className="orders-page">

      <div className="orders-container">

        <div className="orders-header">

          <span>
            ACCOUNT
          </span>

          <h1>
            My Orders
          </h1>

          <p>
            Track and manage your previous orders.
          </p>

        </div>


        {orders.length === 0 ? (

          <div className="empty-orders">

            <h2>
              No orders yet.
            </h2>

            <p>
              Your orders will appear here.
            </p>

            <Link
              to="/products"
              className="black-button"
            >
              START SHOPPING
            </Link>

          </div>

        ) : (

          <div className="orders-list">

            {orders.map((order) => (

              <article
                className="order-card"
                key={order.id}
              >

                <div className="order-card-top">

                  <div>

                    <span>
                      ORDER
                    </span>

                    <h3>
                      {order.id}
                    </h3>

                  </div>

                  <div>

                    <span>
                      DATE
                    </span>

                    <p>
                      {order.date}
                    </p>

                  </div>

                  <div>

                    <span>
                      TOTAL
                    </span>

                    <strong>
                      {order.total.toFixed(2)} TND
                    </strong>

                  </div>

                  <div>

                    <span>
                      STATUS
                    </span>

                    <strong
                      className={`order-status ${order.status.toLowerCase()}`}
                    >
                      {order.status}
                    </strong>

                  </div>

                </div>


                <div className="order-card-bottom">

                  <div>

                    {order.items.map((item, index) => (

                      <p key={index}>
                        {item.name} × {item.quantity}
                      </p>

                    ))}

                  </div>

                  <button>
                    VIEW ORDER
                  </button>

                </div>

              </article>

            ))}

          </div>

        )}

      </div>

    </main>
  );
}

export default Orders;