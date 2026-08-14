import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../services/axios";

function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await API.post("/account/login/", formData);
      console.log(response.data);
      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);
      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.log("URL:", error.config?.url);
      console.log("METHOD:", error.config?.method);
      console.log("STATUS:", error.response?.status);
      console.log("DATA:", error.response?.data);
    }
  };

  return (
    <div className="login-form-div mt-5 mb-5">
      <h2 className="login-form-title">Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label className="form-label" htmlFor="username">
            Username:
          </label>
          <input
            className="form-control"
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
            value={formData.username}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label" htmlFor="password">
            Password:
          </label>
          <input
            className="form-control"
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <p className="mt-3 dont-have-account">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
