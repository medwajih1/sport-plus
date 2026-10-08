import { NavLink } from "react-router-dom";

function AdminSidebar() {
  return (
    <aside className="admin-sidebar">
      <div className="admin-logo">
        <span>SPORT</span>
        <small>ADMIN PANEL</small>
      </div>

      <nav>
        <NavLink
          to="/admin"
          end
          className={({ isActive }) =>
            isActive ? "admin-link active" : "admin-link"
          }
        >
          📊 <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/admin/products"
          className={({ isActive }) =>
            isActive ? "admin-link active" : "admin-link"
          }
        >
          👟 <span>Products</span>
        </NavLink>

        <NavLink
          to="/admin/orders"
          className={({ isActive }) =>
            isActive ? "admin-link active" : "admin-link"
          }
        >
          📦 <span>Orders</span>
        </NavLink>

        <NavLink
          to="/admin/users"
          className={({ isActive }) =>
            isActive ? "admin-link active" : "admin-link"
          }
        >
          👤 <span>Users</span>
        </NavLink>
      </nav>

      <div className="sidebar-bottom">
        <NavLink to="/" className="admin-link">
          🏠 <span>Back to Store</span>
        </NavLink>
      </div>
    </aside>
  );
}

export default AdminSidebar;