import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    if (
      !form.firstName ||
      !form.lastName ||
      !form.email ||
      !form.password
    ) {
      setError(
        "Please complete all required fields."
      );
      return;
    }

    if (form.password.length < 6) {
      setError(
        "Password must contain at least 6 characters."
      );
      return;
    }

    if (
      form.password !==
      form.confirmPassword
    ) {
      setError(
        "Passwords do not match."
      );
      return;
    }

    /*
      Later this will call:
      POST /api/auth/register
    */

    navigate("/login");
  };

  return (
    <main className="auth-page">

      <div className="auth-container register-container">

        <div className="auth-header">

          <span>
            CREATE ACCOUNT
          </span>

          <h1>
            Join us.
          </h1>

          <p>
            Create your account and start shopping.
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


          <div className="form-row">

            <div className="form-group">

              <label>
                First name
              </label>

              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                required
              />

            </div>


            <div className="form-group">

              <label>
                Last name
              </label>

              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                required
              />

            </div>

          </div>


          <div className="form-group">

            <label>
              Email
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />

          </div>


          <div className="form-group">

            <label>
              Password
            </label>

            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />

          </div>


          <div className="form-group">

            <label>
              Confirm password
            </label>

            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />

          </div>


          <button
            type="submit"
            className="auth-button"
          >
            CREATE ACCOUNT
          </button>

        </form>


        <div className="auth-footer">

          <span>
            Already have an account?
          </span>

          <Link to="/login">
            SIGN IN
          </Link>

        </div>

      </div>

    </main>
  );
}

export default Register;