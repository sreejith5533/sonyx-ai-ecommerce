import { useState } from "react";
import API from "../services/axios";
function UserProfileModel({ userProfile, setUserProfile }) {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserProfile((prevData) => ({
      ...prevData,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
            ? e.target.files[0]
            : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("first_name", userProfile.first_name);
    formData.append("last_name", userProfile.last_name);
    formData.append("phone", userProfile.phone);
    formData.append("email", userProfile.email);
    formData.append("gender", userProfile.gender);
    formData.append("dob", userProfile.dob);

    if (userProfile.profile_image instanceof File) {
      formData.append("profile_image", userProfile.profile_image);
    }

    try {
      const response = await API.put("/account/profile/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      console.log(response.data);
      console.log(formData);
    } catch (error) {
      console.error(error.response.data);
      console.log(error.response.status);
    }
  };

  return (
    <div class="modal fade" id="userProfileModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">User Profile Form </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <div class="modal-body">
            <form className="address-form" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="profile_image" className="form-label">
                  User Image
                </label>
                <input
                  type="file"
                  name="profile_image"
                  id="userImage"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div class="mb-3">
                    <label>First Name:</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="First Name"
                      name="first_name"
                      onChange={handleChange}
                      value={userProfile.first_name ?? ""}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div class="mb-3">
                    <label>Last Name:</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="last_name"
                      name="last_name"
                      onChange={handleChange}
                      value={userProfile.last_name ?? ""}
                    />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  Email:
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  value={userProfile.email ?? ""}
                />
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="phone">Mobile Number:</label>
                  <input
                    type="tel"
                    placeholder="Mobile number"
                    className="form-control"
                    name="phone"
                    onChange={handleChange}
                    value={userProfile.phone ?? ""}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="gender">Gender:</label>
                  <select
                    className="form-select"
                    name="gender"
                    onChange={handleChange}
                    value={userProfile.gender ?? ""}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="dob">Date of Birth:</label>
                <input
                  type="date"
                  className="form-control"
                  name="dob"
                  onChange={handleChange}
                  value={userProfile.dob ?? ""}
                />
              </div>
              <div className="d-flex justify-content-end gap-2 mt-4">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>

                <button type="submit" className="btn btn-success">
                  Save Address
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfileModel;
