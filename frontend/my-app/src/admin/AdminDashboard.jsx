import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";
import StatsCard from "../components/StatsCard";

function AdminDashboard() {
  const products = useSelector((state) => state.products.products);
  const orders = useSelector((state) => state.orders.orders);

  const totalUsers = 128;

  const revenue = orders.reduce((total, order) => {
    return total + order.total;
  }, 0);

  const pendingOrders = orders.filter(
    (order) => order.status === "Pending"
  ).length;

  return (
    <div className="admin-layout">
      <AdminSidebar />

      <main className="admin-main">
        <AdminNavbar />

        <div className="admin-page">
          <div className="page-header">
            <div>
              <h1>Dashboard</h1>
              <p>Welcome back, Administrator.</p>
            </div>
          </div>

          <div className="stats-grid">
            <StatsCard
              title="Total Users"
              value={totalUsers}
              icon="👤"
              description="Registered customers"
            />

            <StatsCard
              title="Total Products"
              value={products.length}
              icon="👟"
              description="Products in store"
            />

            <StatsCard
              title="Total Orders"
              value={orders.length}
              icon="📦"
              description={`${pendingOrders} pending`}
            />

            <StatsCard
              title="Revenue"
              value={`${revenue} TND`}
              icon="💰"
              description="Current order revenue"
            />
          </div>

          <div className="dashboard-grid">
            <div className="admin-card">
              <div className="card-header">
                <div>
                  <h3>Recent Orders</h3>
                  <p>Latest customer orders</p>
                </div>

                <Link to="/admin/orders">View All</Link>
              </div>

              <div className="table-container">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Order</th>
                      <th>Customer</th>
                      <th>Total</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {orders.slice(0, 5).map((order) => (
                      <tr key={order.id}>
                        <td>{order.id}</td>
                        <td>{order.customer}</td>
                        <td>{order.total} TND</td>
                        <td>
                          <span
                            className={`status ${order.status.toLowerCase()}`}
                          >
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="admin-card quick-actions">
              <h3>Quick Actions</h3>

              <Link to="/admin/products/add">
                <span>➕</span>
                Add Product
              </Link>

              <Link to="/admin/products">
                <span>👟</span>
                Manage Products
              </Link>

              <Link to="/admin/orders">
                <span>📦</span>
                Manage Orders
              </Link>

              <Link to="/admin/users">
                <span>👤</span>
                Manage Users
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;