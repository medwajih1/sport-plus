import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { login } from "../redux/authSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    if (!form.email || !form.password) {
      setError(
        "Please enter your email and password."
      );
      return;
    }

    dispatch(
      login({
        email: form.email,
        password: form.password,
      })
    );

    navigate("/");
  };

  return (
    <main className="auth-page">

      <div className="auth-container">

        <div className="auth-header">

          <span>
            WELCOME BACK
          </span>

          <h1>
            Sign in.
          </h1>

          <p>
            Access your account and manage your orders.
          </p>

        </div>


        <form
          className="auth-form"
          onSubmit={handleSubmit}
        >

          {error && (
            <div className="form-error">
              {error}
            </div>
          )}

          <div className="form-group">

            <label>
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
            />

          </div>


          <div className="form-group">

            <label>
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
            />

          </div>


          <button
            type="submit"
            className="auth-button"
          >
            SIGN IN
          </button>

        </form>


        <div className="auth-footer">

          <span>
            Don't have an account?
          </span>

          <Link to="/register">
            CREATE ACCOUNT
          </Link>

        </div>

      </div>

    </main>
  );
}

export default Login;