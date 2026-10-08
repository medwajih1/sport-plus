import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { updateProduct } from "../redux/productSlice";

function EditProduct() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const product = useSelector((state) =>
    state.products.products.find(
      (item) => item.id === Number(id)
    )
  );

  const [form, setForm] = useState(null);

  useEffect(() => {
    if (product) {
      setForm(product);
    }
  }, [product]);

  if (!product || !form) {
    return (
      <div className="admin-page">
        <h2>Product not found</h2>
        <button
          className="primary-btn"
          onClick={() => navigate("/admin/products")}
        >
          Back to Products
        </button>
      </div>
    );
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      updateProduct({
        ...form,
        price: Number(form.price),
        stock: Number(form.stock),
      })
    );

    alert("Product updated successfully!");

    navigate("/admin/products");
  };

  return (
    <div className="admin-page">
      <div className="page-header">
        <div>
          <h1>Edit Product</h1>
          <p>Update product information.</p>
        </div>
      </div>

      <form className="product-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Product Name</label>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Price</label>

            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              min="0"
            />
          </div>

          <div className="form-group">
            <label>Stock</label>

            <input
              type="number"
              name="stock"
              value={form.stock}
              onChange={handleChange}
              min="0"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Category</label>

            <select
              name="category"
              value={form.category}
              onChange={handleChange}
            >
              <option>Shoes</option>
              <option>T-Shirts</option>
              <option>Hoodies</option>
              <option>Pants</option>
              <option>Jackets</option>
              <option>Accessories</option>
            </select>
          </div>

          <div className="form-group">
            <label>Gender</label>

            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
            >
              <option>Men</option>
              <option>Women</option>
              <option>Kids</option>
              <option>Unisex</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Image URL</label>

          <input
            type="text"
            name="image"
            value={form.image}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Description</label>

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows="5"
          />
        </div>

        <div className="form-actions">
          <button
            type="button"
            className="cancel-btn"
            onClick={() => navigate("/admin/products")}
          >
            Cancel
          </button>

          <button type="submit" className="primary-btn">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProduct;