import API from "../services/axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    try{
      console.log(formData);
      const response = await API.post("/account/signup/", formData);
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }

    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="signup-form-div">
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label className="form-label" htmlFor="username">
            Name:
          </label>
          <input
            className="form-control"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label" htmlFor="email">
            Email:
          </label>
          <input
            className="form-control"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
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
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label" htmlFor="confirm-password">
            Confirm Password:
          </label>
          <input
            className="form-control"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="sign-up-button">
          Sign Up
        </button>
        <p className="policy-paragraph">
          By confirming, you agree to the SONYX Technical Data Policy and
          Engineering Privacy Standards.
        </p>
      </form>
    </div>
  );
}

export default SignupForm;
