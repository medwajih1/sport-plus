import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";
import { deleteProduct } from "../redux/productSlice";

function AdminProducts() {
  const products = useSelector((state) => state.products.products);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (confirmDelete) {
      dispatch(deleteProduct(id));
    }
  };

  return (
    <div className="admin-layout">
      <AdminSidebar />

      <main className="admin-main">
        <AdminNavbar />

        <div className="admin-page">
          <div className="page-header">
            <div>
              <h1>Products</h1>
              <p>Manage all products in your store.</p>
            </div>

            <Link to="/admin/products/add" className="primary-btn">
              + Add Product
            </Link>
          </div>

          <div className="admin-card">
            <div className="table-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Category</th>
                    <th>Gender</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td>
                        <div className="product-table-info">
                          <img
                            src={product.image}
                            alt={product.name}
                          />

                          <strong>{product.name}</strong>
                        </div>
                      </td>

                      <td>{product.category}</td>

                      <td>{product.gender}</td>

                      <td>{product.price} TND</td>

                      <td>
                        <span
                          className={
                            product.stock <= 5
                              ? "stock low"
                              : "stock"
                          }
                        >
                          {product.stock}
                        </span>
                      </td>

                      <td>
                        <div className="action-buttons">
                          <button
                            className="edit-btn"
                            onClick={() =>
                              navigate(
                                `/admin/products/edit/${product.id}`
                              )
                            }
                          >
                            Edit
                          </button>

                          <button
                            className="delete-btn"
                            onClick={() =>
                              handleDelete(product.id)
                            }
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {products.length === 0 && (
                <div className="empty-state">
                  <h3>No products found</h3>
                  <p>Add your first product.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminProducts;