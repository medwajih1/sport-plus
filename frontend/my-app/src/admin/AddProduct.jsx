import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/productSlice";

function AddProduct() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "Shoes",
    gender: "Men",
    stock: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !product.name ||
      !product.price ||
      !product.stock ||
      !product.description
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    dispatch(
      addProduct({
        ...product,
        id: Date.now(),
        price: Number(product.price),
        stock: Number(product.stock),
      })
    );

    alert("Product added successfully!");

    navigate("/admin/products");
  };

  return (
    <div className="admin-page">
      <div className="page-header">
        <div>
          <h1>Add Product</h1>
          <p>Create a new product for your store.</p>
        </div>
      </div>

      <form className="product-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Product Name *</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Example: Air Runner Pro"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Price *</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              placeholder="299"
              min="0"
            />
          </div>

          <div className="form-group">
            <label>Stock *</label>
            <input
              type="number"
              name="stock"
              value={product.stock}
              onChange={handleChange}
              placeholder="20"
              min="0"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Category</label>
            <select
              name="category"
              value={product.category}
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
              value={product.gender}
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
            value={product.image}
            onChange={handleChange}
            placeholder="https://example.com/product.jpg"
          />
        </div>

        <div className="form-group">
          <label>Description *</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Product description..."
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
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;