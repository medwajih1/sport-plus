import { useDispatch, useSelector } from "react-redux";

import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";
import { updateOrderStatus } from "../redux/orderSlice";

function AdminOrders() {
  const orders = useSelector((state) => state.orders.orders);

  const dispatch = useDispatch();

  const changeStatus = (id, status) => {
    dispatch(
      updateOrderStatus({
        id,
        status,
      })
    );
  };

  return (
    <div className="admin-layout">
      <AdminSidebar />

      <main className="admin-main">
        <AdminNavbar />

        <div className="admin-page">
          <div className="page-header">
            <div>
              <h1>Orders</h1>
              <p>Manage customer orders.</p>
            </div>
          </div>

          <div className="admin-card">
            <div className="table-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th>Update</th>
                  </tr>
                </thead>

                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td>
                        <strong>{order.id}</strong>
                      </td>

                      <td>{order.customer}</td>

                      <td>{order.date}</td>

                      <td>{order.total} TND</td>

                      <td>
                        <span
                          className={`status ${order.status.toLowerCase()}`}
                        >
                          {order.status}
                        </span>
                      </td>

                      <td>
                        <select
                          className="status-select"
                          value={order.status}
                          onChange={(e) =>
                            changeStatus(
                              order.id,
                              e.target.value
                            )
                          }
                        >
                          <option>Pending</option>
                          <option>Processing</option>
                          <option>Shipped</option>
                          <option>Delivered</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminOrders;