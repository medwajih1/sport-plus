import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";

function AdminUsers() {
  const users = [
    {
      id: 1,
      name: "Ahmed Ben Ali",
      email: "ahmed@example.com",
      role: "Customer",
      status: "Active",
    },
    {
      id: 2,
      name: "Yassine Trabelsi",
      email: "yassine@example.com",
      role: "Customer",
      status: "Active",
    },
    {
      id: 3,
      name: "Sami Mansour",
      email: "sami@example.com",
      role: "Customer",
      status: "Blocked",
    },
    {
      id: 4,
      name: "Admin",
      email: "admin@example.com",
      role: "Admin",
      status: "Active",
    },
  ];

  return (
    <div className="admin-layout">
      <AdminSidebar />

      <main className="admin-main">
        <AdminNavbar />

        <div className="admin-page">
          <div className="page-header">
            <div>
              <h1>Users</h1>
              <p>View and manage store users.</p>
            </div>
          </div>

          <div className="admin-card">
            <div className="table-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>
                        <div className="user-table-info">
                          <div className="user-avatar">
                            {user.name.charAt(0)}
                          </div>

                          <strong>{user.name}</strong>
                        </div>
                      </td>

                      <td>{user.email}</td>

                      <td>
                        <span className="role-badge">
                          {user.role}
                        </span>
                      </td>

                      <td>
                        <span
                          className={`user-status ${user.status.toLowerCase()}`}
                        >
                          {user.status}
                        </span>
                      </td>

                      <td>
                        {user.role !== "Admin" && (
                          <button
                            className={
                              user.status === "Active"
                                ? "delete-btn"
                                : "edit-btn"
                            }
                            onClick={() =>
                              alert(
                                `User ${user.name} status changed.`
                              )
                            }
                          >
                            {user.status === "Active"
                              ? "Block"
                              : "Activate"}
                          </button>
                        )}
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

export default AdminUsers;