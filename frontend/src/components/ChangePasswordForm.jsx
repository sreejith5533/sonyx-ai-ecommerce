import { useState } from "react";
import API from "../services/axios";
function ChangePasswordForm() {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handlePasswordChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    const errors = {};

    if (formData.newPassword !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };


  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const errors = validate();
    if (Object.keys(errors).length > 0) {
      console.log(errors);
    }

    try {
      const response = await API.post("/account/changepassword/", formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="change-password-form-div">
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="old-password" className="form-label">
            Old Password :
          </label>
          <input
            type="password"
            name="oldPassword"
            id="old-password"
            onChange={handlePasswordChange}
            value={formData.oldPassword}
            required
            className="form-control"
            placeholder="Enter Your Old Password"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="new-password" className="form-label">
            New Password :
          </label>
          <input
            type="password"
            name="newPassword"
            id="new-password"
            onChange={handlePasswordChange}
            value={formData.newPassword}
            required
            className="form-control"
            placeholder="Enter Your New Password"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirm-password" className="form-label">
            Confirm Password :
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirm-password"
            onChange={handlePasswordChange}
            value={formData.confirmPassword}
            required
            className="form-control"
            placeholder="Confirm Your New Password"
          />
        </div>
        <div>
          <button className="btn change-password-btn" type="submit">
            Change Password
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChangePasswordForm;
