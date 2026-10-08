import { useNavigate } from "react-router-dom";

function AdminNavbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("admin");
    navigate("/login");
  };

  return (
    <header className="admin-navbar">
      <div>
        <h2>Admin Dashboard</h2>
        <p>Manage your store</p>
      </div>

      <div className="admin-user">
        <div className="admin-avatar">A</div>

        <div className="admin-user-info">
          <strong>Administrator</strong>
          <span>Admin</span>
        </div>

        <button onClick={logout} className="logout-btn">
          Logout
        </button>
      </div>
    </header>
  );
}

export default AdminNavbar;